import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title: "Игровой компьютер RTX 3060 Core i5-10400F",
          img: "Игровой компьютер RTX 3060 Core i5-10400F.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "PC",
          price: "65000 ₽"
        },
        {
          id: 2,
          title: "Игровой компьютер RTX 3080Ti Ryzen 7 5800X",
          img: "Игровой компьютер RTX 3080Ti Ryzen 7 5800X.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "PC",
          price: "158000 ₽"
        },
        {
          id: 3,
          title: "Игровой компьютер RTX 3060 Ti Core i5 12400F",
          img: "Игровой компьютер RTX 3060 Ti Core i5 12400F.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "PC",
          price: "83000 ₽"
        },
        {
          id: 4,
          title: "Игровой компьютер RTX 3070 Core i7-10700",
          img: "Игровой компьютер RTX 3070 Core i7-10700.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "PC",
          price: "91000 ₽"
        },
        {
          id: 5,
          title: "Видеокарта Rtx 3070 eagle 8 GB",
          img: "Видеокарта Rtx 3070 eagle 8 GB.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "VidCard",
          price: "34000 ₽"
        },
        {
          id: 6,
          title: "Видеокарта RTX 3080Ti Colorful igame",
          img: "Видеокарта RTX 3080Ti Colorful igame.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "VidCard",
          price: "83000 ₽"
        },
        {
          id: 7,
          title: "Видеокарта RTX 3070 aorus master 8GB",
          img: "Видеокарта RTX 3070 aorus master 8GB.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "VidCard",
          price: "51000 ₽"
        },
        {
          id: 8,
          title: "Видеокарта RTX 3070 Gigabyte Gaming OC 8 Gb",
          img: "Видеокарта RTX 3070 Gigabyte Gaming OC 8 Gb.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "VidCard",
          price: "50000 ₽"
        },
        {
          id: 9,
          title: "Игровой компьютер RTX3060 Core i5-11400F",
          img: "Игровой компьютер RTX3060 Core i5-11400F.jpeg",
          description:"Мощный Игровой системный блок.Всё комплектующие новые!Гарантия 365 календарных дней.",
          category: "PC",
          price: "73000 ₽"
        },
      ]
    }
    this.addtoOrder = this.addtoOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  render() {
  return (
    <div className='wrapper'>
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addtoOrder}/>
      <Footer />
    </div>
  );
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addtoOrder(item){
    let isInArray = false
    this.state.orders.forEach(el =>{
      if(el.id===item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
