import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://6341d49520f1f9d7997a8434.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://6341d49520f1f9d7997a8434.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://6341d49520f1f9d7997a8434.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    //axios.delete(`https://6341d49520f1f9d7997a8434.mockapi.io/cart/&{id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }
  const onChangeSearchInput= (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запрос: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="/IMG/search.svg" alt="Search"/>
            {searchValue && <img onClick={() => setSearchValue('')} className="cu-p clear" src="/IMG/btn-remove.svg" alt="Close"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Дабавлю в закладки')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
/*
  <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/IMG/search.svg" alt="Search"/>
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onFavorite={() => console.log('Дабавлю в закладки')}
            onPlus={() => console.log('Поставил лайк')}
            />
          ))}
        </div>
      </div> */
