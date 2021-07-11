import React, { useEffect, useState } from 'react';
import { Modal, Input, Upload, message } from 'antd';
import './ContactV2.css'
import ImgCrop from 'antd-img-crop';
import anhBia from './../../assets/image/socialMeadia/anhBia.png'
import avt from './../../assets/image/socialMeadia/avt.png'
import { useDispatch, useSelector } from 'react-redux';
import { getInforAccount, updateInforAccount, updateInforAccountAvt, updateInforAccountName } from '../../Actions/Account.action'
import { EditOutlined, PlusOutlined, CameraOutlined, SaveOutlined } from '@ant-design/icons';
const { Search } = Input;
const ContactV2 = () => {





    // tên và mô tả 
    const [name, setName] = useState('');
    const [des, setdes] = useState('');

    //modal
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalKeys, setmodalkeys] = useState('');//key
    const [modalValues, setmodalValues] = useState('');
    const showModal = (igKey) => {
        setIsModalVisible(true);
        setmodalkeys(igKey)
    };
    const token = localStorage.getItem('Account') ? JSON.parse(localStorage.getItem('Account')) : {};
    //  lay du lieu tren API sau do lua vao store 
    const [isUpdate, setisUpdate] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        var token = localStorage.getItem('Account') ? JSON.parse(localStorage.getItem('Account')) : {};
        if (JSON.stringify(token) !== '{}') {
            dispatch(getInforAccount(token.token))
            setisUpdate(!isUpdate)
        } else {
            alert("loi! vui long thu lai ")
        }
    }, []);
    // fetch du lieu tren store

    const Account1 = useSelector(state => state.Account)
    const { user } = Account1
    const [userInfor, setuserInfor] = useState({});

    useEffect(() => {
        if (user) {
            setuserInfor(user.socialMedia)
            setName(user.name)
            setdes(user.descreption)
        }

    }, [user]);
    async function handleOk(modalKeys) {
        setIsModalVisible(false);
        var token = localStorage.getItem('Account') ? JSON.parse(localStorage.getItem('Account')) : {};
        switch (modalKeys) {
            case 'facebook':
                const facebook = {
                    ...userInfor,
                    facebook: modalValues
                }
                await dispatch(updateInforAccount(token.token, facebook))
                await setuserInfor(facebook)
                dispatch(getInforAccount(token.token))
                break;
            case 'G':
                const G = {
                    ...userInfor,
                    G: modalValues
                }
                await dispatch(updateInforAccount(token.token, G))
                await setuserInfor(G)
                dispatch(getInforAccount(token.token))
                break;
            case 'Line':
                const Line = {
                    ...userInfor,
                    Line: modalValues
                }
                await dispatch(updateInforAccount(token.token, Line))
                await setuserInfor(Line)
                dispatch(getInforAccount(token.token))
                break;
            case 'Gmail':
                const Gmail = {
                    ...userInfor,
                    Gmail: modalValues
                }
                await dispatch(updateInforAccount(token.token, Gmail))
                await setuserInfor(Gmail)
                dispatch(getInforAccount(token.token))
                break;
            case 'instagram':
                const instagram = {
                    ...userInfor,
                    instagram: modalValues
                }
                await dispatch(updateInforAccount(token.token, instagram))
                await setuserInfor(instagram)
                dispatch(getInforAccount(token.token))
                break;
            case 'momo':
                const momo = {
                    ...userInfor,
                    momo: modalValues
                }
                await dispatch(updateInforAccount(token.token, momo))
                await setuserInfor(momo)
                dispatch(getInforAccount(token.token))
                break;
            case 'phone':
                const phone = {
                    ...userInfor,
                    phone: modalValues
                }
                await dispatch(updateInforAccount(token.token, phone))
                await setuserInfor(phone)
                dispatch(getInforAccount(token.token))
                break;
            case 'react':
                const react = {
                    ...userInfor,
                    react: modalValues
                }
                await dispatch(updateInforAccount(token.token, react))
                await setuserInfor(react)
                dispatch(getInforAccount(token.token))
                break;
            case 'shopee':
                const shopee = {
                    ...userInfor,
                    shopee: modalValues
                }
                await dispatch(updateInforAccount(token.token, shopee))
                await setuserInfor(shopee)
                dispatch(getInforAccount(token.token))
                break;
            case 'snapchat':
                const snapchat = {
                    ...userInfor,
                    snapchat: modalValues
                }
                await dispatch(updateInforAccount(token.token, snapchat))
                await setuserInfor(snapchat)
                dispatch(getInforAccount(token.token))
                break;
            case 'spotify':
                const spotify = {
                    ...userInfor,
                    spotify: modalValues
                }
                await dispatch(updateInforAccount(token.token, spotify))
                await setuserInfor(spotify)
                dispatch(getInforAccount(token.token))
                break;
            case 'talk':
                const talk = {
                    ...userInfor,
                    talk: modalValues
                }
                await dispatch(updateInforAccount(token.token, talk))
                await setuserInfor(talk)
                dispatch(getInforAccount(token.token))
                break;

            case 'telegram':
                const telegram = {
                    ...userInfor,
                    telegram: modalValues
                }
                await dispatch(updateInforAccount(token.token, telegram))
                await setuserInfor(telegram)
                dispatch(getInforAccount(token.token))
                break;
            case 'tiki':
                const tiki = {
                    ...userInfor,
                    tiki: modalValues
                }
                await dispatch(updateInforAccount(token.token, tiki))
                await setuserInfor(tiki)
                dispatch(getInforAccount(token.token))
                break;
            case 'tiktok':
                const tiktok = {
                    ...userInfor,
                    tiktok: modalValues
                }
                await dispatch(updateInforAccount(token.token, tiktok))
                await setuserInfor(tiktok)
                dispatch(getInforAccount(token.token))
                break;

            case 'twitter':
                const twitter = {
                    ...userInfor,
                    twitter: modalValues
                }
                await dispatch(updateInforAccount(token.token, twitter))
                await setuserInfor(twitter)
                dispatch(getInforAccount(token.token))
                break;
            case 'website':
                const website = {
                    ...userInfor,
                    website: modalValues
                }
                await dispatch(updateInforAccount(token.token, website))
                await setuserInfor(website)
                dispatch(getInforAccount(token.token))
                break;

            case 'whatsapp':
                const whatsapp = {
                    ...userInfor,
                    whatsapp: modalValues
                }
                await dispatch(updateInforAccount(token.token, whatsapp))
                await setuserInfor(whatsapp)
                dispatch(getInforAccount(token.token))
                break;
            case 'youtube':
                const youtube = {
                    ...userInfor,
                    youtube: modalValues
                }
                await dispatch(updateInforAccount(token.token, youtube))
                await setuserInfor(youtube)
                dispatch(getInforAccount(token.token))
                break;

            case 'zalo':
                const zalo = {
                    ...userInfor,
                    zalo: modalValues
                }
                await dispatch(updateInforAccount(token.token, zalo))
                await setuserInfor(zalo)
                dispatch(getInforAccount(token.token))
                break;
            default:
                break;
        }
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // upload hinh anh 
    const beforeUpload = file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        if (isLt2M && isJpgOrPng) {
            const formData = new FormData();
            formData.append("avt", file, file.name);
            console.log(formData);
            // dispatch(updateInforAccountAvt(token.token, formData))
            console.log(file);
        }
        return isJpgOrPng && isLt2M;
    };

    // cap nhap tên và mô tả 
    async function updateNameAndDesHandler() {
        await dispatch(updateInforAccountName(token.token, name, des))
        await dispatch(getInforAccount(token.token))
    }
    return (
        <div>

            <div className="imageRetargular">
                <img src={anhBia} className="anhBia" />
                <h2 className="logo">TapDee</h2>
                <img className="avtImg" src={avt} />
                <div className="group-upload-image">
                    <ImgCrop
                        modalOk='Cập Nhật'
                        modalCancel='Hủy'
                        rotate
                        modalTitle='Cập Nhật Avatar'
                    >
                        <Upload
                            beforeUpload={beforeUpload}
                            name="avatar"
                            fileList={[]}
                            accept=".jpg, .jpeg, .png"
                            listType="listTyp"

                        >
                            <CameraOutlined type="upload" />
                        </Upload>
                    </ImgCrop>
                </div>
            </div>




            <div className="editName">
                <input
                    className="text-center mt-90 maxwidth desAccount"
                    type="text"
                    value={des}
                    onChange={e => setdes(e.target.value)}
                    placeholder="Nhập mô tả về bạn"
                />

                <input
                    className="text-center nameAccount maxwidth  nameAccount"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Nhập tên của bạn'
                />
                <div className='d-flex justify-content-center'> <span className="update" onClick={updateNameAndDesHandler}>Cập nhập</span></div>
            </div>

            <div className="socialMedia ">
                {Object.keys(userInfor)
                    .map(igKey => {
                        return [...Array(userInfor[igKey])].map((social) => {
                            return (
                                <div className={social !== "" ? `iconSocialMedia mt-2 ${igKey}` : "d-none"} onClick={() => showModal(igKey)}>
                                    <EditOutlined />
                                </div>
                            )
                        });
                    })
                }
                {Object.keys(userInfor)
                    .map(igKey => {
                        return [...Array(userInfor[igKey])].map((social) => {
                            return (
                                <div className={social === "" ? `iconSocialMedia mt-2 ${igKey}` : "d-none"} onClick={() => showModal(igKey)}>
                                    <div className="empty"></div>
                                    <PlusOutlined />
                                </div>
                            )
                        });
                    })
                }
            </div>
            <Modal title={`Nhập ${modalKeys} của bạn tại đây`} visible={isModalVisible} onOk={() => handleOk(modalKeys)} onCancel={handleCancel}>
                <Input onChange={e => setmodalValues(e.target.value)} />
            </Modal>
        </div>
    );
}

export default ContactV2;
