import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@abc.com",
    password: bcrypt.hashSync("admin"),
    isAdmin: true,
  },
  {
    name: "Balaji",
    email: "balaji@abc.com",
    password: bcrypt.hashSync("balaji"),
  },
  {
    name: "User",
    email: "user@abc.com",
    password: bcrypt.hashSync("user"),
  },
];

export default users;
