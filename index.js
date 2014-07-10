var Sequelize = require('sequelize'), 
    co = require('co'),
    sequelize = new Sequelize('sequelize', 'sequelize', 'sequelize');
 
var User = sequelize.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
})
 
// sequelize.sync().success(function() {
//  User.find(1).success(function(user) {
//   console.log(user.values);
// })
// })

co(function *() {
  yield sequelize.sync();
  var user = yield User.find(1);
  console.log(user.values);
})();