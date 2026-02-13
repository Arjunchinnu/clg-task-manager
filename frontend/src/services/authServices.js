import axios from "axios";

export const authlogin = async (loginData) => {
  const res = await axios.post("http://localhost:5000/auth/login", loginData);
  console.log("login API response:", res.data);
  return res.data;
};

export const authSignup = async (signupData) => {
  const res = await axios.post(
    "http://localhost:5000/auth/register",
    signupData,
  );
  console.log("register API response:", res.data);
  return res.data;
};
