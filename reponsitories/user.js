import axios from "axios";
const getUserDetail = async () => {
  try {
    let response = await axios.get("https://randomuser.me/api/");
    if (response.status != 200) {
      throw "Failed request";
    }
    if (response.data.results.length > 0) {
      let responseUser = response.data.results[0];
      let user = {};
      user.name =
        `${responseUser.name.title} ${responseUser.name.first} ${responseUser.name.last}` ??
        "";
      user.email = responseUser.email ?? "";
      user.gender = responseUser.gender ?? "";
      user.phone = responseUser.phone ?? "";
      user.address =
        `${responseUser.location.street.number}, ${responseUser.location.street.name}, ${responseUser.location.country}` ??
        "";
      user.url = responseUser.picture.large ?? "";
      return user;
    }
    throw "User not found";
  } catch (error) {
    throw error;
  }
};

const login = ({ email, password }) => {};

export default { getUserDetail, login };
