const bcrypt = require('bcrypt');
const joi = require('joi');
const saltRound = 10;
/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    try {
      const schema = joi.object().keys({
        email: joi.string().required().email(),
        password: joi.string().required(),
      });
      const {email, password} = await joi.validate(req.allParams(), schema);
      const hashedPassword = await bcrypt.hash(password, saltRound);
      const user = await User.create({
        email,
        password: hashedPassword
      }).fetch();
      return res.ok(user);
    } catch (err) {
      if (err.name === 'ValidationError') {
        return res.badRequest({err}).json();
      }
      return res.serverError({err}).json();
    }
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {
    return res.json({
      todo: 'login() is not implemented yet! PLATZI'
    });
  }

};

