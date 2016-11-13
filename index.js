const npmCheck = require('npm-check')

npmCheck()
  .then(currentState => console.log(currentState.get('packages')))
