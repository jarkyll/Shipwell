import { combineReducers } from 'redux';
// import reducers
import { reducer as formReducer } from 'redux-form';
import { globalReducer as global } from './globalReducer';
const mainReducer = combineReducers({
    form: formReducer,
    global
});

export default mainReducer;