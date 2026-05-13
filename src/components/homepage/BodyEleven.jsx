import facebookLogo from '../../../public/static/facebook_white.png'
import instagramLogo from '../../../public/static/instagram_white.png'
import xtwitterLogo from '../../../public/static/instagram_white.png'
import youtubeLogo from '../../../public/static/youtube_white.png'
import linkedinLogo from '../../../public/static/linkedin_white.png'
import googlePlayLogo from '../../../public/static/googleplay_en.png'
import appleStoreLogo from '../../../public/static/appstore_en.png'
import masterCardLogo from '../../../public/static/mastercard.png'
import { Link } from "react-router-dom";

function BodyEleven() {

    return (
        <div className="container-fluid bg-dark">
            <div className="container text-white pt-3">
                <div className="row last-paragraph">
                    <div className="col-md-2 col-12 pt-5">
                        <p className="fw-bold">Country</p>
                        <p>Europe</p>
                        <p>Germany</p>
                        <p>Finland</p>
                        <p>Austria</p>
                    </div>
                    <div className="col-md-2 col-12 pt-5">
                        <p className="fw-bold">What is Holvi</p>
                        <p>Business account and card</p>
                        <p>Holvi Business Credit Card</p>
                        <p>Virtual cards</p>
                        <p>International Transfers</p>
                        <p>Invoicing</p>
                        <p>Bookkeeping</p>
                        <p>Holvi mobile app</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div className="col-md-2 col-12 pt-5">
                        <p className="fw-bold">Support</p>
                        <p>Holvi Status Page</p>
                        <p>Help Centre</p>
                        <p>Blog</p>
                        <p>Security</p>
                    </div>
                    <div className="col-md-2 col-12 pt-5">
                        <p className="fw-bold">Company</p>
                        <p>About us</p>
                        <p>Careers</p>
                        <p>Press</p>
                        <p>Code of conduct for suppliers</p>
                    </div>
                    <div className="col-md-4 col-12 pt-5">
                        <img src={facebookLogo} alt="facebook_white" width="30" className="me-4" />
                        <img src={instagramLogo} alt="instagram_white" width="30" className="me-4" />
                        <img src={xtwitterLogo} alt="x-twitter-white" width="30" className="me-2" />
                        <img src={youtubeLogo} alt="youtube_white" width="30" className="me-4" />
                        <img src={linkedinLogo} alt="linkedin_white" width="30" className="me-5" />
                        <img src={googlePlayLogo} alt="googleplay_en" width="150" className="mt-4" />
                        <img src={appleStoreLogo} alt="appstore_en" width="130" className="mt-4" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-white last-paragraph pb-5">
                    <div className="col-md-4 col-12 mt-4">
                        <p>Holvi Payment Services Ltd is regulated by the Financial Supervisory Authority of Finland as an Authorised
                            Payment Institution. The current account issued by Holvi is a payment account and the funds held on the
                            account are managed as segregated customer funds. More information on the safeguarding of customer funds is
                            available in the Holvi <Link to="" className=" text-white">Help Centre</Link>.</p>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <p>Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International
                            Incorporated. The Card is issued by Holvi Payment Services Oy (“Holvi”) pursuant to licence by Mastercard
                            International Inc. Holvi is regulated by the Financial Supervisory Authority of Finland as an Authorised
                            Payment Institution.</p>
                    </div>
                    <div className="col-md-4 col-12 mt-4">
                        <img src={masterCardLogo} alt="mastercard" />
                    </div>
                    <div className="col-4">
                        <p><a href="" className="text-decoration-none text-white me-2">Terms of Service</a>
                            <a href="" className="text-decoration-none text-white me-2">Privacy Policy</a>
                            <a href="" className="text-decoration-none text-white me-2">Acceptable Use Policy</a>
                            <a href="" className="text-decoration-none text-white">Site Notice
                            </a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BodyEleven;