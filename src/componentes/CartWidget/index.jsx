import './index.css';
import cartIcon from './cart-icon.png'

const CartWidget = ()  => {
    return (
        <>
            <div className='cart-widget'>
                <img src={cartIcon} alt="cart-icon"/>
                <span>0</span>
            </div>
        </>
    )
}

export default CartWidget