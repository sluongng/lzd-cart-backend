/**
 * Created by NB on 5/6/2017.
 */

import {success} from "./libs/response-lib";
import _ from "lodash";
import priceTable from "./priceTable";

export async function main(event, context, callback) {

  const data = JSON.parse(event.body);

  const destination = data.destination;

  let items = data.items;

  let res = _.cloneDeep(data);

  //TODO: implement price calculation

  // _.mapValues(res.items, function(item) {
  //   const lowest = shippingCost(destination, item);
  // });

  res.items.map((item) => {shippingCost(destination, item);});

  callback(null, success(res));
}

function shippingCost(destination, item) {
  const result = 0;

  return result;
}