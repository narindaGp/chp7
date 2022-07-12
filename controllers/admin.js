const { User, Biodatum } = require('../models');

const userList = async (req, res, next) => {
  try {
    const users = await User.findAll()
    const title = 'User list'
    res.render('./admin/userList', {users, title});
  } catch (error) {
    res.send(error);
  }
}


module.exports = {
  userList
}