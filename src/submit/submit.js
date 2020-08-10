import React from 'react';

class SubmitPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            emailCopied: false
        }
    }

    copyEmail = () => {
        this.setState({emailCopied: true}, () => {
            navigator.clipboard.writeText("peakterf@gmail.com");
        });
    }

    render() {
        return (
            <div class="container py-2">
                <div class="columns">
                    <div class="column col-9 col-mx-auto" style={{maxWidth: 1024}}>
                        <div class="card">
                            <div class="card-header">
                                <div class="card-title h4">Submit</div>
                            </div>
                            <div class="card-body">
                                <div class="card-title h5">Submission Places</div>
                                <p>Submissions can be sent to us through the following channels</p>
                                <p>
                                    <a href="https://twitter.com/peakTERF" class="fab fa-twitter fa-2x btn btn-link"></a>
                                    <a href="https://discord.com/invite/kX2MwcK" class="fab fa-discord fa-2x btn btn-link"></a>
                                    <div class="popover popover-right">
                                        <a onClick={this.copyEmail} class="fas fa-envelope fa-2x btn btn-link"></a>
                                        {
                                            this.state.emailCopied?

                                            <div class="popover-container">
                                                    Copied!
                                            </div>
                                            : 
                                            <div></div>
                                        }
                                    </div>
                                </p>

                                <div class="card-title h5">Submission Rules</div>
                                <ul>
                                    <li>The person must be a TERF, not a regular transphobe</li>
                                    <li>Submission must contain a threat or a wish/intention to harm</li>
                                </ul>
                                <small>for examples you can look at the catalog <br />See link buttons above <br />Clicking email icon will copy the address</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default SubmitPage;
