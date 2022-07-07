const users = require('./data/userBio.json')
users.data.map(user => {
  user.createdAt = new Date(),
  user.updatedAt = new Date()
})

console.log(users.data)