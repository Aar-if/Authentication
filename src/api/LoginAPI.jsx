import axios from "axios";
import { loginURL } from "../routes/links";

const loginApi = async (data) => {
  console.log("Before AXIOS ");
  console.log(data);
  let result = false;
  await axios({
    method: "POST",
    url: loginURL,
    data: data,
  })
    .then((res) => {
      console.log("HELLO");
      console.log(res.data);

      if (res.status === 200) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch(function (error) {
      console.log(error.response.data.error);
      let err = 0;
      return err;
    });

  return result;
};

export default loginApi;
