import axios from "axios";
import { toast } from "@/utils/alert";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, // 15 seconds timeout
});

// Add response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Return successful response data directly
    return response.data;
  },
  (error) => {
    // Handle error responses
    const { response } = error;

    if (response) {
      // Server responded with a status code outside of 2xx range
      switch (response.status) {
        case 400:
          toast.error("Bad request. Please check your input.");
          break;
        case 401:
          toast.error("Unauthorized. Please login again.");
          // Here you could also redirect to login page
          // window.location.href = '/login';
          break;
        case 403:
          toast.error(
            "Forbidden. You don't have permission to access this resource."
          );
          break;
        case 404:
          toast.error("Resource not found.");
          break;
        case 500:
          toast.error("Internal server error. Please try again later.");
          break;
        default:
          toast.error(
            `Error: ${response.data.message || "Something went wrong"}`
          );
      }
    } else if (error.request) {
      // Request was made but no response received
      toast.error("No response from server. Please check your connection.");
    } else {
      // Something happened in setting up the request
      toast.error("Request configuration error.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
