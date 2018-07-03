import React from 'react';

export const SecretWord = ({word}) => {
    return (
        <p>
            {word.map(option =>
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
    )
}
