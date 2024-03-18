import React from 'react';
import useCoupon from '../../../Hooks/useCoupon';

const ManageCoupon = () => {
    const [coupon] = useCoupon();
    console.log(coupon)
    return (
        <div>
            
        </div>
    );
};

export default ManageCoupon;