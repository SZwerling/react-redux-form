import { combineReducers } from 'redux';



const textReducer = (text=[{front: 1, back: 2}], action) => {
    if(action.type === 'NEW_TEXT'){
        const obj = action.payload
        return text.concat(obj)
    }
        return text
}






export default combineReducers({
    text: textReducer
})