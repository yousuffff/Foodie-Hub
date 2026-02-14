import { useState } from "react";

const FoodDescription = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 120;

  if (!text) return null;

  const isLong = text.length > MAX_LENGTH;
  const shortText = text.slice(0, MAX_LENGTH);

  return (
    <p>
      {isExpanded || !isLong ? text : shortText + "..."}

      {isLong && (
        <span
          style={{ color: "blue", cursor: "pointer", marginLeft: "6px" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </span>
      )}
    </p>
  );
};

export default FoodDescription;
