import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import RadioButton from '../src/components/RadioButton';

describe('Radio Button', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(<RadioButton label = "test answer" />);
    });

    it('renders without problems', function () {
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'span').textContent;
        var expected = 'test answer';
        expect(actual).toEqual(expected);
    });

});