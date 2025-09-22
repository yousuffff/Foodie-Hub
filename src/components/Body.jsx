import dataList from "../utils/Mockdata";
import ResCard from "./ResCard";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(dataList);
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <button onClick={() => setListOfRestaurants(dataList)}>Reset</button>
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
