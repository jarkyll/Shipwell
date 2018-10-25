import { combineReducers } from 'redux';
// import reducers
import { reducer as formReducer } from 'redux-form';

const mainReducer = combineReducers({
    form: formReducer
});

export default mainReducer;