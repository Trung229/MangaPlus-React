

import "../assets/css/main.css";
import "../assets/css/base.css";
import "../assets/css/grid.css";
import textCopyRights from "../assets/img/abj1092_1042.6c597180.png"
import copyRight from "../assets/img/web_logo_190118_light.c773f9e9.png"
import appIcon from "../assets/img/app_icon.919a13c7.png";
import appStore from "../assets/img/aivalable-on-the-app-store-2.svg";
import chPlay from "../assets/img/google-2.svg";

const footer = () => {
    return (
        <div class="section__footer">
            <footer class="footer">
                <div class="grid wide">
                    <div class="row pull-center">
                        <div class="footer__copyright">
                            <img class="footer__img" src={copyRight} alt="" />
                            <p class="copyright">
                                ©︎2020 Phạm Đức Trung Inc.
                                <span>All rights reserved</span>
                            </p>
                        </div>
                        <div class="footer__detail">
                            <div class="footer__nav">
                                <ul class="footer__list">
                                    <li class="footer__item">
                                        <div>Help / FAQs</div>
                                    </li>
                                    <li class="footer__item">
                                        <div>News and Events</div>
                                    </li>
                                    <li class="footer__item">
                                        <div>Feedback</div>
                                    </li>
                                    <li class="footer__item">
                                        <div>Privacy Policy</div>
                                    </li>
                                    <li class="footer__item">
                                        <div>Terms of Services</div>
                                    </li>
                                    <li class="footer__item">
                                        <div>Copyrights</div>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer__nav-section-2">
                                <img src={textCopyRights} width='72px' height="60px" alt="" />
                                <p>ABJ Mark is a registered trademark (Registration No.10921042) Indicating that this e-book
                                    store / e-book distribution service is an authorized distribution service that gained
                                    permission to use content from the copyright holder.
                                    For more information check </p>
                            </div>

                        </div>
                        <div class="footer__nav-download">
                            <img class="icon-logo" src={appIcon} width="80px" height="80px"
                                alt="" />
                            <div class="icon-download">
                                <p>Download the app and read it anytime!</p>
                                <div class="nav-download">
                                    <div>
                                        <img class="icon-appstore" src={appStore}
                                            width="120px" height="40px" alt="" />
                                    </div>
                                    <div>
                                        <img class="icon-appstore" src={chPlay} width="120px"
                                            height="40px" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer;