import React from "react";
import "./Footer.css";

function Footer () {
    return (
        <footer class="govgr-footer" role="contentinfo">
            <div class="govgr-width-container">
                <div class="govgr-footer__meta">
                    <div class="govgr-footer__meta-item govgr-footer__meta-item--grow">
                        <div class="govgr-footer__content">
                            <div class="govgr-footer__content--logos">
                                <a href="https://empedu.gov.gr/" target="_blank" rel="noreferrer noopener" class="govgr-link"> 
                                    <img src="/epanadvm_footer_2.png" alt="espa"/>
                                    <span class="govgr-visually-hidden"></span>
                                </a>
                            </div>
                            <p class="govgr-footer__licence-description">© Copyright 2024 - Υλοποίηση από το 
                                <a href="https://grnet.gr/" target="_blank" rel="noreferrer noopener" class="govgr-link"> ΕΔΥΤΕ 
                                    <span class="govgr-visually-hidden"></span>
                                </a> με χρήση 
                                <a href="https://mathe.ellak.gr/" target="_blank" rel="noreferrer noopener" class="govgr-link"> Ανοικτού Λογισμικού.</a> 
                                &nbsp;- &nbsp; 
                                <a href="https://www.gov.gr/info/oroi-xrisis" target="_blank" rel="noreferrer noopener" class="govgr-link"> 
                                    Όροι Χρήσης <span class="govgr-visually-hidden"></span>
                                </a> 
                            </p>
                        </div>
                    </div>
                    <div class="govgr-footer__meta-item">
                        <a href="https://ypergasias.gov.gr/isotita-ton-fylon/programma-ntantades-tis-geitonias/" target="_blank" rel="noreferrer noopener" class="govgr-link"> 
                            <img src="/YPEKY.png" alt="ypeki" class="govgr-footer__government-logo"/>
                            <span class="govgr-visually-hidden"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;