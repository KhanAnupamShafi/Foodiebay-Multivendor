import React from 'react';

const Meals = ({meal}) => {

    const{_id,name,image,category}=meal
    
    return (
        <div>
            <div class="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={image} alt="mneu picture" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name:{name}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Meals;