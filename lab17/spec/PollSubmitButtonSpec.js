import React from 'react';
import TestUtils from 'react-addons-test-utils';
import PollSubmitButton from '../src/components/PollSubmitButton';

describe('Poll Submit Button', function() {
    it('renders without problems', function () {
        var pollsubmitbutton = TestUtils.renderIntoDocument(<PollSubmitButton />);
        expect(pollsubmitbutton).toEqual(jasmine.anything());
    });
});