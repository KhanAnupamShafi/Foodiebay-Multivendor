import React, { useEffect, useState } from 'react';
import Meals from './Meals';

const RiceDishes = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/menus?item=Rice Dishes')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div>
            <div class="divider text-3xl font-extrabold mx-28 py-5">RICE DISHES</div>
            <div className='w-2/3 mx-32 mx-auto grid grid-cols-4 gap-1 gap-0'>
                {
                    meals.map(meal =><Meals 
                        key={meal._id}
                        meal={meal}
                        >
                        </Meals> )
                }
            </div>
            
        </div>
    );
};

export default RiceDishes;