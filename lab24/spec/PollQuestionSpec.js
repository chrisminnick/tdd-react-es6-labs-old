import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import PollQuestion from '../src/components/PollQuestion';

describe('Poll Question', function(){
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(<PollQuestion text = "test question" />);
    });

    it('renders without problems', function() {
        var pollquestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect(pollquestion).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'h2').textContent;
        var expected = 'test question';
        expect(actual).toEqual(expected);
    });
});