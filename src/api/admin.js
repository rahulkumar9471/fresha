import client from "./client";

export const adminPersonalInfoUpdate = async (personalInfo) => {
  try {
    const { data } = await client.post("/admin/admin-profile/:userId", personalInfo, {
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
