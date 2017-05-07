/**
 * Created by NB on 5/6/2017.
 */

import { success, notFound } from "./libs/response-lib";
import _ from "lodash";
import { priceTable }  from "./priceTable2.json";

//shipping price is simply a relationship between location points
//this could either be done by a generic distance lookup via online map webservice
//OR we could store locations in a graphDb
//
//realistically 2 different items sharing the same source-destination could still have different shipping price due
//to different vendor shipping method
//
//here I used a temp hardcoded JSON to focus on demonstrating solution for price calculation
//this is not ideal and should not be applied in production
//
//General lookup sequence: Item -> Source -> Destination -> Price
const CONST_PRICE_TABLE = priceTable;

//this should be in a separate config file
//but that would require an endpoint to
//fetch config file from AWS S3
//thus increase the complexity of demo solution
const CONST_FLAT_RATE = 5.00;

//async was added as a provision of future usages of Database queries
//
export async function main(event, context, callback) {

  const data = JSON.parse(event.body);

  const destination = data.destination;

  let res = _.cloneDeep(data);

  if (res.items.size < 1) {
    callback(notFound("Cart is empty"));
    return;
  }

  res.items.map((item) => {
    const temp = shippingCost(destination, item, callback);
    if (temp === -1) callback(null, notFound("Item not found in price table"));

    item.shippingCost = temp.price + temp.overweightFee;
    item.bestSource = temp.sourceId;
  });

  let totalShippingCost = 0;
  let totalValue = 0;

  res.items.forEach(function(item) {
    totalValue = totalValue + (item.itemDetails.value * item.quantity);
  });

  if (totalValue <= 100) totalShippingCost = totalShippingCost + CONST_FLAT_RATE;

  res.items.forEach(function(item) {
    totalShippingCost = totalShippingCost + item.shippingCost;
  });

  res.cartPrice = totalValue + totalShippingCost;

  callback(null, success(res));
}

//Input:
//  destination
//  item
//Output:
//  lowest 'cost' of respective 'item' shipping to respective 'destination'
//Error:
//  [400] item not found
//  [400] destination not found
function shippingCost(destination, item, callback) {

  // DEBUG
  console.log("STARTING shippingCost for destination " + destination + " and item " + item.itemId);

  const itemId = item.itemId;

  // DEBUG
  // console.log("itemId being lookup: " + itemId);

  //find index of item in priceTable
  //TODO: replace _.findIndex with _.find
  let index = _.findIndex( CONST_PRICE_TABLE , function(o) {

    // DEBUG
    // console.log("itemId inside priceTable: " + o.itemId);

    return o.itemId === itemId;
  });
  if (index === -1) {
    callback(null, notFound("Item not found in price table"));
    return;
  }

  // DEBUG
  // console.log("The index id is: " + index);
  // console.log("-----------------");

  const sources = CONST_PRICE_TABLE[index].sources;

  // DEBUG
  // console.log("The first sourceId of item " + itemId + " is: " + sources[0].sourceId);

  //create an array of {sourceId, price}
  const sourceAndPrice = sources.map(function(source) {
    const destinations = source.destinations;

    // var i = _.findIndex(destinations, function(o) { return o.destination; })
    //
    // if (i === -1) return -2;

    let temp = _.find(destinations, function(dest) {

      // DEBUG
      console.log("The dest node " + dest.destination + " price is: " + dest.price);

      return dest.destination === destination;
    });

    if (typeof temp === "undefined") {
      callback(null, notFound("Destination " + destination + " was not found in Price Table"));
      return;
    }

    return {
      sourceId: source.sourceId,
      price: temp.price
    };
  });

  let prices = _.map(sourceAndPrice, 'price');

  let minCost = _.min(prices);

  let bestSourceAndPrice = _.find(sourceAndPrice, function(o) { return o.price === minCost; });

  // sources.forEach( (source) => {
  //   const location = source.location;
  // } );



  let overweightFee = 0;

  const totalWeight = item.itemDetails.weight * item.quantity;

  if (totalWeight > 1) overweightFee = (CONST_FLAT_RATE * 10 / 100) * (totalWeight - 1);

  const res = {
    sourceId: bestSourceAndPrice.sourceId,
    price: bestSourceAndPrice.price,
    overweightFee: overweightFee
  };

  // DEBUG
  console.log("bestSource is: " + res.sourceId);
  console.log("minCost is: " + res.price);
  console.log("overweightFee is: " + res.overweightFee);
  console.log("-----END------");

  return res;
}