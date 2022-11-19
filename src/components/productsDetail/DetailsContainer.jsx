import { projectData } from "../../data/projectData";
import { DetailCard } from "./DetailCard";
import "../productsDetail/detailCard.css"
export const DetailsContainer = () => {
  console.log(projectData);
  return (
    <div className="common-flex-col">
        <div className="common-flex-col">
        <div className="common-flex-row detail-heading">
        <span>Project</span>
        <label>
          <img src="/assets/projects.svg" />
        </label>
        </div>
     
        <div className="details-line"></div>
      </div>

      <div className="projectData-mapped-container">
        {projectData.map((data) => {
          return (
            <div>
              <DetailCard data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
