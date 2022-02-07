if(process.env.NODE_ENV !== "production") require("dotenv").config();
const startServer = require("./src/app");
const PORT = process.env.PORT || 5000;
startServer(PORT);