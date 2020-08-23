import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    showModal() {
        this.setState({showModal: true});
    }

    closeModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div class="card terf-card col-3 mx-1 my-1">
                <div class="c-hand card-image">
                    <img class="img-responsive terf-img" onClick={() => this.showModal()} src={this.props.img} alt={this.props.alt} />
                </div>

                <div className={"modal modal-lg "+(this.state.showModal ? "active" : "")}>
                    <a href="#close" class="modal-overlay" aria-label="Close" onClick={() => this.closeModal()}></a>
                    <div class="modal-container">
                        <div class="modal-body">
                            <div class="content">
                                <img src={this.props.img} alt={this.props.alt} class="img-responsive"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageCard;