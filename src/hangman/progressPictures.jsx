import React, {Component} from 'react';

class ProgressPictures extends Component {
    render() {
        const pic = require('../pics/' + this.props.data + '.JPG')
        return (
            <div>
                <img src={pic} width="400" height="400" alt=""/>
            </div>
        );
    }
}

export default ProgressPictures;
