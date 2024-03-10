import React from "react";
import jug from "../../assets/images/img/jug.png";
import veg from "../../assets/images/img/veg.png";
import "./style.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "../../axios";
import { OfferValidator } from "../../utils/validators";

const Offer = () => {
  const handleclick = async (values) => {
    try {
    } catch (error) {}
  };
  return (
    <>
      <section className="offer">
        <div className="container">
          <div className="main">
            <div className="body">
              <div className="heading pe-4">
                <h2>Get 25% Off Today!</h2>
                <p className="pt-4">
                  Enter your best email below so we can send you a 25% off
                  discount coupon. We'll also send you health tips, expert
                  advice and discounts to your inbox.
                </p>
              </div>
              <div>
                {
                  <Formik
                    enableReinitialize
                    initialValues={{
                      email: "",
                    }}
                    validate={(values) => OfferValidator(values)}
                    validateOnChange
                    onSubmit={(values) => handleclick(values)}
                  >
                    {(formikBag) => {
                      return (
                        <Form className="formStyle ">
                          <div className="inp-cont">
                            <Field
                              type="email"
                              name="email"
                              value={formikBag.values.email}
                              onChange={(e) => {
                                formikBag.setFieldValue(
                                  "email",
                                  e.target.value
                                );
                              }}
                              placeholder="Email Address"
                            />

                            <div className="d-flex justify-content-center">
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="27"
                                  height="14"
                                  viewBox="0 0 27 14"
                                  fill="none"
                                >
                                  <path
                                    d="M1 6.25344C0.518651 6.25344 0.12844 6.64365 0.12844 7.125C0.12844 7.60635 0.518651 7.99656 1 7.99656V6.25344ZM26.02 7.74129C26.3603 7.40092 26.3603 6.84908 26.02 6.50871L20.4734 0.962143C20.133 0.621778 19.5812 0.621778 19.2408 0.962143C18.9004 1.30251 18.9004 1.85435 19.2408 2.19471L24.1711 7.125L19.2408 12.0553C18.9004 12.3957 18.9004 12.9475 19.2408 13.2879C19.5812 13.6282 20.133 13.6282 20.4734 13.2879L26.02 7.74129ZM1 7.99656H25.4037V6.25344H1V7.99656Z"
                                    fill="white"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="errormessage"
                          />
                        </Form>
                      );
                    }}
                  </Formik>
                }
              </div>
            </div>
            <div className="img-section d-lg-flex d-none">
              <div className="img-cont">
                <img src={jug} alt="" />
              </div>
              <div className="mx-3"></div>
              <div className="img-cont">
                <img src={veg} alt="" />
              </div>
            </div>
          </div>
          <p>
            *By entering your email, you consent to receive notifications from
            us. You can unsubscribe at anytime. You also consent to our Privacy
            and Terms Policies.
          </p>
        </div>
      </section>
    </>
  );
};

export default Offer;
