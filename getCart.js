/**
 * Created by NB on 5/6/2017.
 */

import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const defaultCart = {
    cartId: 'Cart12334',
    items: [
      {
        itemId: 'item1',
        itemDetails: {
          name: 'ePhone 9',
          pictures: [
            {
              pictureId: 100001,
              resourceUrl: ''
            }
          ],
          value: 700,
          weight: 0.14,
          sources: [
            {source: 100003},
            {source: 100002},
            {source: 100001}
          ]
        },
        bestSource: '',
        quantity: 1,
        shippingCost: 0.00,
        totalPrice: 0.00
      },
      {
        itemId: 'item2',
        itemDetails: {
          name: 'TV SamSong 40 inches',
          pictures: [
            {
              pictureId: 100001,
              resourceUrl: ''
            }
          ],
          value: 1000,
          weight: 8.00,
          sources: [
            {source: 100001},
            {source: 100002}
          ]
        },
        bestSource: '',
        quantity: 1,
        shippingCost: 0.00,
        totalPrice: 0.00
      },
      {
        itemId: 'item3',
        itemDetails: {
          name: 'grounded coffee arabica',
          pictures: [
            {
              pictureId: 100001,
              resourceUrl: ''
            }
          ],
          value: 35,
          weight: 0.1,
          sources: [
            {source: 100003}
          ]
        },
        bestSource: '',
        quantity: 1,
        shippingCost: 0.00,
        totalPrice: 0.00
      },

    ],
    destination: 100003,
    cartPrice: 0.00
  };

  callback(null, success(defaultCart));
}