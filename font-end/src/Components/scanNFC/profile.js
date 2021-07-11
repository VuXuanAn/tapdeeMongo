import React, { useEffect, useState } from 'react';
import anhBia from './../../assets/image/socialMeadia/anhBia.png'
import avt from './../../assets/image/socialMeadia/avt.png'
import { useDispatch, useSelector } from 'react-redux';
import { getInforAccountById } from '../../Actions/Account.action'
import { useParams } from "react-router-dom";



const Profile = (props) => {
    // fetch du lieu tren store
    const Account = useSelector(state => state.Account)
    const { userNFC } = Account
    const [userInfor, setuserInfor] = useState({});
    const [userInforM, setuserInforM] = useState({});

    //  lay du lieu tren API sau do lua vao store 
    let { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        if (JSON.stringify(id) !== '{}') {
            dispatch(getInforAccountById(id))
        } else {
            alert("loi! vui long thu lai ")
        }
    }, []);

    useEffect(() => {
        if (userNFC) {
            setuserInfor(userNFC.socialMedia)
            setuserInforM(userNFC)
        }
    });

    return (
        <div>
            <div className="imageRetargular">
                <img src={anhBia} className="anhBia" />
                <h2 className="logo"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                >TapDee</h2>
                <img className="avtImg" src={avt} d
                    ata-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-delay="1000"
                />
            </div>
            <p
                className="text-center mt-90 desAccount"
                data-aos="flip-right"
                data-aos-delay="1500"
            >{userInforM.descreption}</p>

            <h2
                className="text-center nameAccount"
                data-aos="flip-right"
                data-aos-delay="2000"
            >{userInforM.name}</h2>

            <div className="socialMedia ">
                {Object.keys(userInfor)
                    .map(igKey => {
                        return [...Array(userInfor[igKey])].map((social, index) => {
                            return (
                                <div
                                    key={social._id}
                                    className={social !== "" ? `iconSocialMedia mt-2 ${igKey}` : "d-none"}
                                >
                                    <a href={social} />
                                </div>
                            )
                        });
                    })
                }
            </div>
        </div>
    );
}

export default Profile;
