import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollQuestion from '../src/components/PollQuestion';

describe('Poll Question', function(){
    it('renders without problems', function() {
        var pollquestion = TestUtils.renderIntoDocument(<PollQuestion />);
        expect(pollquestion).toEqual(jasmine.anything());
    });
});