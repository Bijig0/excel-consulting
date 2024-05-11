"use client";
import { useState, useTransition } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Resend } from "resend";
import ErrorText from "./ErrorText";
import sendEmail from "./sendEmail";

export type FormValues = {
  name: string;
  email: string;
  additionalDetails: string;
  agreeToTerms: boolean;
};

type CreateEmailResponse = Awaited<
  ReturnType<InstanceType<typeof Resend>["emails"]["send"]>
>;

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  const [sendEmailResponse, setSendEmailResponse] =
    useState<CreateEmailResponse>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    startTransition(async () => {
      const result = await sendEmail(data);
      setSendEmailResponse(result);
    });
  };

  return (
    <div id="contact" style={{ flex: "4 1 0" }} className="col-lg-6 rel z-1">
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
            {errors.name && (
              <ErrorText>Please enter your representative's name</ErrorText>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <ErrorText>Please enter your business email</ErrorText>
            )}
          </div>
          <div className="form-group">
            <textarea
              id="additionalDetails"
              className="form-control"
              rows={4}
              placeholder="Enter any additional details"
              data-error="Please enter your Message"
              {...register("additionalDetails")}
            />
          </div>
          <div className="form-group input-radio">
            <input
              style={{ padding: 0 }}
              type="radio"
              id="agreeToTerms"
              {...register("agreeToTerms", { required: true })}
            />

            <label htmlFor="agreeToTerms">
              By submitting this form, I agree to the collection of my personal
              information
            </label>
          </div>
          {errors.agreeToTerms && (
            <ErrorText>
              Please agree to the terms to submit a consultation request
            </ErrorText>
          )}
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn">
              {isPending ? (
                <Spinner animation="border" />
              ) : (
                <span>Book a Consultation</span>
              )}
              {/* Book a Consultation <i className="far fa-arrow-right" /> */}
            </button>
          </div>

          {sendEmailResponse?.data && (
            <Alert
              key={"success"}
              variant={"success"}
              style={{ marginTop: "24px" }}
            >
              Message sent successfully! One of our representatives will be in
              touch with you within 24 hours!
            </Alert>
          )}
          {sendEmailResponse?.error && (
            <Alert
              key={"danger"}
              variant={"danger"}
              style={{ marginTop: "24px" }}
            >
              Something went wrong! Please send us an email admin@swiftqu.com or
              give us a call at +61 403 057 369
              {sendEmailResponse.error.message}
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
