'use strict';

const output = {
  home: (req, res) => {
    res.render('home/index');
  },

  login: (req, res) => {
    res.render('home/login');
  },
};

const users = {
  id: ['mt', 'kim', 'seo'],
  password: ['123', '333', 'mt'],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const password = req.body.password;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.password[idx] === password) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: 'fail to login.',
    });
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
