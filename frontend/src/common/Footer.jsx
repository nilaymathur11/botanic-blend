import FooterLogo from '../images/FooterLogo.svg'

export function Footer() {
    return (
        <footer className="custom_bottom_padding custom_top_padding text-white">
            <div className="container-lg">
                <div className="row justify-content-center justify-content-lg-between">
                    <div className="col-lg-6 col-12 row justify-content-start justify-content-lg-between">
                        <div className="footer_logo col-12 col-lg-4">
                        <img src={FooterLogo} alt="" />
                        </div>
                        <div className="footer_list col-6 col-lg-4">
                            <ul>
                                <li>New Arrivals</li>
                                <li>About</li>
                                <li>Influencer</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="footer_list col-6 col-lg-4">
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>LINKEDIN</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="footer_right mb-3 text-center text-lg-start">
                            Stay in the know — we’ll
                            send you offers & more.
                        </div>
                        <div className="footer_right_sign text-center text-lg-start">
                            <button className='white_btn'>SIGN UP</button>
                        </div>
                    </div>
                </div>
                <div className="divider mt-5"></div>
                <div className='copyright'>© 2022 Scandleted. All right reserved.</div>
            </div>
        </footer>
    )
}