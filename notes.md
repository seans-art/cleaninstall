Hi there, thanks for reaching out! For digital products within the SKU resource:
﻿https://docs.commercelayer.io/api/resources/skus
﻿we have two attributes:
﻿- do_not_ship
﻿- don_not_track
that you can set to true.
They manage the creation of the shipment and the tracking of the inventory separately

<!-- Import SKUS -->
curl -X POST \
  https://smozart.commercelayer.io/api/imports \
  -H 'Accept: application/vnd.api+json' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJFbkF2YUZNcUtSIiwic2x1ZyI6InNtb3phcnQifSwiYXBwbGljYXRpb24iOnsiaWQiOiJETWp2ZGl3ZW9NIiwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2MjI2MDE1NDEsIm1hcmtldCI6eyJpZCI6WyJCbHhySmhQUGRqIl0sInByaWNlX2xpc3RfaWQiOiJHa2FReUNybVprIiwic3RvY2tfbG9jYXRpb25faWRzIjpbImVNdm1FdWxLUmsiXSwiZ2VvY29kZXJfaWQiOm51bGwsImFsbG93c19leHRlcm5hbF9wcmljZXMiOmZhbHNlfSwicmFuZCI6MC44NDM2NjM2OTU5NzA4MzA5fQ.cNxJ_-_B-gllKgmWpHqG797vYq2jxeR5xB4VWqoIMCFM3iO1VHS04SXXnd1_2HZtej4j1LFfUXhkqOXL09y4Eg' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
	"data": {
	  "type": "imports",
	  "attributes": {
	    "resource_type": "skus",
        "parent_resource_id": "4750",
	    "inputs": [
	        {
                "code": "08x10FC",
                "name": "8 x 10 Inch Full Color Portrait"
	        },
	        {
                "code": "09x12FC",
                "name": "9 x 12 Inch Full Color Portrait"
	        },
            {
                "code": "11x14FC",
                "name": "11 x 14 Inch Full Color Portrait"
	        },
	        {
                "code": "12x16FC",
                "name": "12 x 16 Inch Full Color Portrait"
	        },
            {
                "code": "18x24FC",
                "name": "18 x 24 Inch Full Color Portrait"
	        },
	        {
                "code": "20x24FC",
                "name": "20 x 24 Inch Full Color Portrait"
	        },
            {
                "code": "22x28FC",
                "name": "22 x 28 Inch Full Color Portrait"
	        },
	        {
                "code": "20x30FC",
                "name": "20 x 30 Inch Full Color Portrait"
	        },
            {
                "code": "24x36FC",
                "name": "24 x 36 Inch Full Color Portrait"
	        },
	        {
                "code": "14x18FC",
                "name": "14 x 18 Inch Full Color Portrait"
	        },
        ]
	  }
	}
}'

<!-- 
            {
                "code": "08x10BW",
                "name": "8 x 10 Inch Black & White Portrait"
	        },
	        {
                "code": "09x12BW",
                "name": "9 x 12 Inch Black & White Portrait"
	        },
            {
                "code": "11x14BW",
                "name": "11 x 14 Inch Black & White Portrait"
	        },
	        {
                "code": "12x16BW",
                "name": "12 x 16 Inch Black & White Portrait"
	        },
            {
                "code": "14x18BW",
                "name": "14 x 18 Inch Black & White Portrait"
	        },
	        {
                "code": "16x20BW",
                "name": "16 x 20 Inch Black & White Portrait"
	        },
            {
                "code": "18x24BW",
                "name": "18 x 24 Inch Black & White Portrait"
	        },
	        {
                "code": "20x24BW",
                "name": "20 x 24 Inch Black & White Portrait"
	        },
            {
                "code": "22x28BW",
                "name": "22 x 28 Inch Black & White Portrait"
	        },
	        {
                "code": "20x30BW",
                "name": "20 x 30 Inch Black & White Portrait"
	        }
 -->

