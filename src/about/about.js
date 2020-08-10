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
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title h4">About</div>
                            </div>
                            <div class="card-body">
                                <p>Terfs (trans-exclusionary radical feminists) have claimed for too long that they’re peaceful, this website was made in order to document terfs being violent</p>
                                <p>&nbsp;</p>
                                <p>we do not condone the harassment of anyone shown and documented on this website</p>
                            </div>
                            <div class="card-image">
                                <img src="https://peakterf.com/wp-content/uploads/2020/08/del-1024x576.jpg" class="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutPage;