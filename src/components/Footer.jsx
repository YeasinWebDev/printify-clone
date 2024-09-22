import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <img className="md:w-40 w-24 lg:w-40 xl:w-40 2xl:w-40" src="/assets/clone-logo.svg" alt="Logo" />
                <div className='flex items-center gap-2'>
                    <div className='bg-green-500 p-2 rounded-full'>
                        <FaFacebookF color='white' size={'20'} />
                    </div>
                    <div className='bg-green-500 p-2 rounded-full'>

                        <FaInstagram color='white' size={'20'} />
                    </div>
                    <div className='bg-green-500 p-2 rounded-full'>

                        <FaLinkedinIn color='white' size={'20'} />
                    </div>
                    <div className='bg-green-500 p-2 rounded-full'>

                        <FaYoutube color='white' size={'20'} />
                    </div>
                </div>
            </div>
            <footer className="footer text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Integrations</h6>
                    <a className="link link-hover">Shopify</a>
                    <a className="link link-hover">Etsy</a>
                    <a className="link link-hover">eBay</a>
                    <a className="link link-hover">Amazon</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Discover</h6>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Products</a>
                    <a className="link link-hover">Bands</a>
                    <a className="link link-hover">Pricing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Start selling</h6>
                    <a className="link link-hover">Custom T-shirts</a>
                    <a className="link link-hover">Custom Hoodies</a>
                    <a className="link link-hover">Custom Mugs</a>
                    <a className="link link-hover">Custom Socks</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Printify</h6>
                    <a className="link link-hover">Print on Demand</a>
                    <a className="link link-hover">Print Providers</a>
                    <a className="link link-hover">Experts Program</a>
                    <a className="link link-hover">Becaome a Partner</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer