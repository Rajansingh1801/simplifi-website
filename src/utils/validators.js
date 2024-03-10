import { dictionaryList } from "./language/index";
const defaultLanguage = "en";

const messages = dictionaryList[defaultLanguage].errors;
// const NewpasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const NewpasswordRegex = /^.{8,}$/;

// global regex
const noHtmlRegex = /<\/?[^>]+(>|$)/g;
const onlyAlphbetRegex = /^[a-zA-Z ]*$/;
const numberOnly = /^\d+$/;
var phoneRegex = /^[0-9]+$/;
// var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/;
var passwordRegex = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{7,}$/;

const checkEmail = (value) => {
  if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  ) {
    return true;
  } else if (
    value.includes('"') ||
    value.includes("'") ||
    value.includes(",") ||
    value.includes(" ")
  ) {
    return true;
  } else {
    return false;
  }
};

export const loginValidator = (values) => {
  // console.log(values);
  let errors = {};
  if (!values.email) {
    errors.email = "Please enter the email";
  } else if (checkEmail(values.email)) {
    errors.email = "Please enter valid email format";
  }

  if (!values.password) {
    errors.password = "Please enter the password";
  }

  return errors;
};

export const forgetValidator = (values) => {
  let errors = {};

  if (values.email) {
    if (
      !/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        values.email
      )
    ) {
      errors.email = "Enter a valid email address";
    }
  } else {
    errors.email = "Please enter the Email";
  }

  return errors;
};

export const OfferValidator = (values) => {
  let errors = {};

  if (values.email) {
    if (
      !/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        values.email
      )
    ) {
      errors.email = "Enter a valid email address";
    }
  } else {
    errors.email = "Please enter the Email";
  }

  return errors;
};

export const otpValidator = (values) => {
  let errors = {};

  if (values.verificationCode.length < 4) {
    errors.verificationCode = "Enter valid OTP";
  }
  if (!values.verificationCode) {
    errors.verificationCode = "Please enter OTP";
  }
  return errors;
};

export const resetPasswordValidator = (values) => {
  // console.log(values);
  let errors = {};
  if (!values.password) {
    errors.password = "Please enter the Password";
  } else if (!NewpasswordRegex.test(values.password)) {
    errors.password = "The password must contain at least eight characters";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please enter the Confirm Password";
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "Password does not match";
  }

  return errors;
};
export const changePasswordValidator = (values) => {
  // console.log(values);
  let errors = {};
  if (!values.oldPassword) {
    errors.oldPassword = "Please enter the old Password";
  }
  if (!values.newPassword) {
    errors.newPassword = "Please enter the new Password";
  } else if (!NewpasswordRegex.test(values.newPassword)) {
    errors.newPassword = "The password must contain atleast eight characters";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please enter the Confirm Password";
  } else if (values.newPassword !== values.confirm_password) {
    errors.confirm_password = "Password does not match";
  }

  return errors;
};

export const signUPValidator = (values) => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Please enter the First Name";
  } else if (!onlyAlphbetRegex.test(values.firstName)) {
    errors.firstName =
      "First Name cannnot accept white space, numeric values and special character";
  } else if (values.firstName.length > 15) {
    errors.firstName = "First Name cannot exceed 15 characters";
  } else if (values.firstName) {
    if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?^0-9]*$/.test(values.firstName)) {
      errors.firstName = "No special character and numeric value allowed";
    }
  }

  if (!values.lastName) {
    errors.lastName = "Please enter the Last Name";
  } else if (
    /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?^0-9]*$/.test(values.lastName)
  ) {
    errors.lastName = "No special characters and numeric values allowed";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Last Name cannot exceed 15 characters";
  }

  // if (!values.mobileNumber) {
  //   errors.mobileNumber = "Enter the valid mobile number";
  // } else if (values.mobileNumber.length < 4) {
  //   errors.mobileNumber = "Your mobile should contain atleast 4 digits";
  // } else if (values.mobileNumber.length > 17) {
  //   errors.mobileNumber = "Your mobile should not greater than 16 digits ";
  // }

  if (values.email) {
    if (
      !/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        values.email
      )
    ) {
      errors.email = "Enter a valid email address";
    }
  } else {
    errors.email = "Please enter the Email";
  }

  if (!values.password) {
    errors.password = "Please enter the Password";
  } else if (!NewpasswordRegex.test(values.password)) {
    errors.password = "The password must contain at least eight characters ";
  }

  if (!values.confirm_password) {
    errors.confirm_password = "Please Re-enter the Password";
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "Password do not match";
  }
  if (!values.terms) {
    errors.terms = "Please Validate Terms & Privacy Polices.";
  } else if (values.terms === false) {
    errors.terms = "Please accept Terms & Conditions";
  }

  return errors;
};

