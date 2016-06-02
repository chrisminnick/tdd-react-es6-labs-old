export default function selector(state = 0, action = '') {
    switch (action.type) {
        case 'SELECT':
            console.log(action);
            return action.selected;
        default:
            return action.selected;
    }
}