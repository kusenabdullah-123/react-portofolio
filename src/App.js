import logo from "./assets/img/logo.png";
import headerImage from "./assets/img/banner/home-right.png";
import imageAboutUs from "./assets/img/about-us.png";
import logo1 from "./assets/img/brands/logo1.png";
import logo2 from "./assets/img/brands/logo8.png";
import logo3 from "./assets/img/brands/logo9.png";
import imgService1 from "./assets/img/services/s1.png";
import imgService2 from "./assets/img/services/s2.png";
import imgService3 from "./assets/img/services/s3.png";
import imgService4 from "./assets/img/services/s4.png";
import "./App.css";

function App() {
  return (
    <>
      {/* header */}
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <a className="navbar-brand logo_h" href="">
                <img src={logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* end Header */}
      {/* header banner */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hell0</h3>
                  <h1 className="text-uppercase">I am Kusena Dev</h1>
                  <h5 className="text-uppercase">Junior Developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#">
                      <span>Hire Me</span>
                    </a>
                    <a className="primary_btn tr-bg" href="#">
                      <span>Get CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                  <img className="" src={headerImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end header banner */}
      {/* about us */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src={imageAboutUs} alt="" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>
                  let’s <br />
                  Introduce about <br />
                  myself
                </h2>
                <p>
                  Whose given. Were gathered. There first subdue greater.
                  Bearing you Whales heaven midst their. Beast creepeth. Fish
                  days.
                </p>
                <p>
                  Is give may shall likeness made yielding spirit a itself
                  together created after sea is in beast beginning signs open
                  god you're gathering whose gathered cattle let. Creature
                  whales fruit unto meat the life beginning all in under give
                  two.
                </p>
                <a className="primary_btn" href="">
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about us */}
      {/* brand area */}
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={logo1} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={logo2} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src={logo3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">5</span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone" />
                  </div>
                  <div className="ml-15">
                    <p>call us now</p>
                    <h3>(+62)82333086744</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end brand area */}
      {/* features */}
      <section className="features_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="main_title">
                <h2>service offers</h2>
                <p>
                  Is give may shall likeness made yielding spirit a itself
                  togeth created after sea <br />
                  is in beast beginning signs open god you're gathering ithe
                </p>
              </div>
            </div>
          </div>
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={imgService1} alt="" />
                <h4>Service Computer &amp; Laptop</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={imgService2} alt="" />
                <h4>UI/ux design</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={imgService3} alt="" />
                <h4>Web design</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src={imgService4} alt="" />
                <h4>seo optimize</h4>
                <p>
                  Creeping for female light years that lesser can't evening
                  heaven isn't bearing tree
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end features */}
      {/* footer */}
      <footer className="footer_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="footer_top flex-column">
                <div className="footer_logo">
                  <a href="#">
                    <img src={logo} alt="" />
                  </a>
                  <h4>Follow Me</h4>
                </div>
                <div className="footer_social">
                  <a href="https://www.facebook.com/people/M-Kusen-Abdullah/100008397672983/">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer_bottom justify-content-center">
            <p className="col-lg-8 col-sm-12 footer-text">
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true" /> by
              <a href="https://colorlib.com" target="_blank">
                Colorlib & edit by KusenaDev
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
          </div>
        </div>
      </footer>

      {/* end footer */}
    </>
  );
}

export default App;
