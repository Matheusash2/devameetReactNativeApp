const validateName = (name: string): boolean => {
  return name.length > 2 || !name;
};

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) || !email;
};

const validatePassword = (password: string): boolean => {
  const regex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?!.*\s).{4,12}$/;
  return regex.test(password) || !password;
};

const validateConfirmPassword = (
  password: string,
  confirmPassword: string,
): boolean => {
  return password == confirmPassword || !confirmPassword;
};

const formIsComplete = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
): boolean => {
  return name != '' && email != '' && password != '' && confirmPassword != '';
};

export {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  formIsComplete,
};
