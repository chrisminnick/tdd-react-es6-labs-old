import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollContainer from '../src/containers/PollContainer';

describe('Poll Container', function() {
    it('renders without problems', function () {
        var pollcontainer = TestUtils.renderIntoDocument(<PollContainer />);
        expect(pollcontainer).toEqual(jasmine.anything());
    });
});