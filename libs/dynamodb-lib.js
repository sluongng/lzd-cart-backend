/**
 * Created by NB on 5/5/2017.
 */

import AWS from 'aws-sdk';

AWS.config.update({region:'ap-northeast-2'});

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}