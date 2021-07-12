const supertest = require("supertest");
const env = require("dotenv").config();


const apiPost = supertest(process.env.postUrl);
const apiGet = supertest(process.env.getData);

const getApi = () =>
  apiGet
    .get("")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
    // .then((res) => {
    //   console.log("masuk sini",res.text)
    //   // const body =  JSON.stringify(res.body)
    //   // return body;
      
    // });

    // const data = getApi().then(data => console.log(data.body));

const postApi = (reqBody) =>
  apiPost
    .post("")
    .set("Content-Type", "application/json")
    .send({reqBody
  
  });

  
// console.log("test",postApi)

    module.exports = {
        postApi,
        getApi,
      };