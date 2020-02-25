import React from 'react';
import {useParams} from 'react-router-dom';
const Detail = () => {
    const {id, name}= useParams();

    console.log(id);
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>

        </div>
    );
};

export default Detail;