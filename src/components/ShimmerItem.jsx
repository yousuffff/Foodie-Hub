const ShimmerItem = () => {
  return (
    <div className="shimmer-container">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-title shimmer-bg"></div>
            <div className="shimmer-line shimmer-bg"></div>
            <div className="shimmer-line shimmer-bg"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerItem;