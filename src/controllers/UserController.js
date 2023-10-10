import * as userModel from "../services/userModel";

const listuser = async (req, res) => {
  const users = await userModel.listuser();
  console.log(users);
  res.render("listuser", { users: users });
};

const newuser = (req, res) => {
  return res.render("newUser"), { data: { title: "newuser", page: "main" } };
};

const createuser = async (req, res) => {
  const { username, password, fullname, address, sex, mail, Groupid } =
    req.body;
  await userModel.insertUser(
    username,
    password,
    fullname,
    address,
    sex,
    mail,
    Groupid
  );
  res.redirect("/list-user");
};
export { newuser, createuser, listuser };
