const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  message: {
    name: 'Post',
    endpoint: 'post'
  },
  user: {
    name: 'User',
    endpoint: 'user',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}