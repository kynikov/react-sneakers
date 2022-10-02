
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
      <div className="drawer">
        <h2 className=" d-flex justify-between mb-30">Карзина <img className="removeBtn cu-p" src="/IMG/btn-remove.svg" alt="Remove"/></h2>
        <div className="items">        
          <div className="cartItem d-flex align-centerm mb-20">
            <div style={{backgroundImage: 'url(/IMG/sneakers/01.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/IMG/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-centerm mb-20">
            <div style={{backgroundImage: 'url(/IMG/sneakers/01.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/IMG/btn-remove.svg" alt="Remove"/>
          </div>
          <div className="cartItem d-flex align-centerm mb-20">
            <div style={{backgroundImage: 'url(/IMG/sneakers/01.jpg)'}} className="cartItemImg"></div>
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeBtn" src="/IMG/btn-remove.svg" alt="Remove"/>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b> 21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenBtn">Оформить заказ <img src="IMG/arrow.svg" alt="" /> </button>
        </div>
      </div>
      </div>
      <header className="d-flex justify-between align-center p-40">    
        <div className="d-flex align-center">
          <img width={40} height={40} src="/IMG/logo.png" alt=""/>
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/IMG/card.svg" alt=""/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/IMG/user.svg" alt=""/>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/IMG/search.svg" alt="Search"/>
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="d-flex">
        <div className="card">
          <div className="favorite">
            <img src="/IMG/heart-unliked.svg" alt=""/>
          </div>
          <img width={133} height={112} src="/IMG/sneakers/01.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img src="/IMG/heart-unliked.svg" alt=""/>
          <img width={133} height={112} src="/IMG/sneakers/02.jpg" alt="Unliked"/>
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/03.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>8 499 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/04.jpg" alt=""/>
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/05.jpg" alt=""/>
          <h5>Мужские Кроссовки Under Armour Curry 8</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/06.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Kyrie 7</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/07.jpg" alt=""/>
          <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/08.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/09.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Lebron XVIII Low</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/10.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/11.jpg" alt=""/>
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/IMG/sneakers/12.jpg" alt=""/>
          <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/IMG/plus.svg" alt=""/>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
