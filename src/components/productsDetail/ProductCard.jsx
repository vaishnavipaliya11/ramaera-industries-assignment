import "../productsDetail/card.css";
export const ProductCard = ({ data }) => {
  console.log("card", data);
  return (
    <table className="card-container">
      <div>
        <div className="common-flex-row icon-name-container">
          <img src={data?.icon} alt="card-icons" />
          <span>{data?.name}</span>
        </div>
      </div>

      <div>
        <p>{data?.description}</p>
      </div>

      <div>
        <p>
          {data?.status} <span>{data?.extra} </span>
        </p>
      </div>
    </table>
  );
};
