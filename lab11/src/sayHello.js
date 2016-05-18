'use strict';

exports.greet = function greet(name) {
    name = name ? name : 'Friend!';
    return 'Hello, ' + name;
};