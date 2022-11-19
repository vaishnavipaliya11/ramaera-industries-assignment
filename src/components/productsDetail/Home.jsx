import { projectData } from "../../data/projectData";
import { ProductCard } from "./ProductCard";
import "./card.css";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
export const Home = () => {
  return (
    <>
      <div className="page-layout">
        <Header />
        <div className="sub-layout">
          <Sidebar />
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
                    <ProductCard data={data} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
