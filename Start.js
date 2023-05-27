import React from "react";
import ReactDOM from "react-dom/client"; 

// const heading = React.createElement("h1", {id: "heading"}, "Herbs");



/**
 * Header
 * -Logo
 * -Nav Items
 * 
 * Body 
 *  - search
 *  - Restaurant container
 *      -Rest Card
 *          -Img
 *          -name, star , cusine, delivary date
 * 
 * Footer
 * -CopyWrite
 * -Links
 * - Contact
 * 
 * 
 */
//JSX React - HTML like syntax
// const list1 = <span>Herbs list</span>;
// const JsxHeading =() => (
// <h1  className="heading">
//     {list1}
   
//     Namaste Herbs
// </h1>);


// const name = "Nikki";
// const HeadingComp = ()=>(
// <div>
//     <JsxHeading />
//     {JsxHeading() }

//     {name}
//      <h2>Namaste Herbs Func components</h2>

// </div>
// );

const Header = () =>{
    return (
    <div className="header">
        
            <div className="logo-image">
                <img className = "logo" src="https://imgcdn.floweraura.com/milt-and-jade-plant-terrarium-9977507pl-A_0.jpg?tr=w-264,dpr-1.5,q-70
                "/>
        
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Desc</li>
                    <li>kart</li>
                </ul>
            </div>
            

        
    </div>
        
    );
}




