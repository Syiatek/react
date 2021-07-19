/*
* @autor steven
 */

import React from 'react';
import './PureCompo.css'

export const PureCompo = () => {
    return (
        <div>
            <h6 className= "pure-h6">pure compo</h6>
        </div>
    );
};
export const PureCompoProps = ({label, age}) => {
    return (
        <div>
            <h6 className= "pure-h6">pureProps compo {label} {age}</h6>
        </div>
    );
};

// export default PureCompo;