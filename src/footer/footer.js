import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './footer.css'

class footer extends Component {
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
            <footer class="main-footer">
                    <div class="auto-container">
                        <div class="widgets-section wow fadeInUp animated">
                            <div class="row">
                                <div class="big-column col-xl-4 col-lg-3 col-md-12">
                                    <div class="footer-column about-widget">
                                        <div class="logo"><a href="#">
                                            <img alt="Logo web" src="/assets/logoweb-727cd8a68dbc9c4351067553cacb93d791e8f9a7e7e67383ba00f07e5afff092.png"/> 
                                            </a>
                                        </div>
                                        <p class="address"><a href="mailto:support@devfinding.com" class="email">support@devfinding.com</a></p>
                                    </div>
                                </div>
                                <div class="big-column col-xl-8 col-lg-9 col-md-12">
                                    <div class="row">
                                        <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                                            <div class="footer-widget links-widget">
                                                <h4 class="widget-title">For Candidates</h4>
                                                <div class="widget-content">
                                                    <ul class="list">
                                                        <li><a href="/candidate_jobs">Browse Jobs</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                                            <div class="footer-widget links-widget">
                                                <h4 class="widget-title">For HR Freelancers</h4>
                                                <div class="widget-content">
                                                    <ul class="list">
                                                        <li><a href="/hr_freelancer_jobs">For HR Freelancers</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="footer-column col-lg-4 col-md-6 col-sm-12">
                                            <div class="footer-widget links-widget">
                                                <h4 class="widget-title">Remote Jobs</h4>
                                                <div class="widget-content">
                                                    <ul class="list">
                                                        <li><a href="/remote_jobs">For Remote Jobs</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="auto-container">
                            <div class="outer-box">
                                <div class="copyright-text">© 2020 <a href="#">
                                <strong>
                                    DevFinding
                                </strong>
                                </a>. All Right Reserved.</div>
                                <div class="social-links">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="scroll-to-top scroll-to-target" data-target="html" style={{display: 'block'}}><span class="fa fa-angle-up"></span></div>
                </footer>
        );
    }
}

footer.propTypes = {

};

export default footer;