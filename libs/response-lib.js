/**
 * Created by NB on 5/5/2017.
 */

export function success(body) {
  return buildResponse(200, body);
}

export function notFound(body) {
  return buildResponse(400, body);
}

export function failure(body) {
  return buildResponse(500, body);
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },

    body: JSON.stringify(body),
  };
}