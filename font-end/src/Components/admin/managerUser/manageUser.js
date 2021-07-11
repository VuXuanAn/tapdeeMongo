import React from 'react';
import './managerUser.css'
import AddUser from './addUser/addUser';
const manageUser = () => {

    return (
        <div className="MyAccount">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="optionAccount">
                            <div className="title d-flex">
                                <img src="https://i.pinimg.com/474x/07/bc/12/07bc122c78c5bb1bd75a2f7771f1045d.jpg" className="mr-2"></img>
                                <div>
                                    <h5>Quản trị viên</h5>
                                    <p>Trần Đình Hồng Quân</p>
                                </div>
                            </div>
                            <ul>
                                <li className="ativeAccount">
                                    <i className="fas fa-user" ></i><a>Thêm tài khooản</a>
                                </li>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i><a>Quản lí tài khoản</a>
                                </li>
                                <li>
                                    <i className="fas fa-address-card"></i><a>Quản lí đơn hàng</a>
                                </li>
                                <li><i class="fas fa-external-link-alt" ></i><a>Thoát tài khoản</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-9 p-5 " style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                        <AddUser />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default manageUser;
