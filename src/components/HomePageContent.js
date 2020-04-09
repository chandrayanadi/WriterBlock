import React from 'react';
import HomePagePhoto from '../img/HomeContent.jpg';

export const HomePageContent = () => {
    return (
        <div class="container my-5 p-5 z-depth-1" style = {styleHome}>
            <section class="dark-grey-text">
                <h2 class="text-center font-weight-bold mb-4 pb-2">Why is it so great?</h2>
                <p class="text-center lead grey-text mx-auto mb-5">
                    Get help, feedback, ideas and reviews, instantaneously. Loved your work? Publish in a matter of seconds.
                </p>
                <div class="row">
                    <div class="col-md-4">
                        <div class="row mb-3">
                            <div class="col-2">
                                <i class="fas fa-2x fa-flag-checkered deep-purple-text"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="font-weight-bold mb-3">
                                    Write
                                </h5>
                                <p class="grey-text">
                                    Develop your masterpiece, part by part. Get your editor, publisher and critique, all in one place. 
                                </p>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-2">
                                <i class="fas fa-2x fa-flask deep-purple-text"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="font-weight-bold mb-3">
                                    Experiment
                                </h5>
                                <p class="grey-text">
                                    Hit a block? Seek help from your community. Liked their contribution, merge into your piece, while maintaining multiple versions. 
                                </p>
                            </div>
                        </div>
                        <div class="row mb-md-0 mb-3">
                            <div class="col-2">
                                <i class="fas fa-2x fa-glass-martini deep-purple-text"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="font-weight-bold mb-3">
                                    Read
                                </h5>
                                <p class="grey-text mb-md-0">
                                    Like reading? Read from multiple authors, review their work and contribute if you have ideas. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <img class="img-fluid" src={HomePagePhoto} alt="Sample" />
                    </div>
                    <div class="col-md-4">
                        <div class="row mb-3">
                            <div class="col-2">
                                <i class="far fa-2x fa-heart deep-purple-text"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="font-weight-bold mb-3">
                                    Review
                                    </h5>
                                <p class="grey-text">
                                    Liked someones work? Appreciate by liking and sharing the post. 
                                    </p>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-2">
                                <i class="fas fa-2x fa-bolt deep-purple-text"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="font-weight-bold mb-3">
                                    Publish
                                </h5>
                                <p class="grey-text">
                                    Loved your work, publish your work as an e-book and share wth your friends and family
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <i class="fas fa-2x fa-magic deep-purple-text"></i>
                            </div>
                            <div class="col-10">
                                <h5 class="font-weight-bold mb-3">
                                    Rapid
                                    </h5>
                                <p class="grey-text mb-0">
                                    Love speed? Go through the entire lifecycle at supersonic speed. Go from ideation to publishing superfast. The only thing stopping you is you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

var styleHome = {
    overflow: 'scroll',
    background : 'white'
}
    