import mysql from "mysql2";
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejs",
  password: "",
});
try {
  var connection = pool.promise();
  console.log("Kết nối thành công");
} catch (error) {
  console.log(error);
}
export default connection;
