var context = require.context('.', true, /Spec\.js$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);