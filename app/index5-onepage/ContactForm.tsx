const ContactForm = () => {
  return (
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
              I’ve Read and agreed to <a href="#">Terms &amp; Conditions</a>
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
  );
};

export default ContactForm;
