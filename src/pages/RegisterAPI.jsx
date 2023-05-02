import axios from "axios";

const registerApi = async (data) => {
  console.log("Before AXIOS ");
  console.log(data);
  let result = false;
  await axios({
    method: "POST",
    url: "http://localhost:3000/register",
    data: data,
  })
    .then((res) => {
      console.log(res);
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

export default registerApi;
