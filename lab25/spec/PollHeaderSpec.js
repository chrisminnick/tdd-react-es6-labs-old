import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import PollHeader from '../src/components/PollHeader';

describe('Poll Header', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(<PollHeader text = "test text" />);

    });

    it('renders without problems', function () {
        expect(component).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'h1').textContent;
        var expected = 'test text';
        expect(actual).toEqual(expected);
    });

    it('gets a "text" prop', function() {

        expect(component.props.text).toBeDefined();
        expect(component.props.text).toBe('test text');

    });
});