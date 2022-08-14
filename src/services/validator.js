const validator = (data) => {
  const errors = {};

  if (!data.firstName) {
    errors.firstName = "Please enter your name";
  } else {
    delete errors.firstName;
  }

  if (!data.lastName) {
    errors.lastName = "Please enter your last name";
  } else {
    delete errors.lastName;
  }

  if (!data.email) {
    errors.email = "Please enter your email";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email)) {
    errors.email = "Your email Address expression is incorrect";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Please enter your password";
  } else if (data.password.length < 6) {
    errors.password = "Your password must be higher than 6 charracters";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Your password charracters does not match";
  } else {
    delete errors.confirmPassword;
  }

  if (!data.privacyChecked) {
    errors.privacyChecked = "You must Accepct our policy and Terms";
  } else {
    delete errors.privacyChecked;
  }

  return errors;
};

export { validator };
