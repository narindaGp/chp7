const { User, Biodatum } = require('../models');

const getHome = async (req, res, next) => {
  const user = {
    id: ""
  }
  const player = ""
  res.render('index', { title: 'Express', user, player });
};

const getLogin = async (req, res, next) => {
  const user = {
    id: ""
  }
  const player = ""
  res.render('login', { title: 'Express' });
};

const getRegister = async (req, res) => {
  res.render('register', { title: 'Register' });
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUser = await User.findOne({
      where: { username, password }
    })
    if (!isUser) {
      res.status(404).send({ messages: { message: 'User not found' } });
    }

    res.status(200).send({ messages: { 
      message: 'OK',
      user: isUser 
    }});
  } catch (error) {
    res.status(500).send({ messages: { message: error.message } });
  }
};

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const role = 'user'
    const userData = { username, password, role, email };
    
    const newUser = await User.create(userData)

    const { firstname, lastname, gender, place, dateOfBirth } = req.body;
    const UserId = newUser.id;
    const userBio = { UserId, firstname, lastname, gender, place, dateOfBirth };

    const newUserBio = await Biodatum.create(userBio)
    if (!newUser || !newUserBio) {
      res.status(404).send({ messages: { message: 'User register failed' } });
    };

    res.status(200).send({ messages: { message: 'OK' } });
  } catch (error) {
    res.status(500).json({ messages: { message: error } });
  }
};

module.exports = {
  getHome,
  getRegister,
  getLogin,
  login,
  register
}