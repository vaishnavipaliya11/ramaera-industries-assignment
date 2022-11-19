import { AiOutlineBell } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import "../header/header.css";
import "../../utils.css";
import "../../styles.css";
export const Header = ({ setShowSidebar }) => {
  return (
    <>
      <div className="header-container common-flex-row">
        <div className="common-flex-row center">
          <img src="/assets/company-logo.svg" alt="company-logo" />
          <span className="company-name">Ramaera Industries</span>
        </div>

        <div className="common-flex-row center pd-sm">
          <div className="pd-sm">
            <span className="header-icons">
              <AiOutlineBell />
            </span>
          </div>
          <span className="pd-sm lang-text">English</span>
          <span className="header-icons">
            <IoMdArrowDropdown />
          </span>
          <span className="menu-bar" onClick={() => setShowSidebar(prevState => !prevState)}>
            <FaBars />
          </span>
        </div>
      </div>

      <div className="header-line"></div>
    </>
  );
};
