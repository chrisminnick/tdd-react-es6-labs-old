'use strict';

var sayHello = require('../src/scripts/sayHello.js');

describe('Greet', function() {

    it('concats Hello and a name', function() {
        var actual = sayHello.greet('World');
        var expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    it('says "Hello, Friend!" when no name is given', function() {
        var actual = sayHello.greet();
        var expected = 'Hello, Friend!';
        expect(actual).toEqual(expected);
    });
});
