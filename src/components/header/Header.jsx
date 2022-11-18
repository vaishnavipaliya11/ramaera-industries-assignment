import { AiOutlineBell } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import "../header/header.css";
import "../../utils.css";
export const Header = () => {
  return (
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
        <span className="pd-sm">English</span>
        <span className="header-icons">
          <IoMdArrowDropdown />
        </span>
      </div>
    </div>
  );
};
