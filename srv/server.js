const cds = require("@sap/cds");
//const proxy = require("@sap/cds-odata-v2-adapter-proxy");
//const cors = require("cors");

//cds.on("bootstrap", app => app.use(proxy()));
//cds.on("bootstrap", app => app.use(cors({ origin: 'null' })));

const spacexRouter = require('./external/spacexRouter');
cds.on("bootstrap", app => app.use('/spacex', spacexRouter));

module.exports = cds.server;
