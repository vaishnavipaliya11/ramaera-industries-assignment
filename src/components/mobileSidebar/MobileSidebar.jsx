import "./mobileSidebar.css";
import { Sidebar } from "../sidebar/Sidebar";
import { forwardRef } from "react";

const MobileSidebar = forwardRef(({ showSidebar, setShowSidebar }, ref) => {
  return (
    <div
      ref={ref}
      className={`mobile-sidebar-wrapper ${showSidebar ? "mobile-sidebar-wrapper--open" : ""}`}
    >
      <Sidebar />
    </div>
  );
});

export { MobileSidebar };
