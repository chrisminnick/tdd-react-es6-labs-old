import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import SayHello from '../src/scripts/SayHello.js';

describe('Greet', function() {
    it('renders without problems', function () {
        var sayhello = TestUtils.renderIntoDocument(<SayHello />);
        expect(sayhello).toEqual(jasmine.anything());
    });
});
