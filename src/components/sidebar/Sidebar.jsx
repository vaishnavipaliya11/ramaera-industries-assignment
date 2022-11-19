import "../sidebar/sidebar.css"
import "../../utils.css"
export const Sidebar = () => {
  const sideBarData = [
    { name: "Profile", icon: "/assets/user.svg", dropDown:"" },
    {
      name: "Projects",
      icon: "/assets/projects.svg",
      dropDown:"/assets/drop.svg"
    },
    {
      name: "Finance",
      icon: "/assets/finance.svg",
      dropDown:"/assets/drop.svg"
    },
    {
      name: "Support",
      icon: "/assets/info.svg",
      dropDown:"/assets/drop.svg"
    },
  ];
  return (
    <div className="sidebar-container common-flex-col">
      {sideBarData.map((item) => {
        return (
          <div className="common-flex-row center sidebar-mapped-items">
            <img src={item.icon} alt="item-icon" className="pd-sm"/>
            <span className="pd-sm">{item.name}</span>
            <img src={item?.dropDown}  className="pd-sm"/>
          </div>
        );
      })}
    </div>
  );
};
