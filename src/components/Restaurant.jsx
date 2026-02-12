import { useEffect, useState } from "react";

const Restaurant = () => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=60379&query=Biryani&submitAction=ENTER&source=collection",
    );
    const json = await data.json();
    setResData(json);
    // console.log(json?.data?.cards[2]?.card?.card?.info);
  };

  console.log(resData.data?.cards[2]?.card?.card?.info);

  const { name, areaName, avgRating, totalRatingsString, costForTwoMessage } =
    resData.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <div className="top-header">
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <p>
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </p>
      </div>
    </div>
  );
};
export default Restaurant;
