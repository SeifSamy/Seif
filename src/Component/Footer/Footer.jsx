import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className="p-5">
        <div className="container text-center text-white my-5 ">
          <div className="row w-90 m-auto">
            <div className="col-md-4">
              <h4 className="mb-4">LOCATION</h4>
              <p>
                2215 John Daniel Drive <br /> Clark, MO 65243
              </p>
            </div>
            <div className="col-md-4">
              <h4>AROUND THE WEB</h4>
              <div className="social mt-4">
                <a className="btn btn-outline-light btn-social mx-2">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-2">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-2">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-2">
                  <i className="fa-brands fa-dribbble "></i>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <h4 className="mb-4">ABOUT FREELANCER</h4>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-white foot text-center py-4">
      Copyright © Your Website 2021
      </div>
      </>
    );
  }
}
