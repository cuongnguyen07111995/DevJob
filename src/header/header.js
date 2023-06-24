import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css'

class header extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <header class="main-header fixed-header animated slideInDown">
                    <div class="main-box">           
                        <div class="nav-outer">
                            <div class="logo-box">
                                <div class="logo"><a href="/">
                                    <img alt="Logo web" src="https://devfinding.com/assets/logoweb-727cd8a68dbc9c4351067553cacb93d791e8f9a7e7e67383ba00f07e5afff092.png"/> 
                                    </a>
                                </div>
                            </div>
                            <nav class="nav main-menu">
                                <ul class="navigation" id="navbar">
                                    <li class="current">
                                        <span>
                                            <a href="/">
                                                <strong>
                                                    Home
                                                </strong>
                                            </a>
                                        </span>
                                    </li>
                                    <li class="">
                                        <span>
                                            <a href="/candidate_jobs">
                                                <strong>
                                                    Find Jobs
                                                </strong>
                                            </a>
                                        </span>
                                    </li>
                                    <li class="">
                                        <span>
                                            <a target="_blank" href="https://t.me/jobforgooddev">
                                                <strong>
                                                    Join Telegram
                                                </strong>
                                            </a>
                                        </span>
                                    </li>
                                    <li class="">
                                        <span>
                                            <a href="/remote_jobs">
                                                <strong>
                                                    Remote Jobs
                                                </strong>
                                            </a>
                                        </span>
                                    </li>
                  
                                    <li class="mm-add-listing">
                                        <a href="/hr_freelancer_jobs" class="theme-btn btn-style-one">
                                            <strong>
                                                HR Freelancers
                                            </strong>
                                        </a>
                                        <br/>
                                        <a href="/hr_freelancers/sessions/signup" class="theme-btn btn-style-one">
                                            <strong>
                                                SignUp Hr
                                            </strong>
                                        </a>
                                        <br/>
                                        <a href="/hr_freelancers/sessions/signin" class="theme-btn btn-style-one">
                                            <strong>
                                                SignIn Hr
                                            </strong>
                                        </a>
                                        <br/>
                                        <span>
                                        <span class="contact-info">
                                        <a href="mailto:support@devfinding.com" class="email">
                                            <strong>
                                                support@devfinding.com
                                            </strong>
                                        </a>
                                        </span>
                                        <span class="social-links">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-linkedin-in"></span></a>
                                        </span>
                                        </span>
                                    </li>
                                </ul>
                            </nav>
                          
                        </div>
                        <div class="outer-box">
                            <div class="btn-box">
                                <a href="/hr_freelancer_jobs" class="theme-btn btn-style-one">
                                    <strong>
                                        HR Freelancer Jobs
                                    </strong>
                                </a>
                            </div>
                            <div class="btn-box">
                                <a href="/hr_freelancers/sessions/signup" class="theme-btn btn-style-one">
                                    <strong>
                                        SignUp HR
                                    </strong>
                                </a>
                            </div>
                            <div class="btn-box">
                                <a href="/hr_freelancers/sessions/signin" class="theme-btn btn-style-one">
                                    <strong>
                                        SignIn HR
                                    </strong>
                                </a>
                            </div>
                        </div>
                    </div>
    
                <div class="mobile-header">
                    <div class="logo"><a href="/">
                        <img alt="Logo web" src="/assets/logoweb-727cd8a68dbc9c4351067553cacb93d791e8f9a7e7e67383ba00f07e5afff092.png"/> 
                        </a>
                    </div>

                    <div class="nav-outer clearfix">
                        <div class="outer-box">
                            <div class="login-box">
                                <a href="login-popup.html" class="call-modal"><span class="icon-user"></span></a>
                            </div>
                            <a href="#nav-mobile" class="mobile-nav-toggler"><span class="flaticon-menu-1"></span></a>
                        </div>
                    </div>
                </div>
                
            </header>
        );
    }
}

header.propTypes = {

};

export default header;