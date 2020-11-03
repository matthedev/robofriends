const INIT_STATE = {
    users: [],
    updatedUsers: []
}

const userReducer = (state = INIT_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case "FETCH_USER_SUCCESS":
         return {
             ...state,
             users: payload,
             updatedUsers: payload
         }
         case "FILTER_USERS":
             const  filteredUsers = state.users.filter(user => user.name.toLowerCase().includes(payload.toLowerCase()))
             return {
                 ...state,
                 updatedUsers: filteredUsers
             }
         default:
             return state
    }
} 

export default userReducer;
