import React from "react";
import logo from "../../assets/images/main_logo.png";
import banner from "../../assets/images/banner.png";

import cir1 from "../../assets/images/circle-1.png";
import arrow1 from "../../assets/images/line-01.png";
import arrow2 from "../../assets/images/line-02.png";
import cir2 from "../../assets/images/circle-2.png";
import cir3 from "../../assets/images/circle-3.png";

import sec_bg from "../../assets/images/section-bg.png";
import doc from "../../assets/images/img-bg.png";
import doc_bg from "../../assets/images/img-01-bg.jpg";

const Home = () => {
  return (
    <body>
      {/* <header>
        <nav className="navbar navbar-expand-lg h-5 ">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" width="115" height="auto" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="./abt.html">
                About us
              </a>
              <a className="nav-link" href="./appoinment.html">
                Book an appoinment
              </a>
              <a className="nav-link">Blog</a>
            </div>
          </div>
        </nav>
      </header> */}
      <section className="i">
        <div className="onimg">
          <img src={banner} className="img-fluid" />
          <h1>
            We Care<br></br>
            <span></span>
          </h1>
        </div>
      </section>
      <div className="no-gutters d-flex justify-content-center search ">
        <div className="loc">
          <select
            className="form-control text-area "
            id="exampleFormControlSelect1"
          >
            <option>Location</option>
            <option>London</option>
            <option>Boston</option>
            <option>Mumbai</option>
            <option>New York</option>
            <option>Toronto</option>
            <option>Paris</option>
          </select>
        </div>
        <div className="name">
          <select
            className="form-control text-area"
            id="exampleFormControlSelect1"
          >
            <option>Location</option>
            <option>London</option>
            <option>Boston</option>
            <option>Mumbai</option>
            <option>New York</option>
            <option>Toronto</option>
            <option>Paris</option>
          </select>
        </div>
      </div>
      <section className="container third">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center one_click">
            <h2 className="h2">
              {" "}
              Bring Care to Your<br></br>
              <span>Home With One Click</span>
            </h2>
            <img src={sec_bg} className="p_bg" />
            <p>
              Lorem ipsum dolor amet consectetur adipisicing elitiuim sete
              eiusmod tempor incididunt ut labore etnalom dolore magn aiqua
              udiminimate veniam quis norud exercitation ullamco laboris nisi
              aliquip commodo consequat duis aute irure dolor in reprehenderit.
            </p>
            <div className="click_abt align-items-center">
              <a href="#">About us</a>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={doc} className="img_bg" />
            <img src={doc_bg} className="fr_img img-fluid" />
          </div>
        </div>
      </section>
      <div className="container works text-center">
        <h2>
          We Made It Simple
          <br />
          <span>How It Works</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          voluptate, ipsam corrupti sunt sit nisi inventore magni mollitia ea
          cupiditate atque cum distinctio maxime quod dolorem nesciunt nostrum,
          est dolor?
        </p>
        <div className="row step d-flex">
          <div className=" col ">
            <img src={cir1} className="step_img" />
            <img src={arrow1} className="arrow_1" />
          </div>
          <div className=" col ">
            <img src={cir2} className="step_img" />
          </div>
          <div className="col ">
            <img src={arrow2} className="arrow_2" />
            <img src={cir3} className="step_img" />
          </div>
        </div>
      </div>
      <footer className=" text-center ">
        <div className="container p-4 pb-0">
          <section className="mb-4 footer_logo">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-envelope-o"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-white text-center p-3 ">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            DocHub
          </a>
        </div>
      </footer>
    </body>
  );
};
export default Home;
