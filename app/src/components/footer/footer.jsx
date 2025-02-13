import React from 'react';
import footerStyles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <p className={footerStyles.disclaimer}>
                ‡No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9-, 12-, 18- or 24-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
                <br />
                Representative example:
                <br />
                A purchase of ₹79900.00 repaid over 24 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹11903.00 requires monthly payments of ₹3329.00. Total amount payable: ₹79900.00.
                <br />
                *Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
                <br />
                1. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to English (Australia, Canada, Ireland, New Zealand, South Africa, UK or US), as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Additional features and languages will be available in April, with more languages coming over the course of the year. Languages supported in 2025 include Chinese, English (India, Singapore), French, German, Italian, Japanese, Korean, Portuguese, Spanish and Vietnamese.
                <br />
                2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
                <br />
                A subscription is required for Apple TV+.
                <br />
                Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
            </p>
            <div className={footerStyles.links}>
                <div className={footerStyles.column}>
                    <details open>
                        <summary className={footerStyles.heading}>Shop and Learn</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Store</a></li>
                            <li className={footerStyles.link}><a href="#">Mac</a></li>
                            <li className={footerStyles.link}><a href="#">iPad</a></li>
                            <li className={footerStyles.link}><a href="#">iPhone</a></li>
                            <li className={footerStyles.link}><a href="#">AirPods</a></li>
                            <li className={footerStyles.link}><a href="#">TV & Home</a></li>
                            <li className={footerStyles.link}><a href="#">AirTag</a></li>
                            <li className={footerStyles.link}><a href="#">Accessories</a></li>
                            <li className={footerStyles.link}><a href="#">Gift Cards</a></li>
                            <li className={footerStyles.link}><a href="#">Store</a></li>
                        </ul>
                    </details>

                    <details open>
                        <summary className={footerStyles.heading}>Apple Wallet</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Wallet</a></li>
                        </ul>
                    </details>
                </div>

                <div className={footerStyles.column}>
                    <details open>
                        <summary className={footerStyles.heading}>Account</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Manage Your Apple Account</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Store Account</a></li>
                            <li className={footerStyles.link}><a href="#">iCloud.com</a></li>
                        </ul>
                    </details>

                    <details open>
                        <summary className={footerStyles.heading}>Entertainment</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Apple One</a></li>
                            <li className={footerStyles.link}><a href="#">Apple TV+</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Music</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Arcade</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Podcasts</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Books</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Store</a></li>
                        </ul>
                    </details>
                </div>

                <div className={footerStyles.column}>
                    <details open>
                        <summary className={footerStyles.heading}>Apple Store</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Find a Store</a></li>
                            <li className={footerStyles.link}><a href="#">Genius Bar</a></li>
                            <li className={footerStyles.link}><a href="#">Today at Apple</a></li>
                            <li className={footerStyles.link}><a href="#">Group Reservations</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Camp</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Trade In</a></li>
                            <li className={footerStyles.link}><a href="#">Ways to Buy</a></li>
                            <li className={footerStyles.link}><a href="#">Recycling Programme</a></li>
                            <li className={footerStyles.link}><a href="#">Order Status</a></li>
                            <li className={footerStyles.link}><a href="#">Shopping Help</a></li>
                        </ul>
                    </details>
                </div>

                <div className={footerStyles.column}>
                    <details open>
                        <summary className={footerStyles.heading}>For Business</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Apple and Business</a></li>
                            <li className={footerStyles.link}><a href="#">Shop for Business</a></li>
                        </ul>
                    </details>

                    <details open>
                        <summary className={footerStyles.heading}>For Education</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Apple and Education</a></li>
                            <li className={footerStyles.link}><a href="#">Shop for Education</a></li>
                            <li className={footerStyles.link}><a href="#">Shop for University</a></li>
                        </ul>
                    </details>

                    <details open>
                        <summary className={footerStyles.heading}>For Healthcare</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Apple in Healthcare</a></li>
                            <li className={footerStyles.link}><a href="#">Mac in Healthcare</a></li>
                            <li className={footerStyles.link}><a href="#">Health on Apple Watch</a></li>
                        </ul>
                    </details>
                </div>

                <div className={footerStyles.column}>
                    <details open>
                        <summary className={footerStyles.heading}>Apple Values</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Accessibility</a></li>
                            <li className={footerStyles.link}><a href="#">Education</a></li>
                            <li className={footerStyles.link}><a href="#">Environment</a></li>
                            <li className={footerStyles.link}><a href="#">Privacy</a></li>
                            <li className={footerStyles.link}><a href="#">Supply Chain</a></li>
                        </ul>
                    </details>

                    <details open>
                        <summary className={footerStyles.heading}>About Apple</summary>
                        <ul>
                            <li className={footerStyles.link}><a href="#">Newsroom</a></li>
                            <li className={footerStyles.link}><a href="#">Apple Leadership</a></li>
                            <li className={footerStyles.link}><a href="#">Career Opportunities</a></li>
                            <li className={footerStyles.link}><a href="#">Investors</a></li>
                            <li className={footerStyles.link}><a href="#">Ethics and Compliance</a></li>
                            <li className={footerStyles.link}><a href="#">Events</a></li>
                            <li className={footerStyles.link}><a href="#">Contact Apple</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div className={footerStyles.footNote}>
                <p>
                    Copyright © 2025 Apple Inc. All rights reserved.
                    <div className={footerStyles.more}>
                        <a>Privacy Policy</a> 
                        <a>Terms of Use</a> 
                        <a>Sales</a> 
                        <a>Policy</a> 
                        <a>Legal</a> 
                        <a>Site Map</a>
                    </div>
                    <a className={footerStyles.country}>
                        India
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;