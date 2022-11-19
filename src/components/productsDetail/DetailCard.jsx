import "../productsDetail/detailCard.css";
export const DetailCard = ({ data }) => {
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
