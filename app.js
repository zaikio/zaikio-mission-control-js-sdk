const { ApiClient } = require("./lib/ApiClient");
const { ProductionApi } = require("./lib/api/ProductionApi");

const accessToken = process.env.AUTH_TOKEN;

ApiClient.instance.basePath = 'https://mc.sandbox.zaikio.com/api/v1';
ApiClient.instance.authentications.bearerAuth = { type: "oauth2", accessToken };

function run() {
  const productionApi = new ProductionApi();
  
  productionApi.executionsGet(undefined, (err, data) => {
    if (err != null) { 
      console.log("ERROR");
      console.error(err);
      
      process.exit(0);
    };
    
    console.log(data);
  });
}

run();
