import React from "react";
import  ReactDOM  from "react-dom/client";
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
const resList=[
  {
      "info": {
          "id": "42581",
          "name": "Burger King",
          "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
          "locality": "The Pavillion Mall",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Burgers",
              "American"
          ],
          "avgRating": 4.1,
          "parentId": "166",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 4.8,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "4.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-king-the-pavillion-mall-shivajinagar-pune-42581",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "23719",
          "name": "McDonald's",
          "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
          "locality": "JM Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 01:45:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-jm-road-shivajinagar-pune-23719",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "21001",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "F.C. Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Pizzas"
          ],
          "avgRating": 4,
          "parentId": "721",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "2.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-f-c-road-shivajinagar-pune-21001",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "243625",
          "name": "KFC",
          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
          "locality": "Deccan Gymkhana",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
          ],
          "avgRating": 4.1,
          "parentId": "547",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 16,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "16 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "5624",
          "name": "Subway",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "locality": "FC Road",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "2",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.2,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "2.2 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-fc-road-deccan-gymkhana-pune-5624",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "137675",
          "name": "Huber & Holly",
          "cloudinaryImageId": "p6wrcxgeydhiju2z6zku",
          "locality": "Koregaon Park",
          "areaName": "Koregaon Park",
          "costForTwo": "₹700 for two",
          "cuisines": [
              "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "6433",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 21,
              "lastMileTravel": 5.9,
              "serviceability": "SERVICEABLE",
              "slaString": "21 mins",
              "lastMileTravelString": "5.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 01:50:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/huber-and-holly-koregaon-park-pune-137675",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "200193",
          "name": "Bebe Di Rasoi - Punjabi",
          "cloudinaryImageId": "qwokyvfzdond2snolvzw",
          "locality": "SB Road",
          "areaName": "Senapati Bapat Road",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "North Indian",
              "Punjabi",
              "Biryani",
              "Kebabs",
              "Mughlai",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4,
          "parentId": "230548",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 01:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/bebe-di-rasoi-punjabi-sb-road-senapati-bapat-road-pune-200193",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "2494",
          "name": "RushHrs",
          "cloudinaryImageId": "y5kzxicvbdlhkrbmjllv",
          "locality": "Magarpatta City",
          "areaName": "Magarpatta City",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Fast Food",
              "Healthy Food",
              "Salads",
              "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "791",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 9.5,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "9.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-17 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/rushhrs-magarpatta-city-pune-2494",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "338997",
          "name": "1441 Pizzeria",
          "cloudinaryImageId": "c7fcd9e43f4b995c3cd08d7632b426f0",
          "locality": "Kothrud",
          "areaName": "Kothrud",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Italian",
              "Pizzas",
              "Pastas"
          ],
          "avgRating": 3.8,
          "parentId": "2697",
          "avgRatingString": "3.8",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 04:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "newg.png",
                      "description": "Gourmet"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/1441-pizzeria-kothrud-pune-338997",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "395169",
          "name": "McDonald's Gourmet Burger Collection",
          "cloudinaryImageId": "oh5peivnub6ziiy9ia5o",
          "locality": "JM Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "10761",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 01:45:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-jm-road-shivajinagar-pune-395169",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "7127",
          "name": "Cheesiano Pizza",
          "cloudinaryImageId": "pskzmnmbz9rwv32ng1bj",
          "locality": "Baner",
          "areaName": "Balewadi",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Pizzas",
              "Pastas",
              "Burgers",
              "Fast Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 3.8,
          "parentId": "59203",
          "avgRatingString": "3.8",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 9.1,
              "serviceability": "SERVICEABLE",
              "slaString": "34 mins",
              "lastMileTravelString": "9.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 05:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/cheesiano-pizza-baner-balewadi-pune-7127",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "2121",
          "name": "Marrakesh",
          "cloudinaryImageId": "oufpvgs7c8vxluft2f8r",
          "locality": "DP Road",
          "areaName": "Aundh",
          "costForTwo": "₹350 for two",
          "cuisines": [
              "Lebanese",
              "Arabian",
              "Afghani",
              "Mughlai",
              "Mediterranean",
              "North Indian",
              "Biryani",
              "Kebabs",
              "Desserts",
              "Middle Eastern"
          ],
          "avgRating": 4.1,
          "parentId": "624",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 7.8,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "7.8 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 02:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/marrakesh-dp-road-aundh-pune-2121",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "213654",
          "name": "WarmOven Cake & Desserts",
          "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
          "locality": "Karve Road",
          "areaName": "Kothrud",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "9696",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 05:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-karve-road-kothrud-pune-213654",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "213655",
          "name": "Indiana Burgers",
          "cloudinaryImageId": "lhlqby3ywjrorvo7w5bg",
          "locality": "Karve Road",
          "areaName": "Kothrud",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Burgers",
              "American",
              "Fast Food",
              "Beverages",
              "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "5714",
          "avgRatingString": "4.1",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "32 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 05:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/indiana-burgers-karve-road-kothrud-pune-213655",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "258140",
          "name": "Kaati Zone Rolls & Wraps",
          "cloudinaryImageId": "lqu1yhlxougwpqbslmfe",
          "locality": "Karve Road",
          "areaName": "Kothrud",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "Fast Food",
              "Bengali",
              "Beverages",
              "Desserts"
          ],
          "avgRating": 4.1,
          "parentId": "248306",
          "avgRatingString": "4.1",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 05:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-karve-road-kothrud-pune-258140",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "486087",
          "name": "Momo Zone - The Momo Company",
          "cloudinaryImageId": "ei260l9oypc41ptbewdn",
          "areaName": "Kothrud",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Chinese",
              "Tibetan",
              "Fast Food"
          ],
          "avgRating": 3.5,
          "parentId": "382343",
          "avgRatingString": "3.5",
          "totalRatingsString": "10+",
          "sla": {
              "deliveryTime": 30,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 05:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-kothrud-pune-486087",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "213645",
          "name": "Cupcake Bliss Cake & Desserts",
          "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
          "locality": "Pandurang Colony",
          "areaName": "Erandwane",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Bakery",
              "Desserts",
              "Ice Cream",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "66732",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 5.5,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "5.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 05:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-pandurang-colony-erandwane-pune-213645",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "229278",
          "name": "Faasos - Wraps, Rolls & Shawarma",
          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
          "locality": "Law College Road",
          "areaName": "Erandwane",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "21809",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 3.9,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "3.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 03:00:00",
              "opened": true
          },
          "badges": {
              "textExtendedBadges": [
                  {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "",
                                  "fontColor": "#7E808C",
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available"
                              }
                          }
                      ]
                  }
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-law-college-road-erandwane-pune-229278",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "24437",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "qahlfdlcfpgf4r9xjy77",
          "locality": "Perugate",
          "areaName": "Sadashiv Peth",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Pizzas",
              "Italian",
              "Pastas",
              "Desserts"
          ],
          "avgRating": 4,
          "parentId": "2456",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 30,
              "serviceability": "SERVICEABLE",
              "slaString": "30 mins",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 02:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/dominos-pizza-perugate-sadashiv-peth-pune-24437",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "33848",
          "name": "The Belgian Waffle Co.",
          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
          "locality": "JM Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream",
              "Beverages"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "2233",
          "avgRatingString": "4.5",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-01-11 03:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹120 OFF",
              "subHeader": "ABOVE ₹199",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-jm-road-shivajinagar-pune-33848",
          "type": "WEBLINK"
      }
  }
];

const Header = () =>{
  return (
    <div className="header"> 
        <div className="logo-container">
          <img className="logo"src="https://www.creativehatti.com/wp-content/uploads/2021/04/Food-Delivery-Logo-Template-18-small.jpg"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>

        </div>
    </div>
  )
}

const RestaurantCard = (props) =>{
const {resData}=props;

const {cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info;
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
      <img
      className="res-logo"
       alt="KFC"
       src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" 
        + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(',')} </h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}
///not using keys(not acceptable) <<<< index as Key <<<<<unique id(best practice)
const  Body = () =>{
  return (
    <div className="body">
      <div className="serach">
        Search
      </div>
      <div className="res-container">
      {
        resList.map((restaurant,index)=>(<RestaurantCard key ={restaurant.info.id} resData={restaurant}/>))
      }
      </div>

    </div>
  )
}

const Footer =() =>{
  return (
    <div className="">

    </div>
  )
}
const AppLayout=() =>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
}
 
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);