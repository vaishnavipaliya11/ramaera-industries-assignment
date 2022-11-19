import "../sidebar/sidebar.css";
import "../../utils.css";
import {useNavigate} from "react-router-dom"
import { sideBarData } from "../../data/projectData";
export const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <div className="sidebar-container common-flex-col">
      {sideBarData.map((item) => {
        return (
          <div className="common-flex-row center sidebar-mapped-items">
            <img src={item.icon} alt="item-icon" className="pd-sm" />
            <span className="pd-sm" onClick={()=> navigate(`${item.name}`)}>{item.name}</span>
            <img src={item?.dropDown} className="pd-sm" />
          </div>
        );
      })}
    </div>
  );
};
