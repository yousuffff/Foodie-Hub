import { IMG_CDN } from "../utils/Constants";

const ResCard = ({ resData }) => {
  // const { card } = resData;
  // console.log(resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_CDN + resData.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h4>{resData.areaName}</h4>

      <h5>{resData.avgRating} </h5>
    </div>
  );
};
export default ResCard;
