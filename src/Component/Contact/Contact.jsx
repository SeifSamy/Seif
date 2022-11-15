import React, { Component } from "react";

export class Contact extends Component {
  state = {};
  validName = () => {
    let nameValue = document.getElementById("name").value;

    let nameErorre = document.getElementById("nameErrore");
    let regex = /^[a-z]{1,}$/gi;
    regex.test(nameValue)
      ? (nameErorre.innerHTML = "")
      : (nameErorre.innerHTML = "Please enter your name.");
  };

  validEmail = () => {
    let emailValue = document.getElementById("email").value;
    let emailErrore = document.getElementById("emailErrore");
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    regex.test(emailValue)
      ? (emailErrore.innerHTML = "")
      : (emailErrore.innerHTML = "Please enter your Email.");
  };

  validPhone = () => {
    let phoneValue = document.getElementById("phone").value;
    let phoneErrore = document.getElementById("phoneErrore");
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    regex.test(phoneValue)
      ? (phoneErrore.innerText = "")
      : (phoneErrore.innerText = "phone");
  };

  validMessage = () => {
    let msgValue = document.getElementById("message").value;
    let mseErrore = document.getElementById("messageerror");
    let regex = /^[A-Za-z0-9]{1,50}$/;
    regex.test(msgValue)
      ? (mseErrore.innerHTML = " ")
      : (mseErrore.innerHTML = "Please enter your Phone.");
  };

  valid = () => {
    let nameValue = document.getElementById("name").value;

    let btnErrore = document.getElementById("btnErrore");
    if (
      this.validName() &&
      this.validEmail() &&
      this.validPhone() &&
      this.validMessage()
    ) {
      return true;
    } else {
      console.log("aaaa");
      btnErrore.innerHTML = `Sorry ${nameValue}, it seems that my mail server is not responding. Please try again later!`;
      document.getElementById("alert").style.display = "block";

      return false;
    }
  };
  render() {
    return (
      <>
        <section className="my-5 pt-5  ">
          <div className="portfolio my-5 contact">
            <h1 className=" fw-bolder text-center">CONTACT ME</h1>
            <div className="star d-flex text-center mb-5  justify-content-center align-items-center ">
              <div className="after"></div>
              <div>
                <i className="fa fa-star fa-2x mx-3"></i>
              </div>
              <div className="before"></div>
            </div>
            <div className="container w-50">
              <form
                id="contactForm"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="">Name</label>
                    <input
                      onChange={() => this.validName()}
                      id="name"
                      type="text"
                      placeholder="Name"
                      className="form-control-plaintext border-0 border-bottom rounded-0 py-3"
                      data-sb-validations="required"
                      data-validation-required-message="Please enter your name."
                      aria-invalid="false"
                    />
                    <p className="text-danger text-center " id="nameErrore"></p>
                  </div>
                  <div className="col-12">
                    <label htmlFor="">Email Address</label>
                    <input
                      onChange={() => this.validEmail()}
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="form-control-plaintext border-0 border-bottom rounded-0 py-3"
                      data-sb-validations="required,email"
                      data-validation-required-message="Please enter your email address."
                      aria-invalid="false"
                    />
                    <p
                      className="text-danger text-center "
                      id="emailErrore"
                    ></p>
                  </div>
                  <div className="col-12">
                    <label htmlFor="">Phone Number</label>
                    <input
                      onChange={() => this.validPhone()}
                      type="tel"
                      id="phone"
                      placeholder="Phone Number"
                      className="form-control-plaintext border-0 border-bottom rounded-0 py-3"
                      data-sb-validations="required"
                      data-validation-required-message="Please enter your phone number."
                      aria-invalid="false"
                    />
                    <p
                      className="text-danger text-center "
                      id="phoneErrore"
                    ></p>
                  </div>
                  <div className="col-12">
                    <label htmlFor="">Message</label>
                    <textarea
                      onChange={() => this.validMessage()}
                      id="message"
                      rows="5"
                      className="w-100 border-0 py-4 border-bottom form-control-plaintext bg-transparent"
                      placeholder="Message"
                      data-sb-validations="required"
                      data-validation-required-message="Please enter a message."
                      aria-invalid="false"
                    ></textarea>
                    <p className="text-danger text-center " id="msgErrore"></p>
                  </div>
                </div>
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  id="alert"
                  role="alert"
                >
                  <div id="btnErrore"></div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <button
                  className="btn button px-4 mt-3 py-3"
                  onClick={this.valid}
                  id="submitButton"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}
