import React, { useEffect } from "react";
import "./AdminMainPage.css";
import logo from "./Logo.png";
import adminData from "./AdminData";
import { Link, useNavigate } from "react-router-dom";
import { clearUser, logoutuserAsync } from "../../features/authSlice";
import { clearCart } from "../../features/WomenSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { getAllOrderForAdminAsync } from "../../features/orderSlice";
import { getProductAsync } from "../../features/ProductSlice";

const AdminMainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/updateproduct/${itemId}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getProductAsync());
  }, [dispatch]);


  useEffect(() => {
    dispatch(getAllOrderForAdminAsync())
  }, [])


  const Womendata = useSelector(state => state.product.products);
  // console.log('Womendata', Womendata);

  // handle Logout
  const handleLogout = () => {
    dispatch(logoutuserAsync()).then(() => {
      dispatch(clearUser());
      navigate("/");
      toast.success("Logout Successfully");

    });
  }
  return (
    <>
      {/* OFFCANVAS */}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <img src={logo} alt="..." width="145px" />
          <button type="button" className="btn-close fs-5 me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mx-0 p-0">
          <div className="dashboard-offcanvas py-3">
            <h2 className="dashboard-heading">Dashboard</h2>
            <div className="AdminMainPage-body-left-list mt-4">
              <Link to="/adminOrderList" className="btn dashboard-btn text-start">Admin Order List</Link>
              <Link to="/newproductform" className="btn dashboard-btn text-start">Add Products</Link>
              <Link to="/category" className="btn dashboard-btn text-start">Categories</Link>
              <Link to="/categorytype" className="btn dashboard-btn text-start">Categories Type</Link>
              <Link to="/subcategory" className="btn dashboard-btn text-start">Sub Category</Link>
            </div>
          </div>
        </div>
      </div>


      <section className="AdminMainPage">
        <div className="container-fluid px-0">
          {/* ADMINMAINPAGE - HEADER */}
          <div className="row mx-0">
            <div className="col-md-12 py-2 AdminMainPage-header-right">
              <div className="container">

                <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars fs-4 pt-1"></i></button>
                    {/* <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo03"
                  > */}
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row">
                      <li className="nav-item">
                        <i className="fa-solid fa-bell mx-3 fs-4 pt-2" style={{ cursor: "pointer" }}></i>
                      </li>
                      <li className="nav-item">
                        <i className="fa-solid fa-user mx-3 fs-4 pt-2" style={{ cursor: "pointer" }}></i>
                      </li>
                      <li className="nav-item">
                        <i className="fa-solid fa-right-from-bracket mx-3 fs-4 pt-2" style={{ cursor: "pointer" }} onClick={handleLogout}></i>
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </nav>
              </div>

            </div>
          </div>
          {/* ADMINMAINPAGE - BODY */}
          <div className="AdminMainPage-body">
            <div className="row mx-0">
              {/* ADMINMAINPAGE - PRODUCT-GRID - BODY */}
              <div className="col-sm-9 col-md-12 py-3">
                <div className="container">
                  {/* BODY ---> PRODUCT GRID HEADER */}
                  <div className="AdminMainPage-body-header-right d-flex justify-content-between align-items-center">
                    <h2 className="mx-4">Product Grid</h2>
                  </div>
                </div>

                {/* BODY ---> PRODUCT GRID CONTAINER */}
                <div className="container py-2 mt-3">
                  <div className="product-grid-header d-flex justify-content-between align-items-center">

                    <div className="product-grid-header-buttons">
                      <button className="product-grid-btn mx-2">
                        Category
                      </button>
                      <button className="product-grid-btn mx-2">
                        Last Edit
                      </button>
                    </div>
                  </div>
                  {/* BODY ---> PRODUCT GRID CONTAINER-BODY */}
                  <div className="all-product-body py-3">
                    <div className="row ">
                      {Womendata.map((Womendata) => {
                        return (
                          <div
                            key={Womendata.id}
                            className="col-sm-6 col-md-4 col-lg-3"
                          >
                            <div className="card all-product-body-card my-2" onClick={() => handleItemClick(Womendata.id)}>
                              <img
                                src={Womendata.image.secure_url}
                                className="card-img-top"
                                alt="..."
                              />
                              <div className="card-body n pt-1 px-0">
                                <div className="card-body-details d-flex justify-content-betwee">
                                  {/* ITEM DETAILS */}
                                  <div className="card-body-details">
                                    <p className="card-data stitched-card-data my-0">{Womendata.name}</p>
                                    <p className="card-data stitched-card-data my-0">Rs.{Womendata.price}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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

export default AdminMainPage;
