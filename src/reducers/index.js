import { combineReducers } from 'redux';



const textReducer = (text=[], action) => {
    if(action.type === 'NEW_TEXT'){
        const obj = action.payload
        return text.concat(obj)
    }
        return text
}






export default combineReducers({
    text: textReducer
})