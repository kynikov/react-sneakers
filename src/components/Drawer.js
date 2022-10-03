function Drawer() {
   return (
      <div style={{display: 'none'}} className="overlay">
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
   );
}
export default Drawer;