export const associateFormValidator = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Please enter the Name";
  }

  if (values.name) {
    if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?^0-9]*$/.test(values.firstName)) {
      errors.name = "No special character and numeric value allowed";
    }
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Enter the valid mobile number";
  } else if (values.mobileNumber.length < 4) {
    errors.mobileNumber = "Your mobile should contain atleast 4 digits";
  } else if (values.mobileNumber.length > 17) {
    errors.mobileNumber = "Your mobile should not greater than 16 digits ";
  }

  if (values.email) {
    if (
      !/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        values.email
      )
    ) {
      errors.email = "Enter a valid email address";
    }
  } else {
    errors.email = "Please enter the Email";
  }

  if (!values.description) {
    errors.description = "Please enter the Description";
  }

  return errors;
};

export const businessPreferredValidator = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Please enter the Name";
  }
  if (!values.business_name) {
    errors.business_name = "Please enter the Business Name";
  }
  if (!values.industry_type) {
    errors.industry_type = "Please enter the Industry Type";
  }

  if (values.name) {
    if (/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?^0-9]*$/.test(values.firstName)) {
      errors.name = "No special character and numeric value allowed";
    }
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Enter the valid mobile number";
  } else if (values.mobileNumber.length < 4) {
    errors.mobileNumber = "Your mobile should contain atleast 4 digits";
  } else if (values.mobileNumber.length > 17) {
    errors.mobileNumber = "Your mobile should not greater than 16 digits ";
  }

  if (values.email) {
    if (
      !/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        values.email
      )
    ) {
      errors.email = "Enter a valid email address";
    }
  } else {
    errors.email = "Please enter the Email";
  }

  if (!values.description) {
    errors.description = "Please enter the Description";
  }
  if (!values.logo) {
    errors.logo = "Please Select Logo";
  }
  // if (!values.video) {
  //   errors.video = "Please Select Video";
  // }

  return errors;
};

export const UpdateProfileValidator = (values) => {
  // console.log(values);
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Please enter the First Name";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter the Last Name";
  }
  if (!values.mobileNumber) {
    errors.mobileNumber = "Enter the valid mobile number";
  } else if (values.mobileNumber.length < 4) {
    errors.mobileNumber = "Your mobile should contain atleast 4 digits";
  } else if (values.mobileNumber.length > 15) {
    errors.mobileNumber = "Your mobile should not greater than 14 digits ";
  }

  return errors;
};

export const bankDetailsValidator = (values) => {
  let errors = {};
  console.log(values);
  if (!values.account_holder_name) {
    errors.account_holder_name = "Enter account holder name";
  } else if (!onlyAlphbetRegex.test(values.account_holder_name)) {
    errors.account_holder_name = "Account name should only accept character";
  }
  if (!values.account_number) {
    errors.account_number = "Enter account number";
  } else if (values.account_number.length >= 20) {
    errors.account_number = "Incorrect Account Number";
  } else if (!phoneRegex.test(values.account_number)) {
    errors.account_number = "Incorrect Account Number";
  }
  if (!values.re_account_number) {
    errors.re_account_number = "Enter account holder name";
  } else if (values.account_number !== values.re_account_number) {
    errors.re_account_number = messages.accountMatch;
  }
  if (!values.re_account_number) {
    errors.re_account_number = "Enter re-account number";
  }
  if (!values.ifsc) {
    errors.ifsc = "Enter IFSC";
  }
  if (!values.bank_name) {
    errors.bank_name = "Enter bank name";
  }

  return errors;
};

export const SizeValidator = (values) => {
  let errors = {};
  if (!values.size) {
    errors.size = "Enter Size";
  }
  return errors;
};

export const menuValidator = (values) => {
  let errors = {};
  if (!values.menu_title) {
    errors.menu_title = "Enter Size";
  }
  return errors;
};

export const reasonDescValidatior = (values) => {
  let errors = {};
  if (!values.reasonDesc) {
    errors.reasonDesc = messages.invalid;
  }
  return errors;
};

