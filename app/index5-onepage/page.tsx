"use client";
import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Tab } from "react-bootstrap";
import Slider from "react-slick";
const page = () => {
  return (
    <AkpagerLayout footer={5} header={5} bodyClass={"home-five"} onePage>
      {" "}
      {/* Hero area start */}
      <section
        id="home"
        style={{ paddingTop: "80px" }}
        className="hero-area-five pb-130 rpy-100 rel z-1"
      >
        <div style={{ display: "flex" }} className="container">
          <div
            style={{
              flex: "5 1 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className="hero-content style-five text-center"
          >
            {/* <span style={{ textAlign: "left" }} className="subtitle-one">
              <i className="fas fa-rocket-launch" /> Excel Automations And
              Analysis
            </span> */}
            <h1
              style={{
                textWrap: "balance",
                textAlign: "left",
                marginBottom: 0,
              }}
            >
              Excel Experts To Solve Your Business Needs
            </h1>
            <div style={{ marginBlock: "16px" }} />
            <div className="row justify-content-start pb-25">
              <div className="col-xl-7 col-lg-9">
                <p style={{ textAlign: "left" }}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  quae abillo inventore veritatis
                </p>
              </div>
            </div>
            {/* <Divider /> */}
            <div
              style={{
                backgroundColor: "#08c16a",
                display: "block",
                width: "75%",
                height: "1px",
              }}
            ></div>
            <div className="clients-reviews">
              <div className="clients">
                <h6>Happy Customer</h6>
                <div className="images">
                  <img src="assets/images/hero/client1.png" alt="Client" />
                  <img src="assets/images/hero/client2.png" alt="Client" />
                  <img src="assets/images/hero/client3.png" alt="Client" />
                  <img src="assets/images/hero/client4.png" alt="Client" />
                </div>
              </div>
              <div className="reviews">
                <h6>4.7/5 on TrustPilot</h6>
                <div className="ratting">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: "4 1 0" }} className="col-lg-6 rel z-1">
            <div className="hero-form">
              <h4>Sign Up Now</h4>
              <p>Ready to Register Our Landsio Services</p>
              <form action="#" name="contactForm" method="post">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
                <div className="form-group input-radio">
                  <input
                    type="radio"
                    id="terms"
                    name="terms"
                    defaultValue="terms"
                    required=""
                  />
                  <label htmlFor="terms">
                    I’ve Read and agreed to{" "}
                    <a href="#">Terms &amp; Conditions</a>
                  </label>
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Register <i className="far fa-arrow-right" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hero-bg-wave-shapes">
          <span className="circle" />
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Hero area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area-five pt-125 rpt-105 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50">
            <h4>
              Partnered with over{""} <span>15+</span> Agencies &amp; Businesses
            </h4>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo1.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo2.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo3.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo4.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo5.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="client-logo-item">
                <a href="#">
                  <img
                    src="assets/images/client-logos/client-logo6.png"
                    alt="Client Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Client Logos Area End */}
      {/* Feature Image box Area Start */}
      <section
        id="features"
        className="feature-image-box-area pt-95 rpt-75 pb-70 rpb-50 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div className="section-title text-center mb-55">
                <span className="subtitle-one style-two mb-20">
                  {/* <i className="fas fa-rocket-launch" /> World Class Support */}
                </span>
                <h2>Power your spreadsheets</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="feature-image-box">
                <div className="image">
                  <img
                    src="https://media.licdn.com/dms/image/D4D12AQFZF31wF_MOGQ/article-cover_image-shrink_720_1280/0/1684315532338?e=2147483647&v=beta&t=qKqYcysmUa8eaeaBT8p4F392C8VAuUCOjA0eE4WGb_Q"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Data visualization and analysis
                    </Link>
                  </h5>
                  <p>
                    Sed uterspiciatis unde omnis natus error voluptatem
                    accusantium doloremque ways laudantium totam aperiam eaque
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-image-box">
                <div className="image">
                  <img
                    style={{ objectFit: "contain" }}
                    src="https://nanonets.com/blog/content/images/2023/08/Pivot-Table-Example-for-Excel-Automation.png"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Process Automation</Link>
                  </h5>
                  <p>
                    Quis autem vel eumiure reprehenderit qui in ea voluptate
                    velit esse quam molestiae consequatur vel illum qui dolorem
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="feature-image-box">
                <div className="image">
                  <img
                    src="https://images.ctfassets.net/lzny33ho1g45/6scPSxCdwNFMjunqSjtZKw/c1c94e86a6aaf07a7ab9d13305994cef/automate-microsoft-excel-00-hero.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                    alt="Feature"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">And More</Link>
                  </h5>
                  <p>
                    To take a trivial example, which of us ever undertakes
                    laborious physical exercise, except to obtain some advantage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Feature Image box Area End */}
      {/* Tab Area Start */}
      <section
        id="about"
        className="tab-area-five bgc-black text-white pt-120 rpt-100 pb-80 rpb-60 rel z-1"
      >
        <div className="container">
          <div className="row gap-100 align-items-center justify-content-center">
            <div className="col-lg-6">
              <div className="tap-five-content rmb-55">
                <div className="section-title pt-10 mb-55">
                  <span className="subtitle-one style-three mb-20">
                    {/* <i className="fas fa-rocket-launch" /> Best Custom Saas to
                    you */}
                  </span>
                  <h2>
                    Modernize your spreadsheets to get ahead of your competitors
                  </h2>
                </div>
                <Tab.Container defaultActiveKey={"tabFour1"}>
                  <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="tabFour1">
                      <p>
                        We make use of the latest technology to power our
                        solutions. Python, AI and Power BI, are just a few
                        examples of the high-powered technologies and languages
                        we use to perform data analysis, visualizations and
                        automations on your spreadsheets. Your spreadsheet will
                        be customized with context specific abilities tailored
                        to your specific industry domain. Use these modern
                        toolings to stay ahead of your competitors.
                      </p>
                      <div className="feature-icon-box text-white mt-30">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Individiaulized Analytics</h5>
                          <p>Doloremque laudantium totamto aperiame eaque</p>
                        </div>
                      </div>
                      <div className="feature-icon-box text-white">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>State-Of-The-Art Tooling</h5>
                          <p>
                            At vero eoset accusamus etodio dignissimos ducimus
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tabFour2">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <div className="feature-icon-box text-white mt-30">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Individual lead profile</h5>
                          <p>Doloremque laudantium totamto aperiame eaque</p>
                        </div>
                      </div>
                      <div className="feature-icon-box text-white">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Advanced deal tracking</h5>
                          <p>
                            At vero eoset accusamus etodio dignissimos ducimus
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className="tab-pane fade" eventKey="tabFour3">
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <div className="feature-icon-box text-white mt-30">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Individual lead profile</h5>
                          <p>Doloremque laudantium totamto aperiame eaque</p>
                        </div>
                      </div>
                      <div className="feature-icon-box text-white">
                        <div className="icon">
                          <i className="far fa-check" />
                        </div>
                        <div className="content">
                          <h5>Advanced deal tracking</h5>
                          <p>
                            At vero eoset accusamus etodio dignissimos ducimus
                          </p>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="management-images mb-20">
                <img src="assets/images/tabs/tab-four.png" alt="Management" />
                <div className="management-over">
                  <img
                    src="assets/images/about/management2.png"
                    alt="Management"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-90 rpt-70 gap-10">
            <div className="col-lg-4 col-md-6">
              <div className="counter-item style-two counter-text-wrap">
                <div className="icon">
                  <i className="flaticon-review" />
                </div>
                <span
                  className="count-text plus"
                  data-speed={3000}
                  data-stop={25}
                >
                  <Counter end={15} />
                </span>
                <hr />
                <span className="counter-title">100% Satisfied Clients</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-item style-two counter-text-wrap">
                <div className="icon">
                  <i className="flaticon-layers-1" />
                </div>
                <span
                  className="count-text plus"
                  data-speed={3000}
                  data-stop={235}
                >
                  <Counter end={25} />
                </span>
                <hr />
                <span className="counter-title">Projects Completed</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-item style-two counter-text-wrap">
                <div className="icon">
                  <i className="flaticon-online-registration" />
                </div>
                <span className="count-text" data-speed={3000} data-stop={1052}>
                  4.8
                </span>
                <hr />
                <span className="counter-title">
                  TrustPilot{" "}
                  <a
                    style={{
                      color: "RGB(5, 99, 193)",
                      textDecoration: "underline",
                    }}
                  >
                    Reviews
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines line-white">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Tab Area End */}
      <section className="about-area-five pt-120 rpb-100 rel z-1">
        <div className="container">
          <div className="row gap-40 align-items-center">
            <div className="col-lg-6">
              <div className="about-images-five rmb-55">
                <img src="assets/images/about/about-five1.png" alt="About" />
                <img src="assets/images/about/about-five2.png" alt="About" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-five mt-40 rmt-15">
                <div className="section-title mb-30">
                  <span className="subtitle-one style-two mb-20">
                    {/* <i className="fas fa-rocket-launch" /> Build Better products */}
                  </span>
                  <h2>Power existing workflows</h2>
                </div>
                <p>
                  Automate your manual workflows, and speed up your existing
                  processes! Our team of expert analysts are experienced with
                  VBA, macros, custom formulas and more Excel features to help
                  automate your workflows. Or, if you have existing automations,
                  we can even work with your Excel team to help make them more
                  effective and efficient!
                </p>
                <ul className="icon-list style-two mt-40 mb-40">
                  <li>
                    <i className="fal fa-check" /> Automate your manual
                    workflows
                  </li>
                  <li>
                    <i className="fal fa-check" /> Optimize your automations
                  </li>
                </ul>
                <Link href="about" className="theme-btn">
                  Learn More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Feature box Area Start */}
      <section
        id="services"
        className="feature-box-area pt-125 rpt-105 pb-90 rpb-70 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div className="section-title text-center mb-55">
                <span className="subtitle-one style-two mb-20">
                  <i className="fas fa-rocket-launch" /> Our Excel Toolbox
                </span>
                <h2 style={{ textDecoration: "balance" }}>
                  We choose the right tools for the job
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="fal fa-atom-alt" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">VBA Programming</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="fal fa-rocket-launch" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Macros</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-bullseye-pointer" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Power BI</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-anchor" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Pivot Tables</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-layer-group" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Custom Formulas</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="iconic-box style-seven">
                <div className="icon">
                  <i className="far fa-shield-check" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">And More</Link>
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus doloremque
                    laudantium totamto
                  </p>
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/iconic-box-seven-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Feature box Area End */}
      {/* FeedbackArea Start */}
      <section
        id="testimonials"
        className="feedback-area-five bgc-lighter pt-125 rpt-105 pb-80 rpb-60 rel z-1"
      >
        <div className="container">
          <div className="section-title text-center mb-55">
            <span className="subtitle-one style-two mb-20">
              <i className="fas fa-rocket-launch" /> Customer Feedback
            </span>
            <h2>Here's what our partners say</h2>
          </div>
          <div className="row gap-50">
            <div className="col-lg-6">
              <div className="testimonial-item style-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author1.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Dennis J. Lester /</b> CEO &amp; Founder
                  </div>
                </div>
                <div className="author-text">
                  As the CFO of a mid-sized manufacturing company, I have been
                  continually impressed by the services offered by [Company
                  Name]. Their team helped streamlined our financial reporting
                  processes and implemented advanced forecasting models that
                  have significantly improved our budgeting accuracy. They are
                  an invaluable partner to us and we highly recommend their
                  services
                </div>
                <div className="testi-footer">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text">
                    <span>4.7/5</span> on Trustpilot
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item style-two">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author7.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Nicholas S. Moore / </b> CEO &amp; Founder
                  </div>
                </div>
                <div className="author-text">
                  I run a small online retail business, and data management was
                  always a challenge for us until we started working with
                  [Company Name]. Their consultants transformed our data into
                  clear, actionable insights that have directly contributed to
                  an increase in our sales. Their custom dashboard lets us track
                  our key performance indicators in real-time. I'm grateful for
                  their expertise and highly recommend their services to any
                  business working with Excel
                </div>
                <div className="testi-footer">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text">
                    <span>4.7/5</span> on Trustpilot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.marqueeSliderRight}
          className="marquee-slider-right iconic-slider-right style-two pt-40 rpt-20"
        >
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member1.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Mike R. Smith</h6>
                <span className="subtitle">CEO Founder</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member2.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Leroy T. Casey</h6>
                <span className="subtitle">Developer</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member3.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Roger E. Sanders</h6>
                <span className="subtitle">Businessman</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member4.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Chris L. Mauney</h6>
                <span className="subtitle">Co-founder</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member5.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">James D. Wright</h6>
                <span className="subtitle">UI Designer</span>
              </div>
            </div>
          </div>
          <div>
            <div className="marquee-iconic-box">
              <div className="image">
                <img src="assets/images/marquee-box/member6.png" alt="Member" />
              </div>
              <div className="content">
                <h6 className="title">Louis M. Pawlak</h6>
                <span className="subtitle">Marketer</span>
              </div>
            </div>
          </div>
        </Slider>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* FeedbackArea End */}
      {/* Work Step Area Five Start */}
      {/* Work Step Area End */}
      {/* Footer Top CTA Area Start */}
      {/* <section className="footer-top-cta-area">
        <div className="container container-1500">
          <div
            className="footer-top-cta-wrap bgc-primary"
            style={{
              backgroundImage: "url(assets/images/backgrounds/cta-bg.png)",
            }}
          >
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-6">
                <div className="image rmb-55">
                  <img src="assets/images/footer/footer-cta.png" alt="CTA" />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="footer-top-cta-content text-white">
                  <div className="section-title mb-30">
                    <span className="subtitle-one style-three mb-20">
                      <i className="fas fa-rocket-launch" /> Get Started Free
                    </span>
                    <h2>Are You Ready To Get 7-Days For Free?</h2>
                  </div>
                  <p>
                    Praesentium voluptatum deleniti atque corrupti quos dolores
                    quas molestias exceptur occaecatie
                  </p>
                  <Link href="contact" className="theme-btn mt-25">
                    Get Started Free <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="contact-page py-130 rpy-100">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="contact-info-part">
                <div className="section-title mb-50">
                  <h2>Feel Free to Contact Us, Get In Touch</h2>
                  <p>
                    We're here to assist you in any way we can. Whether you have
                    questions, feedback, or just want to say hello
                  </p>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="content">
                    <span className="title">Location</span>
                    <span className="text">
                      55 Main Street, 2nd block Melbourne, Australia
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="far fa-envelope-open-text" />
                  </div>
                  <div className="content">
                    <span className="title">Email Address</span>
                    <span className="text">
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </span>
                  </div>
                </div>
                <div className="contact-info-item style-two">
                  <div className="icon">
                    <i className="fal fa-phone-volume" />
                  </div>
                  <div className="content">
                    <span className="title">Make A Call</span>
                    <span className="text">
                      <a href="calto:+000(123)456889">+000 (123) 456 889</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="contact-form br-10 bgc-lighter rmt-60"
                name="contact-form"
              >
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  action="assets/php/form-process.php"
                  method="post"
                >
                  <img
                    className="shape-one"
                    src="assets/images/shapes/star-yellow-shape.png"
                    alt="Star Shape"
                  />
                  <img
                    className="shape-two"
                    src="assets/images/shapes/star-black-shape.png"
                    alt="Star Shape"
                  />
                  <h5>Send Us Message</h5>
                  <p>
                    Questions or you would just like to say hello, contact us.
                  </p>
                  <div className="row mt-30">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Somaia D. Silva"
                          required=""
                          data-error="Please enter your Name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="support@gmail.com"
                          required=""
                          data-error="Please enter your Email"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          defaultValue=""
                          placeholder="I like to discussed"
                          required=""
                          data-error="Please enter your Subject"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          placeholder="Write Message"
                          required=""
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Send Us Message <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default page;
