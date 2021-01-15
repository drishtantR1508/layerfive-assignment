import { API } from "../../Backend";

export const getUsers = () => {
  return fetch(`${API}user`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
export default getUsers;
