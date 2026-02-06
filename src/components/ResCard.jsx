import { IMG_CDN } from "../utils/Constants";

const ResCard = (props) => {
  const { resData } = props;
  // console.log(resData.info);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_CDN + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h5>{resData.info.avgRating} </h5>
    </div>
  );
};
export default ResCard;
