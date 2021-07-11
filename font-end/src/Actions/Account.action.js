import * as types from '../Constants/Account.constant'
import API from './../axios/API'
import { message } from 'antd';



// đăng kí 
export const createNewAccount = (maSoThe, matKhau, token) => async (dispatch) => {
    dispatch({
        type: types.ACCOUNT_CREATE_REQUEST,
        payload: { maSoThe, matKhau, token }
    });
    try {
        await API('account/addAccount', 'POST', { maSoThe, matKhau }, `Bearer ${token}`);
        dispatch({
            type: types.ACCOUNT_CREATE_SUCCESS,
        });
        message.info('Tạo thành công tài khoản ' + maSoThe);
    } catch (Error) {
        dispatch({
            type: types.ACCOUNT_CREATE_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('khong thanh cong ');
    }
}


// chúc năng đăng nhập
export const AccountLogin = (maSoThe, matKhau) => async (dispatch) => {
    dispatch({
        type: types.ACCOUNT_LOGIN_REQUEST,
        payload: { maSoThe, matKhau }
    });
    try {
        const { data } = await API('account/login', 'POST', { maSoThe, matKhau }, null);
        dispatch({
            type: types.ACCOUNT_LOGIN_SUCCESS,
        });
        message.info('Xin chào ' + maSoThe);
        localStorage.setItem('Account', JSON.stringify(data))
    } catch (Error) {
        dispatch({
            type: types.ACCOUNT_LOGIN_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('Có lỗi xảy ra vui lòng thử lại !');
    }
}


// lấy tài khoản từ 1 token 
export const getInforAccount = (token) => async (dispatch) => {
    dispatch({
        type: types.GET_INFOR_ACCOUNT_REQUEST,
        payload: { token }
    });
    try {
        const { data } = await API('account/getAccount', 'POST', null, `Bearer ${token}`);
        dispatch({
            type: types.GET_INFOR_ACCOUNT_SUCCESS,
            user: data
        });
    } catch (Error) {
        dispatch({
            type: types.GET_INFOR_ACCOUNT_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('Có lỗi xảy ra vui lòng thử lại !');
    }
}

// lấy tài khoản trên thanh URL 
export const getInforAccountById = (maSoThe) => async (dispatch) => {
    dispatch({
        type: types.GET_INFOR_ACCOUNT_BY_ID_REQUEST,
        payload: { maSoThe }
    });
    try {
        const { data } = await API('account/getAccountById', 'POST', { maSoThe }, null);
        dispatch({
            type: types.GET_INFOR_ACCOUNT_BY_ID_SUCCESS,
            userNFC: data
        });
        message.info('Xin chào' + maSoThe);
    } catch (Error) {
        dispatch({
            type: types.GET_INFOR_ACCOUNT_BY_ID_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('Có lỗi xảy ra vui lòng thử lại !');
    }
}
// cập nhạp avt tài khoản 
export const updateInforAccountAvt = (token, avt) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_INFOR_ACCOUNT_AVT_REQUEST,
        payload: { token, avt }
    });
    try {
        const { data } = await API('account/updateAccount', 'POST', { avt }, `Bearer ${token}`);
        dispatch({
            type: types.UPDATE_INFOR_ACCOUNT_AVT_SUCCESS,
            user: data
        });
    } catch (Error) {
        dispatch({
            type: types.UPDATE_INFOR_ACCOUNT_AVT_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('Có lỗi xảy ra vui lòng thử lại !');
    }
}

// cập nhâp social Media
export const updateInforAccount = (token, socialMedia) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_INFOR_ACCOUNT_REQUEST,
        payload: { token, socialMedia }
    });
    try {
        const { data } = await API('account/updateAccount', 'POST', { socialMedia }, `Bearer ${token}`);
        dispatch({
            type: types.UPDATE_INFOR_ACCOUNT_SUCCESS,
            user: data
        });
    } catch (Error) {
        dispatch({
            type: types.UPDATE_INFOR_ACCOUNT_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('Có lỗi xảy ra vui lòng thử lại !');
    }
}
export const updateInforAccountName = (token, name, descreption) => async (dispatch) => {
    dispatch({
        type: types.UPDATE_INFOR_ACCOUNT_REQUEST,
        payload: { token, name, descreption }
    });
    try {
        const { data } = await API('account/updateAccount', 'POST', { name, descreption }, `Bearer ${token}`);
        dispatch({
            type: types.UPDATE_INFOR_ACCOUNT_SUCCESS,
            user: data
        });
        message.info('Cap nhap thanh cong !');
    } catch (Error) {
        dispatch({
            type: types.UPDATE_INFOR_ACCOUNT_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('Có lỗi xảy ra vui lòng thử lại !');
    }
}


