import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { CiCircleChevRight } from 'react-icons/ci'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <>

    <footer>
    <div className="container">
        <div className="row ">
            <div className='footer_adjuster'>    
        <div className="col-md-2 col-sm-6">
            <ul>
                <h3>info</h3>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />Contact us</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />release</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />stores</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />brands</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />blogs</li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6">
            <ul>
            <h3>policies</h3>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />help center</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />privacy policy</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />returns & exchange</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />terms & conditions</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />order & shipping</li>
                <li><CiCircleChevRight className="bolder fs-4 me-2" />Terms & service</li>
            </ul>
        </div>
            </div>
            <div className='footer_social'>
        <div className="col-md-3 col-sm-6 text-center mt-5">
            <div className="socials">
                <h3>our socials</h3>
                <FaFacebook className='mx-2' />
                <BsInstagram className='mx-2'/>
                <BsTwitter className='mx-2'/>
            </div>
        </div>
        <div className="col-md-4 col-sm-6 mt-5 text-center">
            <h3>subscribe  to our news letter</h3>
            <div className="input_box">
                    <input type="text" placeholder='Email Address' />
                    <button className='btn'>subscribe</button>
            </div>
        </div>
            </div>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer