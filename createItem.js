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
      itemId: uuid.v4(),
      itemName: data.item.name,
      sourceLocations: data.item.Origins,
      price: data.item.price,
      createdAt: new Date().getTime(),
    },
  };

  try{
    const result = await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  }
  catch(e) {
    callback(null, e);
  }
}