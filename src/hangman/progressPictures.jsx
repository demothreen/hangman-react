import React, {Component} from 'react';

export const ProgressPictures = ({data}) => {
    const pic = require('../pics/' + data + '.JPG')
    return (
        <div>
            <img src={pic} width="400" height="400" alt=""/>
        </div>
    )
}