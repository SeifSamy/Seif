import React, { Component } from "react";
import img1 from "../../img/asset 1.png";
import img2 from "../../img/asset 2.png";
import img3 from "../../img/asset 3.png";
import img4 from "../../img/asset 4.png";
import img5 from "../../img/asset 5.png";
import img6 from "../../img/asset 6.png";

export class Portfolio extends Component {
  state = {};
  render() {  


    return (
      <>
        <div
          className="modal fade w-100"
          id="img1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header border-0 d-block position-relative ">
                <h1
                  className="modal-title fs-5 fw-bolder fs-1 text-center"
                  id="exampleModalLabel"
                >
                  TASTY CAKE
                </h1>
                <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
                  <div className="after"></div>
                  <div>
                    <i className="fa fa-star fa-2x mx-3"></i>
                  </div>
                  <div className="before"></div>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute fa-1x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0">
                <div className="d-flex justify-content-center ">
                  <img
                    src={img1}
                    className="w-100 mb-4 text-center rounded-3"
                    alt=""
                  />
                </div>
                <div className="w-75 m-auto text-center">
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn text-white rounded-3">
                    <i className="fa fa-close text-white "></i> Close
                  </button>
                </div>
              </div>
              <div className="modal-footer text-center m-auto border-0">
                <button
                  type="button"
                  className="btn text-center text-white"
                  data-bs-dismiss="modal"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade w-100"
          id="img2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header border-0 d-block position-relative ">
                <h1
                  className="modal-title fs-5 fw-bolder fs-1 text-center"
                  id="exampleModalLabel"
                >
                  TASTY CAKE
                </h1>
                <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
                  <div className="after"></div>
                  <div>
                    <i className="fa fa-star fa-2x mx-3"></i>
                  </div>
                  <div className="before"></div>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute fa-1x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0">
                <div className="d-flex justify-content-center ">
                  <img
                    src={img2}
                    className="w-100 mb-4 text-center rounded-3"
                    alt=""
                  />
                </div>
                <div className="w-75 m-auto text-center">
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn text-white rounded-3">
                    <i className="fa fa-close text-white "></i> Close
                  </button>
                </div>
              </div>
              <div className="modal-footer text-center m-auto border-0">
                <button
                  type="button"
                  className="btn text-center text-white"
                  data-bs-dismiss="modal"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade w-100"
          id="img3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header border-0 d-block position-relative ">
                <h1
                  className="modal-title fs-5 fw-bolder fs-1 text-center"
                  id="exampleModalLabel"
                >
                  TASTY CAKE
                </h1>
                <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
                  <div className="after"></div>
                  <div>
                    <i className="fa fa-star fa-2x mx-3"></i>
                  </div>
                  <div className="before"></div>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute fa-1x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0">
                <div className="d-flex justify-content-center ">
                  <img
                    src={img3}
                    className="w-100 mb-4 text-center rounded-3"
                    alt=""
                  />
                </div>
                <div className="w-75 m-auto text-center">
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn text-white rounded-3">
                    <i className="fa fa-close text-white "></i> Close
                  </button>
                </div>
              </div>
              <div className="modal-footer text-center m-auto border-0">
                <button
                  type="button"
                  className="btn text-center text-white"
                  data-bs-dismiss="modal"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade w-100"
          id="img4"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header border-0 d-block position-relative ">
                <h1
                  className="modal-title fs-5 fw-bolder fs-1 text-center"
                  id="exampleModalLabel"
                >
                  TASTY CAKE
                </h1>
                <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
                  <div className="after"></div>
                  <div>
                    <i className="fa fa-star fa-2x mx-3"></i>
                  </div>
                  <div className="before"></div>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute fa-1x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0">
                <div className="d-flex justify-content-center ">
                  <img
                    src={img4}
                    className="w-100 mb-4 text-center rounded-3"
                    alt=""
                  />
                </div>
                <div className="w-75 m-auto text-center">
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn text-white rounded-3">
                    <i className="fa fa-close text-white "></i> Close
                  </button>
                </div>
              </div>
              <div className="modal-footer text-center m-auto border-0">
                <button
                  type="button"
                  className="btn text-center text-white"
                  data-bs-dismiss="modal"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade w-100"
          id="img5"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header border-0 d-block position-relative ">
                <h1
                  className="modal-title fs-5 fw-bolder fs-1 text-center"
                  id="exampleModalLabel"
                >
                  TASTY CAKE
                </h1>
                <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
                  <div className="after"></div>
                  <div>
                    <i className="fa fa-star fa-2x mx-3"></i>
                  </div>
                  <div className="before"></div>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute fa-1x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0">
                <div className="d-flex justify-content-center ">
                  <img
                    src={img5}
                    className="w-100 mb-4 text-center rounded-3"
                    alt=""
                  />
                </div>
                <div className="w-75 m-auto text-center">
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn text-white rounded-3">
                    <i className="fa fa-close text-white "></i> Close
                  </button>
                </div>
              </div>
              <div className="modal-footer text-center m-auto border-0">
                <button
                  type="button"
                  className="btn text-center text-white"
                  data-bs-dismiss="modal"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade w-100"
          id="img6"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content">
              <div className="modal-header border-0 d-block position-relative ">
                <h1
                  className="modal-title fs-5 fw-bolder fs-1 text-center"
                  id="exampleModalLabel"
                >
                  TASTY CAKE
                </h1>
                <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
                  <div className="after"></div>
                  <div>
                    <i className="fa fa-star fa-2x mx-3"></i>
                  </div>
                  <div className="before"></div>
                </div>
                <button
                  type="button"
                  className="btn-close position-absolute fa-1x"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body border-0">
                <div className="d-flex justify-content-center ">
                  <img
                    src={img6}
                    className="w-100 mb-4  text-center rounded-3"
                    alt=""
                  />
                </div>
                <div className="w-75 m-auto text-center">
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia neque assumenda ipsam nihil, molestias magnam,
                    recusandae quos quis inventore quisquam velit asperiores,
                    vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                    Nam.
                  </p>
                  <button className="btn text-white rounded-3">
                    <i className="fa fa-close text-white "></i> Close
                  </button>
                </div>
              </div>
              <div className="modal-footer text-center m-auto border-0">
                <button
                  type="button"
                  className="btn text-center text-white"
                  data-bs-dismiss="modal"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="my-5 pt-5  ">
          <div className="portfolio my-5">
            <h1 className=" fw-bolder text-center">PORTFOLIO</h1>
            <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
              <div className="after"></div>
              <div>
                <i className="fa fa-star fa-2x mx-3"></i>
              </div>
              <div className="before"></div>
            </div>
            <div className="container w-75 ">
              <div className="row gy-5">
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#img1"
                  className="col-md-4"
                >
                  <div className="position-relative item ">
                    <img src={img1} className="w-100 rounded" alt="" />
                    <div className="layer position-absolute rounded d-flex justify-content-center align-items-center">
                      <i className="fa fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-bs-toggle="modal"
                  data-bs-target="#img2"
                >
                  <div className="position-relative item ">
                    <img src={img2} className="w-100 rounded" alt="" />
                    <div className="layer position-absolute rounded d-flex justify-content-center align-items-center">
                      <i className="fa fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-bs-toggle="modal"
                  data-bs-target="#img3"
                >
                  <div className="position-relative item ">
                    <img src={img3} className="w-100 rounded" alt="" />
                    <div className="layer position-absolute rounded d-flex justify-content-center align-items-center">
                      <i className="fa fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-bs-toggle="modal"
                  data-bs-target="#img4"
                >
                  <div className="position-relative item ">
                    <img src={img4} className="w-100 rounded" alt="" />
                    <div className="layer position-absolute rounded d-flex justify-content-center align-items-center">
                      <i className="fa fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-bs-toggle="modal"
                  data-bs-target="#img5"
                >
                  <div className="position-relative item ">
                    <img src={img5} className="w-100 rounded" alt="" />
                    <div className="layer position-absolute rounded d-flex justify-content-center align-items-center">
                      <i className="fa fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-bs-toggle="modal"
                  data-bs-target="#img6"
                >
                  <div className="position-relative item ">
                    <img src={img6} className="w-100 rounded" alt="" />
                    <div className="layer position-absolute rounded d-flex justify-content-center align-items-center">
                      <i className="fa fa-plus fa-5x text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
