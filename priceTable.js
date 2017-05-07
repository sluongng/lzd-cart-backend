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

export default {
  "items": [
    {
      "itemId": "item1",
      "sources": [
        {
          "source": 100001,
          "destinations": [
            {
              "destination": 100001,
              "price": 0.00
            },
            {
              "destination": 100002,
              "price": 3.00
            },
            {
              "destination": 100003,
              "price": 10.00
            }
          ]
        },
        {
          "source": 100002,
          "destinations": [
            {
              "destination": 100001,
              "price": 3.00
            },
            {
              "destination": 100002,
              "price": 0.00
            },
            {
              "destination": 100003,
              "price": 5.00
            }
          ]
        },
        {
          "source": 100003,
          "destinations": [
            {
              "destination": 100001,
              "price": 10.00
            },
            {
              "destination": 100002,
              "price": 5.00
            },
            {
              "destination": 100003,
              "price": 0.00
            }
          ]
        }
      ]
    },
    {
      "itemId": "item2",
      "sources": [
        {
          "source": 100001,
          "destinations": [
            {
              "destination": 100001,
              "price": 0.00
            },
            {
              "destination": 100002,
              "price": 2.00
            },
            {
              "destination": 100003,
              "price": 4.00
            }
          ]
        },
        {
          "source": 100002,
          "destinations": [
            {
              "destination": 100001,
              "price": 2.00
            },
            {
              "destination": 100002,
              "price": 0.00
            },
            {
              "destination": 100003,
              "price": 8.00
            }
          ]
        },
        {
          "source": 100003,
          "destinations": [
            {
              "destination": 100001,
              "price": 4.00
            },
            {
              "destination": 100002,
              "price": 8.00
            },
            {
              "destination": 100003,
              "price": 0.00
            }
          ]
        }
      ]
    },
    {
      "itemId": "item3",
      "sources": [
        {
          "source": 100001,
          "destinations": [
            {
              "destination": 100001,
              "price": 0.00
            },
            {
              "destination": 100002,
              "price": 7.00
            },
            {
              "destination": 100003,
              "price": 4.00
            }
          ]
        },
        {
          "source": 100002,
          "destinations": [
            {
              "destination": 100001,
              "price": 7.00
            },
            {
              "destination": 100002,
              "price": 0.00
            },
            {
              "destination": 100003,
              "price": 3.00
            }
          ]
        },
        {
          "source": 100003,
          "destinations": [
            {
              "destination": 100001,
              "price": 4.00
            },
            {
              "destination": 100002,
              "price": 3.00
            },
            {
              "destination": 100003,
              "price": 0.00
            }
          ]
        }
      ]
    }
  ]
}