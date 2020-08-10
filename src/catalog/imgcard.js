import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="card terf-card col-3 mx-1 my-1">
                <div class="card-image">
                    <img class="img-responsive terf-img" src={this.props.img} />
                </div>
            </div>
        )
    }
}

export default ImageCard;