import React, { Component } from "react";

export class About extends Component {
  state = {};

  render() {
    return (
      <>
              <section className="  pt-5 ">

              <div className="about mt-5 p-5">
              <h1 className=" fw-bolder text-center">ABOUT</h1>
          <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
            <div className="after"></div>
            <div>
              <i className="fa fa-star fa-2x mx-3"></i>
            </div>
            <div className="before"></div>
          </div>
              
          <div className="container w-50">
            <div className="row">
              <div className="col-md-6">
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

              </div>
              <div className="col-md-6">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
            </div>
          </div>
          </div>
          </section>
      </>
    );
  }
}
