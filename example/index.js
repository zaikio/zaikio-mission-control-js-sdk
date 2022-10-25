const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(
  express.urlencoded({
    extended: true
  })
);
const port = 3000;

const MissionControl = require("../lib");
const defaultClient = MissionControl.ApiClient.instance;

defaultClient.basePath = "https://mc.sandbox.zaikio.com/api/v1";
defaultClient.authentications.bearerAuth = {
  type: "oauth2",
  accessToken: process.env.ACCESS_TOKEN,
};

const commercialApi = new MissionControl.CommercialApi(defaultClient);
const specificationApi = new MissionControl.SpecificationApi(defaultClient);

app.get('/', (_req, res) => {
  res.render('home', { title: 'Search for an Order' });
});

app.post('/orders', async (req, res) => {
  const order = await commercialApi.ordersOrderIdGet(req.body.id);
  const jobs = await Promise.all(order.lineItems.filter(item => !!item.jobId).map(item =>
    specificationApi.jobsJobIdGet(item.jobId)))

  order.lineItems.forEach(item => {
    item.job = jobs.find(job => item.jobId == job.id)
  });

  res.render('details', { title: `Order details`, order });
});

app.listen(port, () => {
  console.log(`Mission Control Example listening on port ${port}`);
});
