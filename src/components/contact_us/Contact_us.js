import React, { useEffect, useState } from "react";
import bg from "../../assets/images/contactus/contactbg.png";
import email from "../../assets/images/contactus/email.svg";
import phone from "../../assets/images/contactus/phone.svg";

import "./style.css";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "../../axios";
import PhoneInput, {
  parsePhoneNumber,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Overlay from "../Overlay";
import { contactusDeatilsvalidation } from "../../utils/validators";

function Contact_us() {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    comments: "",
    country_code: "",
  });

  const handleOrder = async (values) => {
    setIsLoading(true);
    const callingCode = parsePhoneNumber(values.mobileNumber);
    let countrycodeis = callingCode.countryCallingCode;
    const newphoneNumber = values.mobileNumber
      .replace(countrycodeis, "")
      .trim();
    const formValues = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone_number: `${newphoneNumber}`,
      country_code: `+${countrycodeis}`,
      comments: values.comments,
    };

    console.log(formValues);

    try {
      const { data } = await axios.post("/api/contact-us", formValues);
      console.log("data is--> ", data);
      setUserDetails({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        comments: "",
      });
      setIsLoading(false);
      toast.success("Your From is Submitted successfully");
    } catch (error) {
      console.error(error);
      if (error?.response?.data?.errors) {
        toast.error(`${error.response.data.errors[0].msg}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(`${error?.response?.data?.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section className="contact-us">
        <div className="header">
          <div>
            <img src={bg} alt="" />
          </div>
          <h2 className="text">Contact Us</h2>
        </div>
        <div className="formbody">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="content-side">
                  <div>
                    <h4 className="pt-5">How can we help?</h4>
                    <p className="pt-4">
                      Your satisfaction is our primary concern here at Simplifi
                      Health. <br />
                      <br /> Kindly use the form on this page to let us know how
                      we can help you. Then give our support team up to 24 hours
                      (Mon-Fri) to reply.
                    </p>
                  </div>
                  <div>
                    <div className="cardbox">
                      <div className="d-flex align-items-center">
                        <div className="box">
                          <div className="d-flex">
                            <div className="me-2">
                              <img src={phone} alt="" />
                            </div>
                            <div>
                              <h6>Customer Care Number</h6>
                              <a href="tel:1800-7898-4565">1800-7898-4565</a>
                            </div>
                          </div>
                        </div>
                        <div className="box">
                          <div className="d-flex">
                            <div className="me-2">
                              <img src={email} alt="" />
                            </div>
                            <div>
                              <h6>Email Address</h6>
                              <a href="mailto:support@gmail.com">
                                support@gmail.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Formik
                  enableReinitialize
                  initialValues={userDetails}
                  validate={(values) => contactusDeatilsvalidation(values)}
                  validateOnChange
                  onSubmit={(values) => {
                    handleOrder(values);
                  }}
                >
                  {(formikBag) => (
                    <Form>
                      {console.log(formikBag)}
                      <div className="d-flex">
                        <div className="form-field">
                          <input
                            type="text"
                            name="firstName"
                            className="text-capitalize"
                            placeholder="first Name*"
                            value={formikBag.values.firstName}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "firstName",
                                e.target.value
                              );
                            }}
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="errormessage"
                          />
                        </div>
                        <div className="mx-2"></div>
                        <div className="form-field">
                          <input
                            type="text"
                            name="lastName"
                            className="text-capitalize"
                            placeholder="Last Name*"
                            value={formikBag.values.lastName}
                            onChange={(e) => {
                              formikBag.setFieldValue(
                                "lastName",
                                e.target.value
                              );
                            }}
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="errormessage"
                          />
                        </div>
                      </div>
                      <div className="form-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address*"
                          value={formikBag.values.email}
                          onChange={(e) => {
                            formikBag.setFieldValue("email", e.target.value);
                          }}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="errormessage"
                        />
                      </div>

                      <div className="form-field form-fieldphone">
                        <PhoneInput
                          defaultCountry="US"
                          name="mobileNumber"
                          className="w-100"
                          placeholder="Enter phone number"
                          value={formikBag?.values?.mobileNumber}
                          onChange={(value) => {
                            formikBag.setFieldValue("mobileNumber", value);
                          }}
                          error={
                            formikBag.touched.mobileNumber &&
                            formikBag.errors.mobileNumber
                              ? formikBag.errors.mobileNumber
                              : null
                          }
                        />
                        <p className="errormessage">
                          {formikBag.errors.mobileNumber}
                        </p>
                      </div>
                      <div>
                        <textarea
                          name="comments"
                          placeholder="Comments*"
                          value={formikBag.values.comments}
                          onChange={(e) => {
                            formikBag.setFieldValue("comments", e.target.value);
                          }}
                        ></textarea>
                        <ErrorMessage
                          name="comments"
                          component="div"
                          className="errormessage"
                        />
                      </div>

                      <div className="d-flex align-items-center justify-content-center mt-4">
                        <button className="button1" type="submit">
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <Overlay />}
    </>
  );
}

export default Contact_us;
