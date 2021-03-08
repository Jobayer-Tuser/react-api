import React from 'react';

function Loader(){

    return(
        <div className="d-flex align-items-center">
            <strong>Loding...</strong>
            <div className="spinner-border text-danger ml-auto" role="status" aria-hidden="true"></div>
        </div>
    );

}

export default Loader;