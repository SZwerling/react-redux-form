export const oneInput = (valuesObj) => ({
        type: 'NEW_TEXT',
        payload: valuesObj
});


export const addComment = (text, author) => ({
    type: 'ADD_COMMENT',
    payload: {
        text: text,
        author: author
    },
});