import React, {Component} from 'react';
import {SecretWord} from "./secretWord";
import {ProgressPictures} from "./progressPictures";

class InputWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            init: false,
            hideClick: false,
            word: [],
            letters: [],
            letter: '',
            faultCounter: 0,
            finished: false,
        };
    }

    searchLetter() {
        const indexOfLetter = this.state.word.indexOf(this.state.letter);
        if (indexOfLetter === -1) {
            this.setState({
                faultCounter: this.state.faultCounter + 1
            })
        } else {
            const letters = this.state.letters.map((item) => {
                if (item.letter === this.state.letter) {
                    item.check = true;
                }
                return item;
            })
            this.setState({
                letters: letters
            })
        }
        
        this.setState({
            letter: '',
        })
    }

    showSecretWord(word) {
        const letters = word.map((letter, index) => {
            return {id: index, letter: letter, check: false};
        });

        this.setState({
            letters: letters,
            hideClick: !this.state.hideClick,
            init: true
        });
    }

    render() {
        return (
            <div>
                <p>
                    Загадайте слово: <input value={this.state.inputValue}
                                            onChange={(event) =>
                                                this.setState({
                                                    inputValue: event.target.value.trim().toLowerCase(),
                                                    word: event.target.value.split('')
                                                })
                                            }
                                            style={{'display': this.state.hideClick ? 'none' : ''}}/>
                </p>
                {this.state.inputValue.length > 0 ?
                    <div>
                        {!this.state.hideClick
                            ? <button onClick={() => this.showSecretWord(this.state.word)}
                                      style={{backgroundColor: '#63c863'}}>
                                Играть
                            </button>
                            : ''
                        }

                        <button onClick={() => {
                            this.setState({
                                hideClick: !this.state.hideClick,
                            })
                        }}
                                style={{backgroundColor: '#c2bbbb'}}
                        >{this.state.hideClick ? 'Показать слово' : 'Спрятать'}
                        </button>
                    </div>
                    : ''
                }

                <SecretWord word={this.state.letters}/>

                {this.state.faultCounter < 9 ?
                    <ProgressPictures data={this.state.faultCounter}/>
                    : ''
                }

                {this.state.init ?
                    <div>
                        Найти букву: <input type="text"
                                            value={this.state.letter}
                                            maxLength='1'
                                            size='1'
                                            style={{textAlign: 'center'}}
                                            onChange={(event) =>
                                                this.setState({
                                                    letter: event.target.value.trim().toLowerCase(),
                                                })
                                            }/>
                        <button onClick={() => {
                            this.searchLetter()
                        }}
                                style={{backgroundColor: '#95c292'}}
                                disabled={!this.state.letter.trim()}
                        >Найти
                        </button>
                    </div>
                    : ''
                }
            </div>
        );
    }
}

export default InputWord;
