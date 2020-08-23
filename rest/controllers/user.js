const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");

module.exports = {
  get: (req, res, next) => {
    const id = req.params.id;

    // Get all users
    if (id === "all") {
      models.User.find({})
        .then((user) => {
          res.send(user);
        })
        .catch(next);
    } else {
      models.User.findOne({ _id: id })
        .then((user) => {
          res.send(user);
        })
        .catch(next);
    }
  },

  post: {
    register: (req, res, next) => {
      const { name, email, password, phone, isAdmin } = req.body;
      models.User.create({ name, email, password, phone, isAdmin })
        .then((createdUser) => res.send(createdUser))
        .catch(next);
    },

    login: (req, res, next) => {
      const { email, password } = req.body;
      models.User.findOne({ email })
        .then((user) =>
          !!user
            ? Promise.all([user, user.matchPassword(password)])
            : [null, false]
        )
        .then(([user, match]) => {
          if (!match) {
            res.status(401).send("Invalid email or password");
            return;
          }

          const token = utils.jwt.createToken({ id: user._id });
          res.cookie(config.authCookieName, token).send(user);
        })
        .catch(next);
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      console.log("-".repeat(100));
      console.log(token);
      console.log("-".repeat(100));
      models.TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).send("Logout successfully!");
        })
        .catch(next);
    },
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { name, email, password, phone } = req.body;

    models.User.findByIdAndUpdate(
      id,
      { name, email, password, phone },
      { new: true }
    )
      .then((updatedUser) => {
        res.send({
          name: updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone,
        });
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })
      .then((removedUser) => res.send(removedUser))
      .catch(next);
  },
};
