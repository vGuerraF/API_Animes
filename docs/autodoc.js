const swaggerAutogen = require ("swagger-autogen");
swaggerAutogen();

const outputFile = "./swagger_output.json";
const endpointFiles = ["./routes/animes.routes.js"];

swaggerAutogen(outputFile, endpointFiles);