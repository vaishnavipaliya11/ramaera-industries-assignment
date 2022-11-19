import "../sidebar/sidebar.css";
import "../../utils.css";
import { Link } from "react-router-dom";
import { sideBarData } from "../../data/projectData";
export const Sidebar = () => {

  return (
    <div className="sidebar-container common-flex-col">
      {sideBarData.map(item => {
        return (
          <Link to={`${item.route}`} className="common-flex-row center sidebar-mapped-items">
            <img src={item.icon} alt="item-icon" className="pd-sm" />
            <span className="pd-sm">
              {item.name}
            </span>
            <img src={item?.dropDown} className="pd-sm" />
          </Link>
        );
      })}
    </div>
  );
};
