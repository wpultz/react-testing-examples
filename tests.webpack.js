var context = require.context('./src/js/test', true, /.spec\.js$/);
context.keys().forEach(context);
