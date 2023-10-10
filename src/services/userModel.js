import connection from "../configs/db";
const insertUser = async (
  username,
  password,
  fullname,
  address,
  sex,
  mail,
  Groupid
) => {
  await connection.execute("insert into users value(?,?,?,?,?,?,?)", [
    username,
    password,
    fullname,
    address,
    sex,
    mail,
    Groupid,
  ]);
};

const listuser = async () => {
  const users = await connection.execute("Select * from users");
  return users[0];
};

export { insertUser, listuser };
