import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import PollHeader from '../src/components/PollHeader';

describe('Poll Header', function() {
    it('renders without problems', function () {
        var pollheader = TestUtils.renderIntoDocument(<PollHeader />);
        expect(pollheader).toEqual(jasmine.anything());
    });
});