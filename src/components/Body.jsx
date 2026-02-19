import dataList from "../utils/Mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import ResCardShimmer from "./ResCarsShimmer";
import { Link } from "react-router";
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
      // console.log(json);
      // console.log(
      //   json.data?.cards[0]?.card?.card.gridElements.infoWithStyle.items,
      // );
    } catch (error) {
      console.log("error is here", error);
    }
  };
  return !filterRestaurants?.length ? (
    Array(8)
      .fill("")
      .map((_, index) => <ResCardShimmer key={index} />)
  ) : (
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
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <button onClick={() => setFilterRestaurants(listOfRestaurants)}>Reset</button>
      </div>
      <div className="res-container">
        {filterRestaurants.length === 0 ? (
          <h2>No Card</h2>
        ) : (
          filterRestaurants.map((res) => (
            <Link key={res.info.id} to={"/restaurent/" + res.info.id} className="custom-link">
              <ResCard resData={res.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
