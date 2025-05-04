import axios from "@/lib/axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      "/auth/login",
      { email, password },
      { headers: { "Accept-Language": "id" } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post("/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
