import React from 'react';

const Expart = ({ expert }) => {
    const { name, img, expertize } = expert
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className="text-danger">{expertize}</p>
        </div>
    );
};

export default Expart;