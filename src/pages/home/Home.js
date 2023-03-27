import React from "react";

const Home = () => {
  return (
    <body>
      <header>
        <nav class="navbar navbar-expand-lg h-5 ">
          <a class="navbar-brand" href="#">
            <img
              src="./assets/images/main_logo.png"
              class="logo"
              width="115"
              height="auto"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link " aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="./abt.html">
                About us
              </a>
              <a class="nav-link" href="./appoinment.html">
                Book an appoinment
              </a>
              <a class="nav-link">Blog</a>
            </div>
          </div>
        </nav>
      </header>
      <section class="i">
        <div class="onimg">
          <img src="./assets/images/banners/bunner.png" class="img-fluid" />
          <h1>
            We Care<br></br>
            <span></span>
          </h1>
        </div>
      </section>
      <div class="no-gutters d-flex justify-content-center search ">
        <div class="loc">
          <select
            class="form-control text-area "
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
        <div class="name">
          <select class="form-control text-area" id="exampleFormControlSelect1">
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
      <section class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-6 align-self-center one_click">
            <h2 class="h2">
              {" "}
              Bring Care to Your<br></br>
              <span>Home With One Click</span>
            </h2>
            {/* <img src="./assets/images/services/section-bg.png" class="p_bg"> */}
            <p>
              Lorem ipsum dolor amet consectetur adipisicing elitiuim sete
              eiusmod tempor incididunt ut labore etnalom dolore magn aiqua
              udiminimate veniam quis norud exercitation ullamco laboris nisi
              aliquip commodo consequat duis aute irure dolor in reprehenderit.
            </p>
            <div class="click_abt align-items-center">
              <a href="#">About us</a>
            </div>
          </div>

          <div class="col-12 col-sm-12 col-md-12 col-lg-6">
            {/* <img src="./assets/images/services/img-bg.png" class="img_bg"> */}
            {/* <img src="./assets/images/services/img-01-bg.jpg" class="fr_img img-fluid"> */}
          </div>
        </div>
      </section>
      <div class="container works text-center">
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
        <div class="row step d-flex">
          <div class=" col ">
            {/* <img src="./assets/images/circle-1.png" class="step_img"> */}
            {/* <img src="./assets/images/services/line-01.png" class="arrow_1"> */}
          </div>
          <div class=" col ">
            {/* <img src="./assets/images/circle-2.png" class="step_img"> */}
          </div>
          <div class="col ">
            {/* <img src="./assets/images/services/line-02.png"class="arrow_2"> */}
            {/* <img src="./assets/images/circle-3.png"class="step_img"> */}
          </div>
        </div>
      </div>
      <footer class=" text-center ">
        <div class="container p-4 pb-0">
          <section class="mb-4 footer_logo">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa fa-envelope-o"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa fa-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-white text-center p-3 ">
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            DocHub
          </a>
        </div>
      </footer>
    </body>
  );
};
export default Home;
