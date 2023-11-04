import React from "react";
import Typed from "react-typed";
import { ReactComponent as Dot1 } from "../assets/dot1.svg";
import { ReactComponent as Dot2 } from "../assets/dot2.svg";
import { ReactComponent as Dot3 } from "../assets/dot3.svg";
import { ReactComponent as Dot4 } from "../assets/dot4.svg";

const Hero = () => {
  return (
    <div className="">
      <header className="py-5">
        <div className="container px-5 pb-5">
          <div className="row mx-5 items-center">
            <div className="col-xxl-5">
              {/* Header text content */}
              <div className="text-center text-xxl-start">
                <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                  <div className="text-uppercase">
                    Design &middot; Development &middot; Marketing
                  </div>
                </div>
                <div className="fs-3 fw-light text-muted">
                  I can help your business to
                </div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">
                    Get online and grow fast
                  </span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <a
                    className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                    href="resume.html"
                  >
                    Resume
                  </a>
                  <a
                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                    href="projects.html"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-7">
              {/* <!-- Header profile picture--> */}
              <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  {/* <!-- TIP: For best results, use a photo with a transparent background like the demo example below-->
                                    <!-- Watch a tutorial on how to do this on YouTube (link)--> */}
                  <img
                    className="profile-img"
                    src="src/assets/profile.png"
                    alt=""
                  />
                  <Dot1 className="dots-1"/>
                  <Dot2 className="dots-2"/>
                  <Dot3 className="dots-3"/>
                  <Dot4 className="dots-4"/>
                </div>
              </div>
              {/* <Image /> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
