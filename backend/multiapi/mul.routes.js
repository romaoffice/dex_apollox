
const controller = require("./multiapi");
module.exports = function(app) {
  app.post("/api/multi/route",controller.getRoute);
  app.post("/api/multi/checkStatus",controller.checkStatus);
  app.post("/api/multi/getTransaction",controller.getTransaction);
};