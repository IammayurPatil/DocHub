import React from "react";
import abt_img from "../../assests/images/about-img.jpg";
import explore from "../../assests/images/explore.png";
import match from "../../assests/images/match.png";
import arrange from "../../assests/images/arrange.png";
import treat from "../../assests/images/treat.png";
import patients from "../../assests/images/patients.svg";
import hospitals from "../../assests/images/hospitals.svg";
import doctors from "../../assests/images/doctors.svg";

const About = () => {
  return (
    <body>
      {/* <h1>About us</h1> */}
      <div className="heading">
        <h1>About Dochub</h1>
        <p>Take A Right Step For Your Life.</p>
      </div>
      <section className="about-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="col-lg-6 aos-init aos-animate"
            >
              <div className="about-img-two">
                <img decoding="async" src={abt_img} alt="Image" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1600"
              className="col-lg-6 aos-init aos-animate"
            >
              <div className="about-content-two">
                <h2>Tackle The Challenge Of Delivering Health Care</h2>
                <p></p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi consectetur adipiscing elit incididunt labore
                  dolore magna. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi consectetur adipiscing elit
                  incididunt labore dolore magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi consectetur adipiscing elit incididunt labore
                  dolore magna. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi consectetur adipiscing elit
                  incididunt labore dolore magna.
                </p>
                <p></p>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="functions">
        <h2>The Simplest Interface for Finding Healthcare</h2>
      </div>
      <div className="card-group container">
        <div className="card function">
          <div className="card-flyer">
            <img
              className="card-img-top cardimg"
              src={explore}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Explore</h5>
              <p className="card-text">
                Find and research top hospitals & destinations
                {/* &nbsp&nbsp&nbsp&nbsp &nbsp &nbsp */}
              </p>
            </div>
          </div>
        </div>
        <div className="card function">
          <div className="card-flyer">
            <img className="card-img-top" src={match} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Match</h5>
              <p className="card-text">
                Based on your criteria, we recommend the best hospitals or
                providers
              </p>
            </div>
          </div>
        </div>
        <div className="card function">
          <div className="card-flyer">
            <img className="card-img-top" src={arrange} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Arrange</h5>
              <p className="card-text">
                The provider will contact you directly to coordinate your
                treatment
              </p>
            </div>
          </div>
        </div>
        <div className="card function">
          <div className="card-flyer">
            <img className="card-img-top" src={treat} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Treat</h5>
              <p className="card-text">
                Finalize your treatment with the hospital/provider of your
                choice
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="about-us-section padding-top-60 padding-bottom-60 bggrn cct">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 px-0">
              <div className="padding-top-20 padding-bottom-20">
                <div className="common-title padding-bottom-20">
                  <h2 className="heading">Our Vision</h2>
                </div>
                <p>
                  To be leaders amongst the Obstetrics and Gynecological
                  healthcare providers.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="padding-top-20 padding-bottom-20">
                <div className="common-title padding-bottom-20">
                  <h2 className="heading">Our Mission</h2>
                </div>
                <p>
                  Patients should be able to trust doctors with their lives and
                  well being.To justify that trust, we as a profession have a
                  duty to maintain a good standard of practice and care and to
                  show respect for human life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white stats">
        <div className="width_77_per stats_div padding-20 border-none">
          <div className="row bottom_stats">
            <div className="col-sm-4 statics">
              <p>
                <img src={patients} alt="Patient Count" loading="lazy" />
              </p>
              <p className="fs-16">
                <span className="fs-24 color-blue-128 fw-500">50+</span>{" "}
                patients have used <br className="hidden-md hidden-sm" />
                Dochub services
              </p>
            </div>
            <div className="col-sm-4 statics">
              <p>
                <img src={hospitals} alt="Hospitals" loading="lazy" />
              </p>
              <p className="fs-16">
                <span className="fs-24 color-blue-128 fw-500">50+</span>{" "}
                Hospitals Across
                <br /> Gujarat
              </p>
            </div>
            <div className="col-sm-4 statics">
              <p>
                <img src={doctors} alt="Doctors" loading="lazy" />
              </p>
              <p className="fs-16">
                <span className="fs-24 color-blue-128 fw-500">50+</span>{" "}
                Specialists Doctors
                <br className="hidden-md hidden-sm" /> Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};
export default About;
