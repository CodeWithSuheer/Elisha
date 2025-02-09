import React from "react";
import { Link, useNavigate } from 'react-router-dom';
// import topSalesData from "./TopSalesData";
import PretStyles from "../home/PretStyles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/WomenSlice";

const TopSalesAllProducts = () => {


  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    console.log('jdkjsn');
    navigate(`/selectedItem/${itemId}`);

    window.scrollTo(0, 0);
  };


  const dispatch = useDispatch();
  const item = useSelector(state => state.womenData.item).slice(0, 9)
  return (

    <>
      <section className="StitchedAllProducts py-4 my-3">
        <div className="container">
          {/* StitchedAllProducts -- HEADER */}
          <div className="StitchedAllProducts-header text-center">
            <h3 className="fs-3 fw-bold AllProducts-heading">WOMEN'S</h3>
            <h1 className="topsale-header-subtitle fw-bold my-3">
              Top Sales
            </h1>
            <p className="topsale-header-text fs-4 my-2">
              Elisha offers a vast selection of women's clothing tos shop. Each
              season finds a careful assortment of clothing no matter the
              season, trend-driven and classic pieces are available. Elisha is
              committed to helping shoppers be their most stylish selves.
            </p>
          </div>

          {/* TOPSALE -- FILTER */}
          <div className="unStitchedAllProducts-filter">
            <div className="filter">
              <div className="buttons-list d-flex justify-content-center align-items-center flex-wrap py-2 my-5">
                {/* FILTER-BUTTON */}
                <button className="btn buttons-list-btn">
                  <i className="fa-solid fa-filter me-2"></i>
                  <span>Filter</span>
                </button>
                {/* SIZE-BUTTON */}
                <div className="dropdown my-2">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Size
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
                {/* PRICE-BUTTON */}
                <div className="dropdown my-2">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Price
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
                {/* DISCOUNT-BUTTON */}
                <div className="dropdown my-2">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discount
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
                {/* SORT-BUTTON */}
                <button className="btn buttons-list-btn my-2">
                  <span> Sort By</span>
                </button>
              </div>
            </div>
          </div>

          <div className="scroll-bar">
            <PretStyles heading="50 % OFF" slide={3} />
          </div>

          {/* StitchedAllProducts -- MAPPING BODY */}
          <div className="all-product-body">
            <div className="row mx-0">
              {item.map((item) => {
                return (
                  <div key={item.id} className="col-md-4">
                    <div className="card all-product-body-card my-2">
                      <div onClick={() => handleItemClick(item.id)}>
                        <img src={item.image} className="card-img-top shadow" alt="..." />
                      </div>
                      <div className="card-body d-flex justify-content-between pt-3 px-0">
                        {/* ITEM DETAILS */}
                        <div className="card-body-details">

                          <p className="card-data stitched-card-data my-0">{item.product_name}</p>
                          <p className="card-data stitched-card-data my-0">{item.product_type}</p>
                          <p className="card-data stitched-card-data my-0">Rs.{item.product_price}</p>

                        </div>
                        {/* Button */}
                        <div className="stitched-card-body-button">
                          <button className="btn stitched-card-body-button-btn" onClick={() => dispatch(addToCart(product))}>
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* StitchedAllProducts -- PAGINATION */}
          <div className="container my-5">
            <nav aria-label="Page navigation example">
              <ul className="pagination d-flex justify-content-center align-items-center flex-wrap">
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    Page
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link focus-ring focus-ring-light" href="#">
                    7
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopSalesAllProducts;
