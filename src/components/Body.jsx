import dataList from "../utils/Mockdata";
import ResCard from "./ResCard";
import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.83730&lng=80.91650&carousel=true&third_party_vendor=1",
      );
      const json = await data.json();
      setListOfRestaurants(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
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
        <button
          onClick={() =>
            setListOfRestaurants(
              json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants,
            )
          }
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <ResCard key={res.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
