import React from "react";
import { MENU_IMG_CDN } from "../utils/Constants";
import { IMG_CDN } from "../utils/Constants";
import FoodDescription from "./FoodDiscription";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <div className="item-info">
        <h3>{item.card.info.name}</h3>{" "}
        <h4>
          Rs.
          {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
        </h4>
        <p>
          {item.card.info.ratings.aggregatedRating.rating}{" "}(
          {item.card.info.ratings.aggregatedRating.ratingCountV2})
        </p>
        <FoodDescription text={item.card.info.description} />
      </div>
      <div className="img-icon">
        <img src={IMG_CDN + item.card.info.imageId} alt="" />
        <button className="add-to-card">ADD</button>
      </div>
    </div>
  );
};

export default ItemCard;
