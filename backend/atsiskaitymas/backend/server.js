const app = require("./app");
require("dotenv").config();
const { sql, testConnection } = require("./dbConnection");

const port = process.env.PORT;

(async () => {
  try {
    await testConnection();
    app.listen(port, () => {
      console.log("Server is ready and listening on port " + port);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();

process.on("SIGINT", async () => {
  console.log("Closing database connection");
  await sql.end();
  process.exit(0);
});
