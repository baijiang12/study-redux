import { CHANGE_INPUT_VALUE, DELETE_LIST_ITEM, ADD_TOD_ITEM, INIT_LIST, GET_INIT_LIST } from './actionTypes'

export const getInputChangeAction = (value) =>({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () =>({
    type: ADD_TOD_ITEM,
});

export const getDeleteItemAction = (index) =>({
    type: DELETE_LIST_ITEM,
    index
});
export const initList = (data) =>({
    type: INIT_LIST,
    data
});

export const getInitList = () =>({
    type:GET_INIT_LIST,
})

// export const getTodoList = ()=>{
//     return (dispatch) => {
//         const list = ['f','s']
//         const action = initList(list)
//         dispatch(action)
//     }
// }