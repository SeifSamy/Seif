import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return <div className="container mt-5">
        <h1 className="pb-4 fw-bolder">Page Not Found</h1>
        <p className="text-muted pb-4">We couldn't find what you were looking for.</p>
        <p>Please contact the owner of the site that linked you to the original URL and let them know their <br/> link is broken.</p>
    </div>;
  }
}
