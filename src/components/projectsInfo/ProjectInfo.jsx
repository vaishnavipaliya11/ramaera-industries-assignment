import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import "../../components/projectsInfo/projectInfo.css";
export const ProjectInfoPage = () => {
  return (
    <>
      <div className="page-layout">
        <Header />
        <div className="sub-layout">
          <div className="sidebar-wrapper">
          <Sidebar />
          </div>
          
          <div className="product-info-container">
            <div className="common-flex-col">
              <div className="common-flex-row detail-heading">
                <span>Garam Masala</span>
              </div>

              <div className="details-line"></div>
            </div>
            <div>

            </div>
            <div className="product-info-block common-flex-row">
              <div>
                <p className="pd-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eveniet autem veniam in quam alias corrupti consequatur ut
                  reiciendis numquam. Cumque a illo temporibus! Quasi fugiat
                  repudiandae facilis molestiae, corrupti cum. Lorem ipsum dolor
                  sit amet consectetur, adipisicing elit. Eveniet autem veniam
                  in quam alias corrupti consequatur ut reiciendis numquam.
                  Cumque a illo temporibus! Quasi fugiat repudiandae facilis
                  molestiae, corrupti cum. Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Eveniet autem veniam in quam
                  alias corrupti consequatur ut reiciendis numquam. Cumque a
                  illo temporibus! Quasi fugiat repudiandae facilis molestiae,
                  corrupti cum. Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Eveniet autem veniam in quam alias corrupti
                  consequatur ut reiciendis numquam. Cumque a illo temporibus!
                  Quasi fugiat repudiandae facilis molestiae, corrupti cum.
                </p>
              </div>
              <div className="common-flex-col user-block">
                <img src="/assets/spices.png"  className="spice-img" />
                <div className="common-flex-row number-of-user">
                  <div className="pd-sm">
                    <img src="/assets/peopleThree.svg" alt="user-icon" className="people-img" />

                    <img src="/assets/peopleTwo.svg" alt="user-icon"  className="people-img" />
                    <img src="/assets/peopleOne.svg" alt="user-icon" className="people-img"  />
                  </div>

                  <div className="common-flex-col subscribers">
                    <span>500+</span>
                    <span>People are interest</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info-bottom-details common-flex-col">
              <div className="common-flex-col pd-sm project-progress-container">
                <div className="common-flex-row center">
                  <span className="pd-sm">Total 1.5Cr</span>
                  <div className="loss-compare-line "></div>
                  <span className="pd-sm">Now 80 lac</span>
                </div>

                <div className="progress-bar">
                  <div className="completed-progress">

                  </div>
                </div>
              </div>
              <button className="pd-sm place-btn">Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
