import React, { useEffect } from 'react';
import "./ReferSection.css";
import laptop_img from "../img/laptop_img.png";
import axios from "axios";

import Modal from "react-modal";
import { CopyToClipboard } from 'react-copy-to-clipboard';

Modal.setAppElement("#root");


function ReferSection() {

    const [isOpen, setIsOpen] = React.useState(false);
    const [referralCount, setReferralCount] = React.useState(0);
    const [referralLink, setReferralLink] = React.useState('https://rancholabs.com/studentsignup?refer=');
    const [copyValue, setCopyValue] = React.useState('');
    const [copied,setCopied] = React.useState(false);

    function toggleModal() {
        setIsOpen(() => !isOpen);
        if(copied) setCopied(() => !copied);
    }

    const onReferNowHandler = async () => {
        const userDetail = JSON.parse(localStorage.getItem("userDetail"));
        try {
            const response = await axios.post("/api/bootcamp/user", userDetail);
            setReferralLink(referralLink + response.data.data.referralCode);
            setReferralCount(response.data.data.referralCount);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        onReferNowHandler()
    },[]);

    return (
        <>
            <div className="refer_section" id="referId">
                <div className="refer_content_box">
                    <div className="refer_left_box">
                        <h1 className="refer_left_title">Refer a friend and get a chance to win Macbook*</h1>
                        <button className="btn_refer" onClick={toggleModal} >Refer Now</button>
                    </div>
                    <div className="refer_right_box">
                        <img className="refer_right_img" src={laptop_img} alt="laptop img" />
                    </div>
                    <span className="refer_terms">*Terms & Conditions Apply</span>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                    className="mymodal"
                    overlayClassName="myoverlay"
                    closeTimeoutMS={500}
                >
                    <div className="referral_box">
                        <h1 className="referral_text">You have referred <span className="referral_count">{referralCount} {referralCount === 1 ? "student" : "students"}</span>.</h1>
                        <div className="link_box">
                            <h2 className="link_text">{referralLink}</h2>
                            <CopyToClipboard text={referralLink}
                            onCopy={() => setCopied(true)}>
                            <button className='btn_copy' >Copy</button>
                        </CopyToClipboard>
                        </div>
                        {copied ? <span id='copyText' style={{ color: 'green', paddingLeft: '5px', marginTop: '10px' }}>Copied.</span> : null}
                    </div>
                    <button className='btn_modal_close' onClick={toggleModal}>x</button>
                </Modal>
            </div>
        </>
    )
}

export default ReferSection;