// src/services/tasksServices.js
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

// Get all tasks
export const fetchTasks = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data; // make sure backend sends array directly
  } catch (error) {
    console.error("Error fetching tasks:", error.message);
    throw error;
  }
};

// Create task
export const createTask = async (taskData) => {
  try {
    const res = await axios.post(API_URL, taskData);
    console.log("created one", res);
    return res.data;
  } catch (error) {
    console.error("Error creating task:", error.message, error);
    throw error;
  }
};

// Delete task
export const deleteTask = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting task:", error.message);
    throw error;
  }
};

// Get single task
export const getTaskById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error getting task:", error.message);
    throw error;
  }
};

// Update task
export const updateTask = async (id, updatedData) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, updatedData);
    return res.data;
  } catch (error) {
    console.error("Error updating task:", error.message);
    throw error;
  }
};
