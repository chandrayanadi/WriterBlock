import React from 'react'
import '../App.css';

export const Footer = () => {
    return (
        <footer className="page-footer font-small unique-color-dark" style = {stylemainblack}>
            <div style={styleupperblock}>
                <div className="wrapper" >
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="fb-ic" href="www.moneeplant.com">
                                <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic" href="www.moneeplant.com">
                                <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic" href="www.moneeplant.com">
                                <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a className="li-ic" href="www.moneeplant.com">
                                <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="www.moneeplant.com">
                                <i className="fab fa-instagram white-text"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">About Pentar</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                        <p>Pentar is a literature marketplace. Write stories, contribute to others, get peer reviewed and publish if you so desire, Pentar is your end to end solution to everything literature. </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Stories</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                            <p>
                                <a href="#!">Trending</a>
                            </p>
                            <p>
                                <a href="#!">Best Rated</a>
                            </p>
                            <p>
                                <a href="#!">Most Contributions</a>
                            </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">FAQ</a>
                            </p>
                            <p>
                                <a href="#!">Careers</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase font-weight-bold">Contact</h6>
                        <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={stylecontent}/>
                            <p><i className="fas fa-home mr-3"></i> Mumbai, IN</p>
                            <p><i className="fas fa-envelope mr-3"></i> support@pentar.com</p>
                            <p><i className="fas fa-phone mr-3"></i> + 91 7678337940</p>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="www.stockpit.com"> Penter TM</a>
            </div>
        </footer>
    )
}

var stylecontent = {
    width: '60px'
}

var styleupperblock = {
    background: '#6351ce',
    color: 'white',
}

var stylemainblack = {
    background: 'lavender',
    left: 0,
    bottom: 0,
    width: "100%",
}

