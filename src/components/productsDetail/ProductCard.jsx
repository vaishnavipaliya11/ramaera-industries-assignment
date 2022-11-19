import "./card.css";
export const ProductCard = ({ data }) => {
  return (
    <table className="card-container">
      <div>
        <div className="common-flex-row icon-name-container">
          {data?.icon ? <img src={data?.icon} alt="card-icons" /> : null}
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
