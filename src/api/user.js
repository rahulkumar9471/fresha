import client from "./client";

export const signup = async (userInfo) => {
  try {
    const { data } = await client.post("/user/signup", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};

export const verifyUserEmail = async (userInfo) => {
  try {
    const { data } = await client.post("/user/verify-email", userInfo);
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};

export const signin = async (userInfo) => {
  try {
    const { data } = await client.post("/user/signin", userInfo, {
      withCredentials: true,
      credentials: "include",
    });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};

export const getIsUser = async (token) => {
  try {
    const { data } = await client.get("/user/isUser", {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });
    return data;
  } catch (error) {
    const { response } = error;
    if (response?.data) return response.data;

    return { error: error.message || error };
  }
};
