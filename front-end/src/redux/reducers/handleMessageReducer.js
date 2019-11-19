import { REGISTER_SUCCESS_MESSAGE, REGISTER_ERROR_MESSAGE} from '../actionTypes/actionTypes';

const initialState = {
    serverMessage: null,
    messageStyle: {
        fontColorStyle: '',
        dynamicClassName: ''
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_ERROR_MESSAGE: 
            return {
                serverMessage: action.payload,
                messageStyle: {
                    fontColorStyle: '#f44336',
                    dynamicClassName: 'App'
                }
            };
        case REGISTER_SUCCESS_MESSAGE:
            return {
                serverMessage: action.payload,
                messageStyle: {
                    fontColorStyle: '#3F51B5',
                    dynamicClassName: 'App'
                }
            };
        default:
            return state;
    }
}