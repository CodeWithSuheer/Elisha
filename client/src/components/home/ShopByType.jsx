import React from "react";
import topbar_img1 from "./topbar_img1.jpg";

const ShopByType = () => {
  return (
    <>
      <section className="shop-by-type">
        <div className="container">
          {/* SHOP-BY-TYPE HEADER */}
          <div className="shop-by-type-header text-center">
            <h5 className="shop-by-type-title">SHOP BY TYPE</h5>
          </div>

          {/* SHOP-BY-TYPE BODY */}
          <div className="shop-by-type-content">
            <div className="row mx-0 shop-by-type-content-cont d-flex justify-content-center align-item-center">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-2 mx-3 my-2">
                <div className="card shop-by-type-card">
                  <div className="parent-box">
                    <div className="child-box d-flex justify-content-center align-item-center">
                      <div className="child-box-img-cont">
                        <img
                          className="child-box_img"
                          src={topbar_img1}
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body shop-by-type-card-body">
                    <h5 className="card-title shop-by-type-card-title text-center">SILK</h5>
                    <a href="#" className="btn shop-by-type-cards-buttons">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-2 mx-3 my-2">
                <div className="card shop-by-type-card">
                  <div className="parent-box">
                    <div className="child-box d-flex justify-content-center align-item-center">
                      <div className="child-box-img-cont">
                        <img
                          className="child-box_img"
                          src={topbar_img1}
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body shop-by-type-card-body">
                    <h5 className="card-title shop-by-type-card-title text-center">COTTEN NET</h5>
                    <a href="#" className="btn shop-by-type-cards-buttons">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-2 mx-3 my-2">
                <div className="card shop-by-type-card">
                  <div className="parent-box">
                    <div className="child-box d-flex justify-content-center align-item-center">
                      <div className="child-box-img-cont">
                        <img
                          className="child-box_img"
                          src={topbar_img1}
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body shop-by-type-card-body">
                    <h5 className="card-title shop-by-type-card-title text-center">ORGANZA</h5>
                    <a href="#" className="btn shop-by-type-cards-buttons">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-2 mx-3 my-2">
                <div className="card shop-by-type-card">
                  <div className="parent-box">
                    <div className="child-box d-flex justify-content-center align-item-center">
                      <div className="child-box-img-cont">
                        <img
                          className="child-box_img"
                          src={topbar_img1}
                          alt=""
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-body shop-by-type-card-body">
                    <h5 className="card-title shop-by-type-card-title text-center">LAWN</h5>
                    <a href="#" className="btn shop-by-type-cards-buttons">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByType;
