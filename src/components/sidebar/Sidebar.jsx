export const Sidebar = () => {
  const sideBarData = [
    { name: "Profile", icon: "/assets/user.svg" },
    {
      name: "Projects",
      icon: "/assets/projects.svg",
      dropDown:"/assets/"
    },
    {
      name: "Finance",
      icon: "/assets/finance.svg",
    },
    {
      name: "Support",
      icon: "/assets/info.svg",
    },
  ];
  return (
    <div>
      {sideBarData.map((item) => {
        return (
          <div className="common-flex-row center sidebar-mapped-items">
            <img src={item.icon} alt="item-icon" />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};
