"use client";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import sendEmail from "./sendEmail";

export type FormValues = {
  name: string;
  email: string;
  additionalDetails: string;
  agreeToTerms: boolean;
};

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    startTransition(() => {
      sendEmail(data);
    });
  };

  return (
    <div style={{ flex: "4 1 0" }} className="col-lg-6 rel z-1">
      <div style={{ paddingBlock: "52px" }} className="hero-form">
        <h4>Start supercharging your spreadsheets</h4>
        <div style={{ marginBlock: "24px" }} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          name="contactForm"
          method="post"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-group">
            <textarea
              id="additionalDetails"
              className="form-control"
              rows={4}
              placeholder="Enter any additional details"
              data-error="Please enter your Message"
              {...register("additionalDetails", { required: true })}
            />
          </div>
          <div className="form-group input-radio">
            <input
              type="radio"
              id="agreeToTerms"
              {...register("agreeToTerms", { required: true })}
            />
            <label htmlFor="terms">
              By submitting this form, I agree to the collection of my personal
              information
            </label>
          </div>
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn">
              Book a Consultation <i className="far fa-arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
