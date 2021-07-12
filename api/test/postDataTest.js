const assert = require("chai").expect;
const tv4 = require("tv4");
const { expect } = require("chai");
const post = require("../page/jsonPost.js");
const dataSchema = require("../schema/dataSchema.json");
const reqBody = require("../data/postData.json");


function delay(interval) {
    return it("should delay", (done) => {
      setTimeout(() => done(), interval);
    }).timeout(interval + 100); // The extra 100ms should guarantee the test will not fail due to exceeded timeout
  };

  const postData = async () => {
    try {
      const res = await post.postApi(reqBody);
      const data = await res.body;
    //   const dataLogin1 = await resLogin1.body;
      // console.log("masuk sini",data)
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  
  const getData = async () => {
    try {
      const ress = await post.getApi();
      const datas = await ress.body;
    //   const d = await resLogin1.body;
      // console.log("masuk sini",datas)
      return datas;
    } catch (err) {
      console.log(err);
    }
  };

  // const data = post.getApi().then(data => console.log(data.body));

  describe(`Get Data Request`, () => {
    before(async () => {
      try {
        this.data = await getData();
        // console.log("masuk jugaaa",this.data);
      } catch (err) {
        console.error(err);
      }
    });
    it("Schema is valid", async () => {
      expect(tv4.validate(this.data, dataSchema)).to.be.true;
      delay;
    });
 
  });

  describe(`Post Data Request`, () => {
    before(async () => {
      try {
        this.data = await postData();
        // console.log("masuk jugaaa",this.data);
      } catch (err) {
        console.error(err);
      }
    });
    it("Compare Data with Request Data", async () => {
      // expect(tv4.validate(this.data, dataSchema)).to.be.true;
      console.log("request data", reqBody)
      console.log("response data", this.data.reqBody)
      expect(tv4.validate(this.data.reqBody.title, reqBody.title)).to.be.true;
      expect(tv4.validate(this.data.reqBody.body, reqBody.body)).to.be.true;
      expect(tv4.validate(this.data.reqBody.userId, reqBody.userId)).to.be.true;
      // delay;
    });
 
  });
  