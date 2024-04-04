import axiosSecure from ".";

//save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

//get token from server
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);
  return data;
};