export const dishValidator = (values) => {
  console.log(values);
  let errors = {};

  console.log(values.radioJump);

  if (values.radioJump.isMulti == true) {
    for (let i = 0; i < values.price_data.length; i++) {
      if (
        !values.price_data[i].serving_size ||
        !values.price_data[i].dish_price ||
        values.price_data.some((v, j) =>
          j === i ? false : v.serving_size === values.price_data[i].serving_size
        )
      ) {
        errors.price_data = errors.price_data || [];
        errors.price_data[i] = {};
      }

      if (!values.price_data[i].serving_size) {
        errors.price_data[i].serving_size = "Select serving size";
      } else if (
        values.price_data.some((v, j) =>
          j === i ? false : v.serving_size === values.price_data[i].serving_size
        )
      ) {
        errors.price_data[i].serving_size = "Cannot repeat the same size";
      }

      if (!values.price_data[i].dish_price) {
        errors.price_data[i].dish_price = "Enter dish price";
      }
    }
    // if (!values.price_data.dish_price) {
    //   errors.dish_price = "Enter dish price";
    // }
    if (!values.dish_name) {
      errors.dish_name = "Enter dish name";
    }
    // if (!values.search_keywords) {
    //   errors.search_keywords = "Enter keywords";
    // }
    // if (values.search_keywords.length < 1) {
    //   errors.search_keywords = messages.invalid;
    // }
    if (!values.minimum_preparation_time) {
      errors.minimum_preparation_time = "Enter minimum preparation time";
    }
    if (values.minimum_preparation_time.length > 3) {
      errors.minimum_preparation_time = "Please enter value less than 999";
    }
    if (!values.dish_type) {
      errors.dish_type = "Select dish type";
    }
    if (values.dish_type.length < 1) {
      errors.dish_type = messages.invalid;
    }
    if (!values.description) {
      errors.description = "Enter description";
    }
    if (!values.dish_images) {
      errors.dish_images = "Upload dish images";
    }
    if (values.dish_images.length < 1) {
      errors.dish_images = "Upload at least one dish image";
    }
    if (!values.cuisine_name) {
      errors.cuisine_name = "Select cuisine name";
    }
  }

  if (values.radioJump.isFixed == true) {
    if (!values.dish_name) {
      errors.dish_name = "Enter dish name";
    }
    // if (!values.search_keywords) {
    //   errors.search_keywords = "Enter keywords";
    // }
    // if (values.search_keywords.length < 1) {
    //   errors.search_keywords = messages.invalid;
    // }
    if (!values.minimum_preparation_time) {
      errors.minimum_preparation_time = "Enter minimum preparation time";
    }
    if (values.minimum_preparation_time.length > 3) {
      errors.minimum_preparation_time = "Please enter value less than 999";
    }
    if (!values.dish_type) {
      errors.dish_type = "Select dish type";
    }
    if (values.dish_type.length < 1) {
      errors.dish_type = messages.invalid;
    }
    if (!values.description) {
      errors.description = "Enter description";
    }
    if (!values.dish_images) {
      errors.dish_images = "Upload dish images";
    }
    if (values.dish_images.length < 1) {
      errors.dish_images = "Upload at least one dish image";
    }
    if (!values.cuisine_name) {
      errors.cuisine_name = "Select cuisine name";
    }
    if (!values.base_price) {
      errors.base_price = "Enter base price";
    }
  }

  console.log(errors);

  return errors;
};

