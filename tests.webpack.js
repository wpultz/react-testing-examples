var context = require.context('./app/js/test', true, /.spec\.js$/);
context.keys().forEach(context);
