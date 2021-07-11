import React from 'react';

const Contact = () => {
    return (
        <div className="main">
            <div className="aQuaterCircleLeft" data-aos="zoom-in" data-aos-duration="1000"></div>
            <div className="aQuaterCircleRight" data-aos="zoom-in" data-aos-duration="1000"></div>
            <div className="client">
                <div className="descreption">
                    <div className="imageUser">
                        <img src="https://kenh14cdn.com/thumb_w/660/2019/12/27/538665471339292477369261941211825616306246n-15774250506711555797759.jpg" style={{ width: '100%', borderRadius: '50%' }} />
                    </div>
                    <h2
                        className="text-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >Vu Xuan An</h2>
                    <p
                        className="text-center"
                        data-aos="zoom-in"
                        data-aos-delay="1000"
                        data-aos-duration="1000"
                    >Here's some information myself</p>
                </div>

                <div className="d-flex justify-content-between contact">
                    <span>Gọi điện</span>
                    <span>Nhắn tin</span>
                </div>


                <div className="socialMedia">
                    <a href="https://www.instagram.com/vxa_20498/"><i className="fab fa-instagram ig" /></a>
                    <a href="https://www.facebook.com/VuXuanAn1998/" ><i class="fab fa-facebook-f fb" /></a>
                    <i class="fab fa-tiktok tiktok mt-35" />
                    <i class="fab fa-behance  mt-35 behance"></i>
                    <i class="fab fa-twitter mt-35 twitter"></i>
                    <i class="fab fa-snapchat-ghost mt-35 snap"></i>
                    <i class="fab fa-spotify mt-35 spotify"></i>
                </div>
            </div>
        </div>
    );
}

export default Contact;