export const restaurantDetailsValidator = (values) => {
  let errors = {};
  // console.log(values);
  if (!values.restaurant_images) {
    errors.restaurant_images = "Upload restaurant images";
  }
  if (values.restaurant_images.length < 1) {
    errors.restaurant_images = messages.imagesLength;
  }
  if (!values.restaurant_name) {
    errors.restaurant_name = "Enter restaurant name";
  }
  if (!values.mobile_number) {
    errors.mobile_number = "Enter mobile number";
  } else if (!phoneRegex.test(values.mobile_number)) {
    errors.mobile_number = messages.phone;
  } else if (values.mobile_number.length < 4) {
    errors.mobile_number = messages.phone;
  }
  if (!values.restaurant_location) {
    errors.restaurant_location = "Enter restaurant location";
  }
  if (!values.email) {
    errors.email = "Enter email";
  }
  if (!values.upload_first) {
    errors.upload_first = "Upload document";
  }
  if (values.upload_first.length < 1) {
    errors.upload_first = messages.imagesLength;
  }
  if (values.categories.length < 1) {
    errors.categories = "Select categories";
  }
  // if (!values.service_type) {
  //   errors.service_type = messages.invalid;
  // }

  if (!values.price_for_two) {
    errors.price_for_two = "Enter price for two";
  }
  if (!values.restaurant_radious) {
    errors.restaurant_radious = "Enter delivery distance";
  }
  if (!values.minimum_order) {
    errors.minimum_order = "Enter min order amount";
  }
  if (!values.start_time) {
    errors.start_time = "Select opening time";
  }
  if (!values.end_time) {
    errors.end_time = "Select closing time";
  } else if (values.start_time == values.end_time) {
    errors.end_time = "Opening and Closing time can't be same";
  }
  // if (values.service_type == 2 || values.service_type == 3) {
  //   if (!values.self_pickup_time) {
  //     errors.self_pickup_time = "Please select self pickup time";
  //   }
  // }
  // if (!values.upload_second) {
  //   errors.upload_second = messages.invalid;
  // }
  // if (values.upload_second.length < 1) {
  //   errors.upload_second = messages.imagesLength;
  // }
  // {
  //   values.working_hours.map((item, index) => {
  //     if (item.is_holyday == true ? (!item.start_time || !item.end_time) : "") {
  //       errors.working_hours = messages.selectStartEndTime;
  //     }
  //     if (!errors.working_hours) {
  //       if (item.is_holyday == true ? (item.start_time == item.end_time) : "") {
  //         errors.working_hours = messages.startEndTime;
  //       }
  //     }
  //     if (!errors.working_hours) {
  //       if (item.is_holyday == true ? (item.start_time >= item.end_time) : "") {
  //         errors.working_hours = "Start time should be greater than end time";
  //       }
  //     }
  //   })
  // }

  // console.log(errors);

  return errors;
};

export const passwordProfileValidator = (values) => {
  let errors = {};

  if (!values.oldPassword) {
    errors.oldPassword = "Enter current password";
  }
  if (!values.password) {
    errors.password = "Enter new password";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = messages.password;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Enter new confirm password ";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = messages.passwordMatch;
  }

  // console.log(errors);

  return errors;
};

export const offerValidator = (values) => {
  let errors = {};

  console.log(values);

  if (!values.offer_type) {
    errors.offer_type = "Select offer type";
  }
  if (!values.offer_name) {
    errors.offer_name = "Enter offer name";
  }

  if (!values.offer_code) {
    errors.offer_code = "Enter offer code";
  } else if (values.offer_code.length > 21) {
    errors.offer_code = "Promocode should contain max 20 characters";
  } else if (values.offer_code.length < 5) {
    errors.offer_code = "Promocode should contain min 5 characters";
  }

  if (!values.offer_validity.from) {
    errors.offer_validityfrom = "Select date from";
  }

  if (!values.offer_validity.to) {
    errors.offer_validityto = "Select date to";
  }

  if (!values.min_amount) {
    errors.min_amount = "Enter minimum amount";
  }

  if (!values.limit) {
    errors.limit = "Enter usage limit";
  }

  if (!values.discount_amount) {
    errors.discount_amount = "Enter discount amount";
  }
  if (!values.discount_type) {
    errors.discount_type = "Enter discount type";
  }

  if (values.discount_type.value == "2") {
    if (values.discount_amount > 99) {
      errors.discount_amount = "Discount can't be more than 99";
    }
  }
  // if(values.discount_type.value == "2" || values.max_amount > 0) {
  //   if (!values.max_amount) {
  //     errors.max_amount = "Enter maximum discount amount";
  //   }
  // }

  // console.log(errors);

  return errors;
};

export const promotionValidator = (values) => {
  let errors = {};

  // console.log(values);

  if (!values.offer_id) {
    errors.offer_id = "Enter offer ID";
  }
  if (!values.promotion_title) {
    errors.promotion_title = "Enter promotion title";
  }

  if (!values.banner_image) {
    errors.banner_image = "Upload banner image";
  }

  if (!values.charges_for_month) {
    errors.charges_for_month = "Enter charges for month";
  }

  if (!values.promotion_duration.start_date) {
    errors.promotion_durationstart_date = "Select start date";
  }

  if (!values.promotion_duration.end_date) {
    errors.promotion_durationend_date = "Select end date";
  }

  // console.log(errors);

  return errors;
};

