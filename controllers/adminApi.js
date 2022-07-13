const { User, Biodatum } = require('../models');

const userList = async (req, res, next) => {
  try {
    const users = await User.findAll({ include: Biodatum})
    res.json(users)
  } catch (error) {
    res.send(error);
  }
}

const userDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({where: {id}})
    const bio = await Biodatum.findOne({where: {UserId: id}})
    
    res.json({ user, bio })
  } catch (error) {
    res.send(error)    
  }
}

const userEdits = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, password, email, role } = req.body;
    const newUserData = { username, password, email, role };
    const user = await User.update(newUserData, {where: {id}})

    const { firstname, lastname, gender, place, dateOfBirth } = req.body;
    const newUserBio = { firstname, lastname, gender, place, dateOfBirth };
    const bio = await Biodatum.update(newUserBio, {where: {UserId: id}})
    
    res.json({ user, bio})
  } catch (error) {
    res.send(error)
  }
}

const userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.destroy({where: {id}})
    res.json({ message: 'User deleted', deletedUser})
  } catch (error) {
    res.send(error)
  }
}


module.exports = {
  userList,
  userDetails,
  userEdits,
  userDelete
}