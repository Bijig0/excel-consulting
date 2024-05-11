"use client";
import Counter from "@/components/Counter";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Tab } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import ContactForm from "./ContactForm";

const page = () => {
  const isTabletOrBelow = useMediaQuery({ query: "(max-width: 960px)" });

  return (
    <AkpagerLayout footer={5} header={5} bodyClass={"home-five"} onePage>
      {" "}
      {/* Hero area start */}
      {isTabletOrBelow ? (
        <section id="home" className="hero-area-five py-130 rpy-100 rel z-1">
          <div className="container">
            <div className="hero-content style-five text-center">
              <span className="subtitle-one mb-20">
                <i className="fas fa-rocket-launch" /> Excel Automations And
                Analysis
              </span>
              <h1 style={{ textWrap: "balance" }}>
                Excel Experts To Solve Your Business Needs
              </h1>
              <div className="row justify-content-center pt-5 rpt-0 pb-25">
                <div className="col-xl-7 col-lg-9">
                  <p>
                    SLK Automations powers business spreadsheets through expert
                    consulting on spreadsheet needs from data visualizations and
                    analysis, to custom macros and formulas
                  </p>
                </div>
              </div>
              <Link href="contact" className="theme-btn">
                Book a consultation <i className="far fa-arrow-right" />
              </Link>
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
          <div
            style={{
              marginBlock: "32px",
              marginInline: "auto",
              backgroundColor: "#ccc",
              display: "block",
              width: "75%",
              height: "1px",
            }}
          ></div>
          <div
            style={{ justifyContent: "space-evenly" }}
            className="clients-reviews"
          >
            <div style={{ margin: 0 }} className="clients">
              <h6>Happy Customer</h6>
              <div className="images">
                <img src="assets/images/hero/client1.png" alt="Client" />
                <img src="assets/images/hero/client2.png" alt="Client" />
                <img src="assets/images/hero/client3.png" alt="Client" />
                <img src="assets/images/hero/client4.png" alt="Client" />
              </div>
            </div>
            <div style={{ margin: 0 }} className="reviews">
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
          <div style={{ marginBlock: "52px" }} />
          <div style={{ paddingInline: "28px" }}>
            <ContactForm />
          </div>
        </section>
      ) : (
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
                    SLK Automations powers business spreadsheets through expert
                    consulting on spreadsheet needs from data visualizations and
                    analysis, to custom macros and formulas
                  </p>
                </div>
              </div>
              {/* <Divider /> */}
              <div
                style={{
                  backgroundColor: "#ccc",
                  display: "block",
                  width: "75%",
                  height: "1px",
                }}
              ></div>
              <div
                style={{ justifyContent: "start", gap: "32px" }}
                className="clients-reviews"
              >
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
            <ContactForm />
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
      )}
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
                    Our expert analysts use advanced data visualization
                    techniques and technology, including <strong>VBA</strong>,{" "}
                    <strong>Power BI</strong> and <strong> Python</strong>. Your
                    financial reports and predictions are in good hands
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
                    Our team work with{" "}
                    <strong>your existing spreadsheets</strong>
                    to automate <strong>manual</strong> workflows through{" "}
                    <strong>macros</strong> and other techniques
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
                    We also offer <strong>dashboard visualizations</strong>,{" "}
                    <strong>data manipulation</strong> services,{" "}
                    <strong>third party integrations</strong> and more. Book a
                    consultation to let us know your needs!
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
        id="services"
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
                    <i className="fal fa-check" /> Optimize your current
                    automations
                  </li>
                </ul>
                <Link href="/#home" className="theme-btn">
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
        id="tooling"
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
                  <p>We can help manipulate, clean, and consume your data</p>
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
                    Stop manually performing repetitive tasks. Automate your
                    existing manual workflows
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
                    Connect your spreadsheet to more powerful tools. Dashboard
                    visualizations and manipulations
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
                    Calculate, summarize, and analyze your data. Make
                    comparisons, find patterns, and determine trends
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
                    Find interesting insights from your context-specific data.
                    Utilize custom aggregation techniques
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
                  <p>...Book a consultation so we can learn your needs</p>
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
    </AkpagerLayout>
  );
};
export default page;