export const handleContactValidator = (values) => {
  let errors = {};

  // console.log(values);

  if (!values.email) {
    errors.email = "Please enter the email";
  } else if (checkEmail(values.email)) {
    errors.email = "Please enter valid email format";
  }

  if (!values.name) {
    errors.name = "Please enter name";
  }

  if (!values.description) {
    errors.description = "Please enter description";
  }

  // console.log(errors);

  return errors;
};
export const newsletterValidator = (values) => {
  let errors = {};

  // console.log(values);

  if (!values.email) {
    errors.email = "Please enter the email";
  } else if (checkEmail(values.email)) {
    errors.email = "Please enter valid email";
  }
  // console.log(errors);

  return errors;
};

export const editProfileValidation = (values) => {
  let errors = {};

  // First Name validation
  if (!values.firstName) {
    errors.firstName = "Please enter the First Name";
  } else if (!onlyAlphbetRegex.test(values.firstName)) {
    errors.firstName =
      "First Name cannot accept white space, numeric values, and special characters";
  } else if (values.firstName.length > 15) {
    errors.firstName = "First Name cannot exceed 15 characters";
  } else if (
    /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?^0-9]*$/.test(values.firstName)
  ) {
    errors.firstName = "No special characters and numeric values allowed";
  }

  // Last Name validation
  if (!values.lastName) {
    errors.lastName = "Please enter the Last Name";
  } else if (
    /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?^0-9]*$/.test(values.lastName)
  ) {
    errors.lastName = "No special characters and numeric values allowed";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Last Name cannot exceed 15 characters";
  }

  return errors;
};

export const orderDeatilsvalidation = (values, isverify) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Please enter the Email";
  } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }
  {
    console.log(isverify);
  }
  if (isverify !== true) {
    if (!values.conf_email) {
      errors.conf_email = "Please enter the confirm Email";
    } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(values.conf_email)) {
      errors.conf_email = "Enter a valid email address";
    } else if (values.email !== values.conf_email) {
      errors.conf_email = "email do not match";
    }
  }

  if (!values.fullName) {
    errors.fullName = "Please enter your full name";
  } else if (!/^[A-Za-z\s'-]+$/.test(values.fullName)) {
    errors.fullName = "Enter Valid name";
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Please Enter mobile number";
  } else if (values.mobileNumber.length < 6) {
    errors.mobileNumber = "Your mobile should contain atleast 4 digits";
  } else if (values.mobileNumber.length > 17) {
    errors.mobileNumber = "Your mobile should not greater than 16 digits ";
  }

  if (!values.streetAddress) {
    errors.streetAddress = "Please enter the Address";
  }

  if (!values.apartment) {
    errors.apartment = "Please enter the Apartment name";
  }

  if (!values.zipCode) {
    errors.zipCode = "Please enter the Zip Code";
  }

  if (values.zipCode) {
    if (/^\d{5}(-\d{4})?$/.test(values.zipCode)) {
      errors.zipCode = "No special character and numeric value allowed";
    }
  }

  if (!values.city) {
    errors.city = "Please enter the city";
  }

  if (!values.state) {
    errors.state = "Please enter the state";
  }

  return errors;
};

export const contactusDeatilsvalidation = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Please enter the Email";
  } else if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
    errors.email = "Enter a valid email address";
  }

  if (!values.firstName) {
    errors.firstName = "Please enter your first name";
  } else if (!/^[A-Za-z\s'-]+$/.test(values.firstName)) {
    errors.firstName = "Enter Valid first name";
  }
  if (!values.lastName) {
    errors.lastName = "Please enter your last name";
  } else if (!/^[A-Za-z\s'-]+$/.test(values.lastName)) {
    errors.lastName = "Enter Valid last name";
  }

  if (!values.mobileNumber) {
    errors.mobileNumber = "Please Enter mobile number";
  } else if (values.mobileNumber.length < 6) {
    errors.mobileNumber = "Your mobile should contain atleast 4 digits";
  } else if (values.mobileNumber.length > 17) {
    errors.mobileNumber = "Your mobile should not greater than 16 digits ";
  }

  if (!values.comments) {
    errors.comments = "Please Write a comment";
  }

  return errors;
};
