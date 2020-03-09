export const addTodo = (text) =>{
    return {
        type: "ADD_TODO",
        text
    }
}

export const toggleTodo = (id) =>{
    return{
        type: "TOGGLE_TODO",
        id
    }
}

export const setVisibilityFilter = (filter) =>{
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}
export const visibilityTypes = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_ACTIVE: "SHOW_ACTIVE",
    SHOW_COMPLETED: "SHOW_COMPLETED"
}
