const User = require("./../../DB/models/userSchema");

const register = (req, res) => {
  const { name, username, email, phone, password, city } = req.body;

  const newuser = new User({
    name: name,
    username: username,
    email: email,
    phone: phone,
    password: password,
    city: city,
  });

  newuser.save()
    .then((newuser) => {
      res.json({ message: "User Added Successfully" });
    })
    .catch((err) => {
      res.send(err);
    });
};
////////login
const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    $or: [{ email: username }, { phone: username }, { password: password }],
  })
    .then((User) => {
      res.json(User);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getallusers = (req, res) => {
  User.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
  ///////////////update user information
};
const userupdate = (req, res) => {
  const username = req.body.username;
  const userupdate = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    city: req.body.city,
  };

  User.findByIdAndUpdate(username, { $set: userupdate })
    .then((User) => {
      res.json({ message: "User information has been update" });
    })
    .catch((err) => {
      res.send(err);
    });
};

const userdelete = (req, res) => {
  const username = req.body.username;

  User.findOneAndRemove(username)
    .then(() => {
      res.json({ message: "User is deleted" });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { register, login, getallusers, userupdate, userdelete };
