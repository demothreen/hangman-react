import React, {Component} from 'react';

class SecretWord extends Component {
    render() {
        return (
            <p>
                {this.props.word.map(option =>
                    <input size="1"
                           style={{textAlign: 'center'}}
                           key={option.id}
                           value={option.check ? option.letter : ''}
                           disabled
                    >
                    </input>
                )
                }
            </p>
        );
    }
}

export default SecretWord;