<!-- Get SMOZart Org Token -->
curl -X POST \
  https://smozart.commercelayer.io/oauth/token \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "grant_type": "client_credentials",
  "client_id": "g3l-E_cXHUxkzTP2NKkNhcwwJg5JUwbCUnpI6F-Y6EQ",
  "scope": "market:4771"
}'

<!-- Get Self Org Token -->
curl -X POST \
  https://self.commercelayer.io/oauth/token \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "grant_type": "client_credentials",
  "client_id": "r22xcbeSlfnB6ZyWjxJ8Zpva2LZ7P4dk1hHA4i238qY",
  "scope": "market:4700"
}'

<!-- FUll Color Access Token -->
{"access_token":"eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJqWGRXYkZqWU15Iiwic2x1ZyI6InNlbGYifSwiYXBwbGljYXRpb24iOnsiaWQiOiJkTW5XbWl3RU9wIiwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2MjI1OTY0MzUsIm1hcmtldCI6eyJpZCI6WyJybEVQemh5UHpnIl0sInByaWNlX2xpc3RfaWQiOiJ4QnFqTkNSZ0drIiwic3RvY2tfbG9jYXRpb25faWRzIjpbImVuanBvdWdXcGsiXSwiZ2VvY29kZXJfaWQiOm51bGwsImFsbG93c19leHRlcm5hbF9wcmljZXMiOmZhbHNlfSwicmFuZCI6MC41MjE0MjM0OTI3Mzc3ODk3fQ.n7pbUWWFPA_kORNQkwHwKU85W7-OYAFKphu1GTGNND0N5vPJIEpMZPefrc1HzJA3Lr8-42h-94GShnE15tviow","token_type":"Bearer","expires_in":14400,"scope":"market:4750","created_at":1622582035}

<!-- BW Access Token -->
{"access_token":"eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJqWGRXYkZqWU15Iiwic2x1ZyI6InNlbGYifSwiYXBwbGljYXRpb24iOnsiaWQiOiJkTW5XbWl3RU9wIiwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2MjI1OTY3MDAsIm1hcmtldCI6eyJpZCI6WyJib09FUWhHREVnIl0sInByaWNlX2xpc3RfaWQiOiJkTEdKRUN5UGVsIiwic3RvY2tfbG9jYXRpb25faWRzIjpbImVuanBvdWdXcGsiXSwiZ2VvY29kZXJfaWQiOm51bGwsImFsbG93c19leHRlcm5hbF9wcmljZXMiOmZhbHNlfSwicmFuZCI6MC41MjAzNTc1NjE4Mjc1ODY2fQ.jda-mrudCcF_Fa1-gTXVN-8MOkrv1kobzybzUvx0Lk_e2S9bCiZACl0GJOPGP-XGqfEAX3B2882DvG7fgn6-FA","token_type":"Bearer","expires_in":14400,"scope":"market:4700","created_at":1622582300}

<!-- Get Self SKUS -->
curl -X GET \
    http://smozart.commercelayer.io/api/skus \
    -H 'Accept: application/vnd.api+json' \
    -H 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiJFbkF2YUZNcUtSIiwic2x1ZyI6InNtb3phcnQifSwiYXBwbGljYXRpb24iOnsiaWQiOiJETWp2ZGl3ZW9NIiwia2luZCI6InNhbGVzX2NoYW5uZWwiLCJwdWJsaWMiOnRydWV9LCJ0ZXN0Ijp0cnVlLCJleHAiOjE2MjI2MDE1NDEsIm1hcmtldCI6eyJpZCI6WyJCbHhySmhQUGRqIl0sInByaWNlX2xpc3RfaWQiOiJHa2FReUNybVprIiwic3RvY2tfbG9jYXRpb25faWRzIjpbImVNdm1FdWxLUmsiXSwiZ2VvY29kZXJfaWQiOm51bGwsImFsbG93c19leHRlcm5hbF9wcmljZXMiOmZhbHNlfSwicmFuZCI6MC44NDM2NjM2OTU5NzA4MzA5fQ.cNxJ_-_B-gllKgmWpHqG797vYq2jxeR5xB4VWqoIMCFM3iO1VHS04SXXnd1_2HZtej4j1LFfUXhkqOXL09y4Eg'

