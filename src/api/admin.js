import client from "./client";

export const adminSignIn = async (adminInfo) => {
  try {
    const { data } = await client.post("/admin/signin", adminInfo, {
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
