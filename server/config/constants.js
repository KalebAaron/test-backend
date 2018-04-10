const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  post: {
    name: 'Post',
    endpoint: 'post'
  },
  user: {
    name: 'User',
    endpoint: 'user',
    preventDefaultApi: true,
    useCustomRoutes: true
  },
  collection: {
    name: 'Collection',
    endpoint: 'collection',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}