<!-- Return Self SKUS for full color -->
{
  "data": [
    {
      "id": "BjwqSbERYn",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn"
      },
      "attributes": {
        "code": "08x10FC",
        "name": "8 x 10 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:05:45.023Z",
        "updated_at": "2021-06-01T20:02:44.081Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbERYn/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbERYn/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbERYn/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbERYn/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbERYn/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbERYn/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbERYn/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nvAJSRlzlB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB"
      },
      "attributes": {
        "code": "09x12FC",
        "name": "9 x 12 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:08:52.628Z",
        "updated_at": "2021-06-01T20:03:04.598Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlzlB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "ZbpjSXJjQB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB"
      },
      "attributes": {
        "code": "11x14FC",
        "name": "11 x 14 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:12:32.353Z",
        "updated_at": "2021-06-01T20:03:48.584Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJjQB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "ZyyESNaGjZ",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ"
      },
      "attributes": {
        "code": "12x16FC",
        "name": "12 x 16 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:13:02.368Z",
        "updated_at": "2021-06-01T20:04:09.866Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/ZyyESNaGjZ/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nKjRSYeGAB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB"
      },
      "attributes": {
        "code": "18x24FC",
        "name": "18 x 24 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:14:04.275Z",
        "updated_at": "2021-06-01T20:09:31.388Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nKjRSYeGAB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nJoqSAORYZ",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ"
      },
      "attributes": {
        "code": "20x24FC",
        "name": "20 x 24 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:14:51.485Z",
        "updated_at": "2021-06-01T20:10:10.201Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nJoqSAORYZ/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "naDeSPmayB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/naDeSPmayB"
      },
      "attributes": {
        "code": "22x28FC",
        "name": "22 x 28 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:16:13.119Z",
        "updated_at": "2021-06-01T20:11:08.309Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/naDeSPmayB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/naDeSPmayB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/naDeSPmayB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/naDeSPmayB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/naDeSPmayB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/naDeSPmayB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/naDeSPmayB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/naDeSPmayB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/naDeSPmayB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/naDeSPmayB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/naDeSPmayB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/naDeSPmayB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "ZALKSzdLJn",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn"
      },
      "attributes": {
        "code": "20x30FC",
        "name": "20 x 30 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:17:08.553Z",
        "updated_at": "2021-06-01T20:10:30.029Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/ZALKSzdLJn/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "WQrOSxJzXB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB"
      },
      "attributes": {
        "code": "24x36FC",
        "name": "24 x 36 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:18:00.502Z",
        "updated_at": "2021-06-01T20:11:43.029Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/WQrOSxJzXB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "ZgvMSjLRon",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon"
      },
      "attributes": {
        "code": "14x18FC",
        "name": "14 x 18 Inch Full Color Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T03:22:28.856Z",
        "updated_at": "2021-06-01T20:04:45.690Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/ZgvMSjLRon/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    }
  ],
  "meta": {
    "record_count": 11,
    "page_count": 2
  },
  "links": {
    "first": "https://self.commercelayer.io/api/skus?page%5Bnumber%5D=1&page%5Bsize%5D=10",
    "next": "https://self.commercelayer.io/api/skus?page%5Bnumber%5D=2&page%5Bsize%5D=10",
    "last": "https://self.commercelayer.io/api/skus?page%5Bnumber%5D=2&page%5Bsize%5D=10"
  }
}


<!-- JSON Response for Black & White SKUS -->
{
  "data": [
    {
      "id": "BqkxSlebmZ",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ"
      },
      "attributes": {
        "code": "08x10BW",
        "name": "8 x 10 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T01:45:18.429Z",
        "updated_at": "2021-06-01T20:02:34.795Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/BqkxSlebmZ/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "WGDMSPEoqB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB"
      },
      "attributes": {
        "code": "09x12BW",
        "name": "9 x 12 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T01:49:54.651Z",
        "updated_at": "2021-06-01T20:02:54.854Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/WGDMSPEoqB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "BwpOSjOlJn",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn"
      },
      "attributes": {
        "code": "11x14BW",
        "name": "11 x 14 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T01:57:48.415Z",
        "updated_at": "2021-06-01T20:03:16.185Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/BwpOSjOlJn/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nOpOSOYQJZ",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ"
      },
      "attributes": {
        "code": "12x16BW",
        "name": "12 x 16 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T01:58:47.586Z",
        "updated_at": "2021-06-01T20:03:59.210Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nOpOSOYQJZ/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nzPQSQmKAW",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW"
      },
      "attributes": {
        "code": "14x18BW",
        "name": "14 x 18 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T02:00:48.353Z",
        "updated_at": "2021-06-01T20:04:24.048Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nzPQSQmKAW/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "ZrxeSjVeNB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB"
      },
      "attributes": {
        "code": "16x20BW",
        "name": "16 x 20 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T02:01:37.324Z",
        "updated_at": "2021-06-01T20:04:56.724Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/ZrxeSjVeNB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nLgbSwKGNB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB"
      },
      "attributes": {
        "code": "18x24BW",
        "name": "18 x 24 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": 18,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T02:03:08.356Z",
        "updated_at": "2021-06-01T20:09:41.113Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nLgbSwKGNB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "BjwqSbEGEn",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn"
      },
      "attributes": {
        "code": "20x24BW",
        "name": "20 x 24 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T02:05:55.901Z",
        "updated_at": "2021-06-01T20:09:58.667Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/BjwqSbEGEn/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "nvAJSRlpLB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB"
      },
      "attributes": {
        "code": "22x28BW",
        "name": "22 x 28 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T02:08:48.501Z",
        "updated_at": "2021-06-01T20:10:46.743Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/nvAJSRlpLB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    },
    {
      "id": "ZbpjSXJzOB",
      "type": "skus",
      "links": {
        "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB"
      },
      "attributes": {
        "code": "20x30BW",
        "name": "20 x 30 Inch Black & White Portrait",
        "description": "",
        "image_url": "",
        "pieces_per_pack": null,
        "weight": null,
        "unit_of_weight": "",
        "hs_tariff_number": "",
        "do_not_ship": false,
        "do_not_track": true,
        "created_at": "2021-05-29T02:47:10.597Z",
        "updated_at": "2021-06-01T20:10:20.683Z",
        "reference": "",
        "reference_origin": "",
        "metadata": {}
      },
      "relationships": {
        "shipping_category": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/relationships/shipping_category",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/shipping_category"
          }
        },
        "prices": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/relationships/prices",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/prices"
          }
        },
        "stock_items": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/relationships/stock_items",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/stock_items"
          }
        },
        "delivery_lead_times": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/relationships/delivery_lead_times",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/delivery_lead_times"
          }
        },
        "sku_options": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/relationships/sku_options",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/sku_options"
          }
        },
        "attachments": {
          "links": {
            "self": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/relationships/attachments",
            "related": "https://self.commercelayer.io/api/skus/ZbpjSXJzOB/attachments"
          }
        }
      },
      "meta": {
        "mode": "test",
        "organization_id": "jXdWbFjYMy"
      }
    }
  ],
  "meta": {
    "record_count": 10,
    "page_count": 1
  },
  "links": {
    "first": "https://self.commercelayer.io/api/skus?page%5Bnumber%5D=1&page%5Bsize%5D=10",
    "last": "https://self.commercelayer.io/api/skus?page%5Bnumber%5D=1&page%5Bsize%5D=10"
  }
}