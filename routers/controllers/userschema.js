const User = require("./../../DB/models/userSchema");

const register = (req, res) => {
  const { username, email, password } = req.body;

  const newuser = new User({
    username: username,
    email: email,
    password: password,
  });

  newuser
    .save()
    .then((newuser) => {
      res.json({ message: "User Added Successfully" });
    })
    .catch((err) => {
      res.send(err);
    });
};
////////login
const login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    $and: [{ email: email }, { password: password }],
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

const Savedcourses = (req, res) => {
  const { email, _id } = req.params;
  User.findOneAndUpdate(
    { email: email },
    { $push: { SavedSchema: _id } },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const unsavedcourses = (req, res) => {
  const { email, _id } = req.params;
  User.findOneAndUpdate(
    { email: email },
    { $pull: { SavedSchema: _id } },
    { new: true }
  )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const savedcoursescheck = (req, res) => {
  const { email, ObjectId } = req.params;
  User.findOne({ ObjectId: req.params.ObjectId }).then((User) => {
    User.findOneAndUpdate(
      { email: email },
      { $push: { SavedSchema: ObjectId } },
      { new: true }
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};

const getSaved = (req, res) => {
  const { email } = req.params;
  User.find({ email: email })
    .populate("SavedSchema")
    .exec()
    .then((result) => {
      res.send(result[0].SavedSchema);
    })

    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  register,
  login,
  getallusers,
  userupdate,
  userdelete,
  Savedcourses,
  unsavedcourses,
  getSaved,
  savedcoursescheck,
};
