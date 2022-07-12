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

const userDetails = async (req, res) => {
  try {
    const title = 'User details';
    const header = 'User details';
    const id = req.params.id;
    const user = await User.findOne({where: {id}})
    const bio = await Biodatum.findOne({where: {UserId: id}})
    res.render('./admin/userDetail', {title, header, user, bio})
  } catch (error) {
    res.send(error)    
  }
}


module.exports = {
  userList,
  userDetails
}