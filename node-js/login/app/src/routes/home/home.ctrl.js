'use strict';

const User = require('../../models/User');
const logger = require('../../config/logger');

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "move to Home"`);
    res.render('home/index');
  },

  login: (req, res) => {
    logger.info(`GET /login 304 "move to Login"`);
    res.render('home/login');
  },

  register: (req, res) => {
    logger.info(`GET /register 304 "move to Register"`);
    res.render('home/register');
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: 'POST',
      path: '/login',
      status: response.err ? 400 : 200,
    };

    log(response, url);

    return res.status(url.status).json(response);
  },

  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: 'POST',
      path: '/register',
      status: response.err ? 409 : 201,
    };

    log(response, url);

    return res.status(url.status).json(response);
  },
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (logger.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
    );
    console.log(response.err);
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${
        response.msg || ''
      }`
    );
  }
};
