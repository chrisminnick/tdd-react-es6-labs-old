import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import PollAnswer from '../src/components/PollAnswer';

describe('Poll Answer', function() {
    var component;
    beforeEach(function(){
        component = TestUtils.renderIntoDocument(<PollAnswer text = "test answer" />);
    });

    it('renders without problems', function () {
        var pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollanswer).toEqual(jasmine.anything());
    });

    it('prints a message', function() {
        var actual = TestUtils.findRenderedDOMComponentWithTag(component,'span').textContent;
        var expected = 'test answer';
        expect(actual).toEqual(expected);
    });

});