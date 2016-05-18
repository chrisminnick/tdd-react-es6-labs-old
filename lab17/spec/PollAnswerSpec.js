import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import PollAnswer from '../src/components/PollAnswer';

describe('Poll Answer', function() {
    it('renders without problems', function () {
        var pollanswer = TestUtils.renderIntoDocument(<PollAnswer />);
        expect(pollanswer).toEqual(jasmine.anything());
    });
});