// Restaurent Data
const resDataList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "602353",
        "name": "Mandi Croods",
        "uuid": "24cfbdbc-821e-4e2d-8825-f00a24fac95a",
        "city": "38",
        "area": "Gurunanak Colony",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "seovp9x56jfa4t6qu2qt",
        "cuisines": [
          "Arabian",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "mandi-croods-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar-3",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "D.NO 54-20-1B,1ST FLOOR,SURYA PRAKESH SQUARE,GURUNANAK COLONY ROAD,PATAMATA,VIJAYAWADA,vijayawada(urban)krishna,andhra pradesh-520010",
        "locality": "Patamata",
        "parentId": 12917,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6592095~p=1~eid=00000188-42b0-f42c-66e1-f06d00900160",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "602353",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "178378",
        "name": "Tandoori Hub",
        "uuid": "86708d53-26e7-4afe-8324-aaec7b2d06a5",
        "city": "38",
        "area": "Gurunanak Colony",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "brlbwyzoq49acejaqixc",
        "cuisines": [
          "Tandoor",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "tandoori-hub-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Guru Nanak Colony Road, Kanaka Durga Gazetted Officers Colony, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520008",
        "locality": "Guru Nanak Colony",
        "parentId": 13614,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "178378",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "74011",
        "name": "Dolphins family restaurnat",
        "uuid": "83510485-29b8-4636-9064-942b0b219a5d",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "lnnqnw14nplf6hvfta1i",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Thalis",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "dolphins-family-restaurnat-opposite-maris-stella-college-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "59-14-4, Opposite Maris Stella College, Beside IDBI Bank, Ramachandra Nagar, Ring Road, Shri Ramachandra Nagar",
        "locality": "Ramachandra Nagar",
        "parentId": 13980,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "74011",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70488",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "uuid": "7b3645c0-b392-4b3d-bb55-b50bdd8bc28b",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "126ea26268daed2437a1f243cb315ea8",
        "cuisines": [
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "baskin-robbins-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "40-5-19/2, Tille Road, Labbipet, Vijayawada",
        "locality": "Tille Road",
        "parentId": 5588,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6795014~p=4~eid=00000188-42b0-f42c-66e1-f06e00900408",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "70488",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "71350",
        "name": "Sweet Magic Mithai Shop",
        "uuid": "486fa039-37e6-4bae-bed2-c32ae0d4dd88",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "p2k9r9zkeqcjhohsgrfu",
        "cuisines": [
          "South Indian",
          "Indian",
          "Biryani",
          "Desserts",
          "Sweets",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "sweet-magic-mithai-shop-opp-dv-manor-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "M. G.ROAD Opp.D .V.MANOR.. Chandramouli Puram, Chandra Mouli Puram, Sriram Nagar",
        "locality": "Mg Road",
        "parentId": 199307,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "71350",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "561825",
        "name": "Subbayya Gari Hotel",
        "uuid": "881b904e-8553-4b15-b8bf-96346428532c",
        "city": "38",
        "area": "Governorpet",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "gcvx1h3utabwzxfbagxg",
        "cuisines": [
          "South Indian",
          "Andhra",
          "Sweets",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "subbayya-gari-hotel-governorpet-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "29-2-48, Opposite Continental Park Hotel, Ram Mandir Road, Vijayawada 520002",
        "locality": "Ram Mandir Road",
        "parentId": 12343,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "561825",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "513999",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "uuid": "3bcefdb3-53e8-415c-bfac-f3156313e7d2",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "zyv96nkuflrxf3a8inqx",
        "cuisines": [
          "Desserts",
          "Ice Cream",
          "Ice Cream Cakes"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar-6",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Shop No: 4, Dr No : 40-1-148, George pet, Vijayawada, Krishna Dr, Andhra Pradesh- 520010",
        "locality": "Sriram Nagar",
        "parentId": 582,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6794705~p=13~eid=00000188-42b0-f42c-66e1-f07100900d41",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "513999",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "695744",
        "name": "BENGALURU BHAVAN",
        "uuid": "76b6f776-64c7-4c17-9ce1-06ed96ce8b18",
        "city": "38",
        "area": "Benz Circle and Auto Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bc855aa7ee883bff2eb3e6bf7e2b4824",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Biryani",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "bengaluru-bhavan-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "\"\"\"D.NO.40-27-2A, REVENUE WARD NO.13, PINNAMANENI POLY CLINIC ROAD, VIJAYAWADA, Vijayawada (Urban), N T R, Andhra Pradesh-520010\"\" \"",
        "locality": "Pinnamaneni Poly Clinic Road",
        "parentId": 416232,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "695744",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "236572",
        "name": "Srinivasa Fast Foods",
        "uuid": "c79c4c2e-6b48-4728-a9e7-ec3f630864d8",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "uxh321ykb0tqkexpgcgr",
        "cuisines": [
          "South Indian",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "srinivasa-fast-foods-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "D No 21-10/5-55,Teachers colony 3rd line,Muthyalampadu.Vijayawada 520011",
        "locality": "Teachers Colony",
        "parentId": 194940,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "236572",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "516869",
        "name": "Food Park",
        "uuid": "ba7a86eb-0099-411b-9df2-20d831e901c4",
        "city": "38",
        "area": "Governorpet",
        "totalRatingsString": "50+ ratings",
        "cloudinaryImageId": "lh9doaygbeuria19ridf",
        "cuisines": [
          "Chinese",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
          "restaurant": "food-park-governorpet-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "# 29 - 13 - 105, kaleaswara rao Road, Governor peta, vijayawada, Krishna District, Andhra Pradesh: 520002, Vijayawada (Urban), Krishna, Andhra Pradesh - 520002",
        "locality": "kaleaswara Rao Road",
        "parentId": 21504,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6759183~p=10~eid=00000188-42b0-f42c-66e1-f07000900a3a",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "516869",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 2.4000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 50,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "70500",
        "name": "Burger King",
        "uuid": "77a6def3-2be0-4884-a277-264b005a01a7",
        "city": "38",
        "area": "Christurajupuram",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 1.5,
        "slugs": {
          "restaurant": "burger-king-m-g-road-labbipet-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Unit No. 3F-4 , Third Floor, PVP Square, M G Road, Labbipet, Vijayawada, Andhra Pradesh 520010",
        "locality": "PVP Square mall",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "EVERY ITEM",
          "subHeader": "@ ₹129",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "70500",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 1.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "234764",
        "name": "Basil Pizzeria",
        "uuid": "35cefdaf-5f75-4e72-bcca-9792f6e3eac5",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "4a1a7639fa86cb4e15a35d55e5e7d390",
        "cuisines": [
          "Pizzas",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "basil-pizzeria-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "60-4-8 Siddhartha Nagar 1st Line Poly Clinic Road Vijayawada",
        "locality": "Polyclinic Road",
        "parentId": 13448,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "234764",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "68400",
        "name": "Southern Spice",
        "uuid": "98855361-6abd-425e-8f8a-e4c5e73fc596",
        "city": "38",
        "area": "Labbipet",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "tkeklzoxiyzwpun6w7j9",
        "cuisines": [
          "Biryani",
          "North Indian",
          "South Indian",
          "Tandoor",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "southern-spice-benz-circle-and-auto-nagar-benz-circle-and-auto-nagar",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Beside BSNL Office, Moghulrajupuram, Labbipet, Vijayawada",
        "locality": "Moghulrajupuram",
        "parentId": 1347,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "68400",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "481346",
        "name": "SAMRUDHI BIRYANI",
        "uuid": "31cccade-2e72-43c1-9398-583d9d8864ad",
        "city": "38",
        "area": "Governorpet",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "vw31voyefen26r3vsjvm",
        "cuisines": [
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "samrudhi-biryani-governorpet-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "35-10-36, KASTHURIBAIPETA, GIRIPURAM NEW COLONY , Vijayawada (Urban), Krishna, Andhra Pradesh520010",
        "locality": "Giripuram New Colony",
        "parentId": 289101,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "481346",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "97783",
        "name": "Sri Anjaneya Restaurant",
        "uuid": "7794c95e-70ed-41dd-8975-99cb2841c737",
        "city": "38",
        "area": "Gollapudi",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "vtoepjatmfhbgwckxivh",
        "cuisines": [
          "Indian",
          "Biryani",
          "Tandoor",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 7.599999904632568,
        "slugs": {
          "restaurant": "sri-anjaneya-restaurant-bhavanipuram-governorpet",
          "city": "vijayawada"
        },
        "cityState": "38",
        "address": "Besaid Taj Hotel,Near Swathi Theater",
        "locality": "Swathi Theater Road",
        "parentId": 5271,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6810745~p=16~eid=00000188-42b0-f42c-66e1-f0720090106e",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "97783",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 7.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ];
const RestaurantCard = (props)=>{
    const {resData}= props;
    const {cloudinaryImageId, name, cuisines, avgRating, minDeliveryTime} = resData?.data;
    console.log(resData);
    return (
        <div className="rest-cards" style ={{backgroundColor : "#f0f0f0"}}>
            <img className="res-card-logo" alt="logo1" src =
            {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId
            
            }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4> 
            <h4>{avgRating}</h4>
            <h4>{minDeliveryTime} minutes</h4>
        </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                {
                    resDataList.map((restaurant)=>
                    <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>)
                }
                {/* <RestaurantCard resData = {resData[0]}/>
                <RestaurantCard resData = {resData[1]}/>
                <RestaurantCard resData = {resData[2]}/>
                <RestaurantCard resData = {resData[3]}/>
                <RestaurantCard resData = {resData[4]}/>
                <RestaurantCard resData = {resData[5]}/>
                <RestaurantCard resData = {resData[6]}/>
                <RestaurantCard resData = {resData[7]}/>
                <RestaurantCard resData = {resData[8]}/>
                <RestaurantCard resData = {resData[9]}/>
                <RestaurantCard resData = {resData[10]}/>
                <RestaurantCard resData = {resData[11]}/>
                
                RestaurantCard */}
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className = "app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)