jest.dontMock('../PollSubmitButton');

describe('Poll Submit Button', function() {

    it('renders without a problem', function () {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var ReactTestUtils = require('react-addons-test-utils');
        var PollSubmitButton = require('../PollSubmitButton');

        //note: it's necessary to wrap the element in another element in order to do the findDomNode
        var pollsubmitbutton = ReactTestUtils.renderIntoDocument(<div><PollSubmitButton question={0} /></div>);
        var buttonText = ReactDOM.findDOMNode(pollsubmitbutton).textContent;
        expect(buttonText).toEqual('Go!');
    });

    it('calls handler function on click', function () {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var ReactTestUtils = require('react-addons-test-utils');
        var PollSubmitButton = require('../PollSubmitButton');

        var handleClick = jest.genMockFunction();

        var pollsubmitbutton = ReactTestUtils
            .renderIntoDocument(<PollSubmitButton question={0} handleClick={handleClick}/>);

        var buttonInstance = ReactDOM.findDOMNode(pollsubmitbutton);


        ReactTestUtils.Simulate.click(buttonInstance);

        expect(handleClick).toBeCalled();

        var numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

        expect(numberOfCallsMadeIntoMockFunction).toBe(1);
    });

});
