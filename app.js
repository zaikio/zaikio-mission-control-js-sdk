var MissionControl = require("./lib");
var defaultClient = MissionControl.ApiClient.instance;

defaultClient.basePath = "https://mc.sandbox.zaikio.com/api/v1";
defaultClient.authentications.bearerAuth = {
  type: "oauth2",
  accessToken: process.env.ACCESS_TOKEN,
};

var api = new MissionControl.BusinessApi();
var estimateId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // {String}

api
  .estimatesEstimateIdGet(estimateId)
  .then((data) => {
    console.log("API called successfully");
    console.log(data);
  })
  .catch((err) => console.error(err));
