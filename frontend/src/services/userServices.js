// src/services/userServices.js
import axios from "axios";

const API_URL = "http://localhost:5000/users";

// export const fetchUsers = async () => {
//   try {
//     const res = await axios.get(API_URL);
//     return res.data; // assuming backend sends array
//   } catch (error) {
//     console.error("Error fetching users:", error.message);
//     throw error;
//   }
// };

export const fetchUsers = async () => {
  const res = await axios.get("http://localhost:5000/users");
  console.log("Users API response:", res.data);
  return res.data;
};
