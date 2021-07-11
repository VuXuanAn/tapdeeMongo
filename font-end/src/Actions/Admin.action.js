import * as types from '../Constants/Admin.constant'
import API from './../axios/API'
import { message } from 'antd';

export const singIn = (userName, userPassword) => async (dispatch) => {
    dispatch({
        type: types.ADMIN_LOGIN_REQUEST,
        payload: { userName, userPassword }
    });
    try {
        const { data } = await API('admin', 'POST', { userName, userPassword }, null);
        dispatch({
            type: types.ADMIN_LOGIN_SUCCESS,
            payload: data
        });
        message.info('Xin chào ' + userName);
        localStorage.setItem('ADMIN', JSON.stringify(data))
    } catch (Error) {
        dispatch({
            type: types.ADMIN_LOGIN_FAIL,
            payload: Error.response && Error.response.data.message ?
                Error.response.data.message :
                Error.message,
        })
        message.info('thất bại, vui lòng thử lại');
    }
}