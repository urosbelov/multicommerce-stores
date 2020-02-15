import React from 'react';
import {Spin} from 'antd';

export default function Spinner(props) {
    if (props.error) {
        return <div>Doslo je do greske!</div>;
    } else if (props.delay) {
        return <Spin />;
    } else {
        return null;
    }
}
