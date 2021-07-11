import * as types from '../Constants/Account.constant'

export const AccountReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_INFOR_ACCOUNT_SUCCESS:
            return {
                user: action.user
            }
        case types.GET_INFOR_ACCOUNT_BY_ID_SUCCESS:
            return {
                userNFC: action.userNFC
            }
        default:
            return state;
    }
}


export default AccountReducer;