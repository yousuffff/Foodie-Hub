import dataList from "../utils/Mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(dataList);
  const [filterRestaurants, setFilterRestaurants] = useState(listOfRestaurants);
  console.log(listOfRestaurants);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteresList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilterRestaurants(filteresList);
  }, [searchText]);
  const fetchData = async () => {
    try {
      const data = await fetch(
        // "https://www.swiggy.com/api/instamart/home/v2?offset=0&storeId=&primaryStoreId=&secondaryStoreId=&clientId=INSTAMART-WEB",
        "https://www.swiggy.com/mapi/restaurants/list/v5?lat=26.8373&lng=80.9165&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1",
      );
      const json = await data.json();
      console.log(json);
      // console.log(
      //   json.data?.cards[0]?.card?.card.gridElements.infoWithStyle.items,
      // );
    } catch (error) {
      console.log("error is here", error);
    }
  };
  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://fakerestaurantapi.runasp.net/api/Restaurant",
  //     );
  //     console.log(data);
  //     const json = await data.json();
  //     setListOfRestaurants(json);
  //     console.log(json);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const data = {
  //   card: {
  //     card: {
  //       "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  //       info: {
  //         id: "1111330",
  //         name: "99 Square Pizza",
  //         cloudinaryImageId:
  //           "FOOD_CATALOG/IMAGES/CMS/2025/6/13/5699d095-f18b-427a-9216-5755509ab282_16bb41e7-1dad-4c41-8779-3551964ef3e1.jpeg",
  //         locality: "Habibulla Estate Road",
  //         areaName: "Hazratganj",
  //         costForTwo: "₹500 for two",
  //         cuisines: ["Pizzas", "Italian", "Beverages", "Desserts"],
  //         avgRating: 4.6,
  //         parentId: "643569",
  //         avgRatingString: "4.6",
  //         totalRatingsString: "50",
  //         promoted: true,
  //         adTrackingId:
  //           "cid=40c6727f-2d0e-40fb-a57e-32ea54ebf148~p=14~adgrpid=40c6727f-2d0e-40fb-a57e-32ea54ebf148#ag16~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1111330~plpr=COLLECTION~eid=5f0c724d-c9ec-479f-8fab-bf02772b5aff~srvts=1770463195480~collid=83631",
  //         sla: {
  //           deliveryTime: 44,
  //           lastMileTravel: 4.2,
  //           serviceability: "SERVICEABLE",
  //           slaString: "40-50 mins",
  //           lastMileTravelString: "4.2 km",
  //           iconType: "ICON_TYPE_EMPTY",
  //         },
  //         availability: {
  //           nextCloseTime: "2026-02-07 23:59:00",
  //           opened: true,
  //         },
  //         badges: {},
  //         isOpen: true,
  //         type: "F",
  //         badgesV2: {
  //           entityBadges: {
  //             textBased: {},
  //             imageBased: {},
  //             textExtendedBadges: {},
  //           },
  //         },
  //         aggregatedDiscountInfoV3: {
  //           header: "ITEMS",
  //           subHeader: "AT ₹99",
  //           logoCtx: {
  //             text: "BENEFITS",
  //           },
  //         },
  //         orderabilityCommunication: {
  //           title: {},
  //           subTitle: {},
  //           message: {},
  //           customIcon: {},
  //           commsStyling: {},
  //         },
  //         differentiatedUi: {
  //           displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  //           differentiatedUiMediaDetails: {
  //             mediaType: "ADS_MEDIA_ENUM_IMAGE",
  //             lottie: {},
  //             video: {},
  //           },
  //         },
  //         reviewsSummary: {},
  //         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  //         isNewlyOnboarded: true,
  //         restaurantOfferPresentationInfo: {},
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: "--",
  //           },
  //         },
  //         ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  //         campaignId: "40c6727f-2d0e-40fb-a57e-32ea54ebf148",
  //       },
  //       analytics: {},
  //       cta: {
  //         link: "swiggy://menu?restaurant_id=1111330&source=collection&query=Pizza",
  //         text: "RESTAURANT_MENU",
  //         type: "DEEPLINK",
  //       },
  //       widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
  //     },
  //     relevance: {
  //       type: "RELEVANCE_TYPE_ON_MENU_RETURN",
  //       sectionId: "MENU_RETURN_FOOD",
  //     },
  //   },
  // };
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={() => {}}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <button onClick={() => setListOfRestaurants(dataList)}>Reset</button>
      </div>
      <div className="res-container">
        {filterRestaurants.length === 0 ? (
          <h2>No Card</h2>
        ) : (
          filterRestaurants.map((res) => (
            <ResCard key={res.info.id} resData={res.info} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
