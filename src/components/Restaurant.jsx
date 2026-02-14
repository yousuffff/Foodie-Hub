// import { useEffect, useState } from "react";

// const Restaurant = () => {
//   const [resData, setResData] = useState(null);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=60379&query=Biryani&submitAction=ENTER&source=collection",
//     );
//     const json = await data.json();
//     setResData(json);
//     // console.log(json?.data?.cards[2]?.card?.card?.info);
//   };

//   console.log(resData.data?.cards[2]?.card?.card?.info);
//   if (resData === null) return;
//   const { name, areaName, avgRating, totalRatingsString, costForTwoMessage } =
//     resData.data?.cards[2]?.card?.card?.info;
//   return (
//     <div>
//       <div className="top-header">
//         <h2>{name}</h2>
//         <h3>{areaName}</h3>
//         <p>
//           {avgRating} ({totalRatingsString}) - {costForTwoMessage}
//         </p>
//       </div>
//     </div>
//   );
// };
// export default Restaurant;

import { useEffect, useState } from "react";
import ShimmerItem from "./ShimmerItem";
import { useParams } from "react-router";
import { MENU_IMG_CDN } from "../utils/Constants";
import ItemCard from "./ItemCard";

const Restaurant = () => {
  const { id } = useParams();
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8373&lng=80.9165&restaurantId=" +
          id,
      );

      const json = await res.json();
      setResData(json);
    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  };

  // 🟢 Show loading state
  if (!resData) return <ShimmerItem />; //improvement

  // console.log(resData?.data?.cards[5]?.groupedCard.cardGroupMap.REGULAR);
  const itemList = resData?.data?.cards[5]?.groupedCard.cardGroupMap.REGULAR;
  console.log(itemList);

  const items =
    resData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card?.itemCards;
  console.log(items);

  const info = resData?.data?.cards //improvement
    ?.map((c) => c.card?.card)
    ?.find((c) => c?.info)?.info;

  if (!info) return <h2>No Restaurant Data</h2>;

  const { name, areaName, avgRating, totalRatingsString, costForTwoMessage } =
    info;

  return (
    <div>
      <div className="top-header">
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <p>
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </p>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {items.map((item) => (
            <ItemCard key={item.card.info.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
