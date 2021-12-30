export const oneInput = (front, back) => ({
        type: 'NEW_TEXT',
        payload: {
            front: front,
            back: back
        },
});


export const addComment = (text, author) => ({
    type: 'ADD_COMMENT',
    payload: {
        text: text,
        author: author
    },
});