import React from "react";
import { MENU_IMG_CDN } from "../utils/Constants";
import { IMG_CDN } from "../utils/Constants";
import FoodDescription from "./FoodDiscription";

const ItemCard = ({ item }) => {
  const info = item?.card.info;
  if (!info) return null;
  const {
    name,
    price,
    defaultPrice,
    rating,
    ratingCountV2,
    imageId,
    description,
  } = info;
  return (
    <div className="item-card">
      <div className="item-info">
        <h3>{name}</h3>{" "}
        <h4>
          Rs.
          {price / 100 || defaultPrice / 100}
        </h4>
        {rating && (<p>
          ⭐ {rating} ({ratingCountV2})
          
        </p>)}
        <FoodDescription text={description} />
      </div>
      <div className="img-icon">
        <img src={IMG_CDN + imageId} alt="" />
        <button className="add-to-card">ADD</button>
      </div>
    </div>
  );
};

export default ItemCard;
