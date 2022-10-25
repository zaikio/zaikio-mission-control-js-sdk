const { ApiClient } = require("./lib/ApiClient");
const { ProductionApi } = require("./lib/api/ProductionApi");

const accessToken = process.env.AUTH_TOKEN;

ApiClient.instance.basePath = 'https://mc.sandbox.zaikio.com/api/v1';
ApiClient.instance.authentications.bearerAuth = { type: "oauth2", accessToken };

function run() {
  console.log("running")
  const productionApi = new ProductionApi();
  productionApi.executionsGet(undefined, (err, data) => {
    console.log("callback");
    if (err != null) { console.error(err) };
    console.log(data);
  });
}

run()
