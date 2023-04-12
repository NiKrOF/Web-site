import React, {useState} from 'react'
import {BsFillCartFill} from "react-icons/bs"
import Order from './Order'

const showOrders = (props) =>{
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<div>
      {props.orders.map(el=>(
          <Order onDelete={props.onDelete} key={el.id} item={el}></Order>
      ))}
      <p className='summa'>Сумма: {summa}₽</p>
  </div>)
}

const showNothing = () =>{
  return(<div className='empty'>
        <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
    <div className='header_presentation'>
        <span className='logo_name'>Giesoft</span>
        
        {cartOpen && (
            <div className='shop-cart'>
              {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
            </div>
        )}
        <nav>
          <ul>
            <a href=''><li>Главная</li></a>
            <a href=''><li>О нас</li></a>
            <BsFillCartFill onClick={() => setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
          </ul>
        </nav>
        
    </div>
    <div className='presentation'></div>
</header>
  )
}
