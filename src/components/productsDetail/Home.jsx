import { projectData } from "../../data/projectData";
import { ProductCard } from "./ProductCard";
import { MobileSidebar } from "../mobileSidebar/MobileSidebar";
import "./card.css";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { useRef, useState } from "react";
import { useDetectClickOutside } from "../../hooks/useDetectClickOutside";
export const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useDetectClickOutside(sidebarRef, () => setShowSidebar(false));

  return (
    <>
      <div className="page-layout">
        <Header setShowSidebar={setShowSidebar} />
        <div className="sub-layout">
          <div className="sidebar-wrapper">
            <Sidebar />
          </div>
          <MobileSidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            ref={sidebarRef}
          />
          <div className="common-flex-col home-container">
            <div className="common-flex-col">
              <div className="common-flex-row detail-heading">
                <span>Project</span>
                <label>
                  <img src="/assets/projects.svg" alt="projects-icon" />
                </label>
              </div>

              <div className="details-line"></div>
            </div>

            <div className="projectData-mapped-container">
              <ProductCard
                data={{
                  name: "Name",
                  description:
                    "About",
                  status: "status"
                }}
              />
              {projectData.map(data => {
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
