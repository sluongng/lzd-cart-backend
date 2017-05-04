/**
 * Created by NB on 5/5/2017.
 */

import uuid from 'uuid';
import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'lzd-cart-items',

    Item: {
      cartId: uuid.v4(),
      items: [{
        itemId: '',
        itemName: '',
        quantity: '',
      }],
      total: 0.00,
      createdAt: new Date().getTime(),
    },
  };

  try{
    console.log("[createCart.js][DEBUG]: Pre-connection to DynamoDb");
    const result = await dynamoDbLib.call('put', params);
    console.log("[createCart.js][DEBUG]: Post-connection result: " + result.toString());
    callback(null, success(params.Item));
  }
  catch(e) {
    console.log("[createCart.js][ERROR]: " + e.toString());
    callback(null, e);
  }
}