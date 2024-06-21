import React from 'react';
import loading from './loading.gif';

const Loader = () => {
    return (
        <div className="loader">
        <img src={loading} alt="loading" />
        </div>
    );
};

export default Loader;
