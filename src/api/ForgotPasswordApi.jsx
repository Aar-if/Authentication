import axios from "axios";
import { forgotURL } from "../routes/links";

const ForgotPasswordApi = async (data) => {
  console.log("Before AXIOS ");
  console.log(data);
  let result = false;
  await axios({
    method: "POST",
    url: forgotURL,
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

export default ForgotPasswordApi;
