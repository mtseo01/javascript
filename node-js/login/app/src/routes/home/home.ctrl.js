'use strict';

const User = require('../../models/User');
const logger = require('../../config/logger');

const output = {
  home: (req, res) => {
    logger.info(`GET / 200 "move to Home"`);
    res.render('home/index');
  },

  login: (req, res) => {
    logger.info(`GET /login 200 "move to Login"`);
    res.render('home/login');
  },

  register: (req, res) => {
    logger.info(`GET /register 200 "move to Register"`);
    res.render('home/register');
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    if (logger.err) {
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, ${response.err}`
      );
      console.log(response.err);
    } else {
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}`
      );
    }

    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    if (logger.err) {
      logger.error(
        `POST /register 200 Response: "success: ${response.success}, ${response.err}`
      );
    } else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}`
      );
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
