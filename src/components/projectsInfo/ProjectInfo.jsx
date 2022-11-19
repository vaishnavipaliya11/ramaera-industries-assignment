import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import "../../components/projectsInfo/projectInfo.css";
export const ProjectInfoPage = () => {
  return (
    <>
      <div className="page-layout">
        <Header />
        <div className="sub-layout">
          <Sidebar />
          <div>
            <div className="common-flex-col">
              <div className="common-flex-row detail-heading">
                <span>Garam Masala</span>
              </div>

              <div className="details-line"></div>
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
              <div className="common-flex-col">
                <img src="/assets/spices.png" id="spice-img" />
                <div className="common-flex-row number-of-user">
                  <div className="pd-sm">
                    <img src="/assets/peopleThree.svg" className="people-img" />

                    <img src="/assets/peopleTwo.svg" className="people-img" />
                    <img src="/assets/peopleOne.svg" className="people-img" />
                  </div>

                  <div className="common-flex-col subscribers">
                    <span>500+</span>
                    <span>People are interest</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button>Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
