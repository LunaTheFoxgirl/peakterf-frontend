import React from 'react';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container py-2">
                <div class="columns">
                    <div class="column col-9 col-mx-auto" style={{maxWidth: 1024}}>
                        <div class="card my-2">
                            <div class="card-header">
                                <div class="card-title h4">About</div>
                            </div>
                            <div class="card-body">
                                <p>TERFs (Trans-Exclusionary Radical Feminists) have claimed for too long that they’re peaceful, this website was made in order to document TERFs being violent</p>
                                <p class="text-bold">We do not condone the harassment of anyone shown and documented on this website.</p>
                            </div>
                            <div class="card-image">
                                <img alt="Trans flag" src="/trans-rights.jpg" class="img-responsive" />
                            </div>
                        </div>
                        <div class="card my-2">
                            <div class="card-header">
                                <div class="card-title h4">Credits & Aknowledgements</div>
                            </div>
                            <div class="card-body">

                                <div class="card-title h5">Code</div>
                                <p><a href="https://twitter.com/Clipsey5">Luna</a></p>

                                <div class="card-title h5">Open source</div>
                                <p>The following open source libraries were used in creating this site</p>
                                <ul>
                                    <li>React.js</li>
                                    <li>Spectre.css</li>
                                    <li>vibe.d</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;