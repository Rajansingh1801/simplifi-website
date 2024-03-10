import React, { useState } from 'react'
import SubscribeSend from "../../images/CarrotSvg/SubscribeSend.svg";
import { SearchContainer, SearchBar, SearchIcon, SearchInput } from './SearchElements'
import { Formik, Field, Form } from "formik";

import { newsletterValidator } from "../../utils/validators";
import Overlay from '../../components/Overlay';
import { toast } from "react-toastify";
import axios from "../../axios";

export default function Search(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [newsletterValues, setNewsletterValues] = useState({
        email: ""
    })

    const handleNewsletterValues = async (values, resetForm) => {

        var formvalues = {
            email: values.email
        }
        setIsLoading(true);
        try {
            const { data } = await axios.post("/user/newsletter", formvalues);
            console.log(data);
            setNewsletterValues({
                email : ""
            })
            resetForm();

            setIsLoading(false);
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            });
        } catch (error) {
            console.log(error);
            setIsLoading(false);
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

    return (
        <>
            <SearchContainer>
                <Formik
                    enableReinitialize
                    initialValues={newsletterValues}
                    validate={(values) => newsletterValidator(values)}
                    validateOnChange
                    onSubmit={(values , { resetForm }) => {
                        handleNewsletterValues(values, resetForm);
                    }}
                >
                    {(formikBag) => {
                        return (
                            <Form className="formStyle">
                                <SearchBar>
                                    <Field name="firstName">
                                        {({ field }) => (
                                            <SearchInput 
                                                {...field}
                                                type="text" 
                                                placeholder="Enter Email Address"
                                                value={formikBag.values.email}
                                                onChange={(e) => {
                                                    formikBag.setFieldValue(
                                                        "email",
                                                        e.target.value
                                                    );
                                                }}
                                                error={
                                                    formikBag.touched.email &&
                                                        formikBag.errors.email
                                                        ? formikBag.errors.email
                                                        : null
                                                }
                                            >
                                            </SearchInput>
                                        )}
                                    </Field>
                                    <SearchIcon
                                        type="submit"
                                    >
                                        <img src={SubscribeSend}/>
                                    </SearchIcon>
                                </SearchBar>
                                {formikBag.touched.email &&
                                    formikBag.errors.email
                                    ? <p
                                        style={{
                                        paddingTop: 5,
                                        fontSize: 13,
                                        color: "#FFFFFF",
                                        textAlign: "left",
                                        width: "100%"
                                        }}>
                                        {formikBag.errors.email}
                                    </p>
                                    : null}
                            </Form>
                        );
                    }}
                </Formik>
                
            </SearchContainer>
            {isLoading && <Overlay />}
        </>
    );
};