
console.log('karma index')
var context = require.context('.', true, /.+\.mocha\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;

