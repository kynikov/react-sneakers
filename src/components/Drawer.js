function Drawer({onClose, onRemove, items = [] }) {
   return (
      <div  className="overlay">
       <div className="drawer">
        <h2 className=" d-flex justify-between mb-30">Карзина{' '} 
          <img onClick={onClose} className="removeBtn cu-p" src="/IMG/btn-remove.svg" alt="Close"/>
        </h2>

        {
          
          items.length > 0 ? <div className="items">
          {items.map((obj) => (
          <div className="cartItem d-flex align-centerm mb-20">
               <div
                 style={{ backgroundImage: `url(${obj.imageUrl})` }}
                 className="cartItemImg"></div>

                 <div className="mr-20 flex">
                   <p className="mb-5">{obj.title}</p>
                   <b>{obj.price} BGN</b>
                 </div>
                 <img onClick={() => onRemove(obj.id)} 
                  className="removeBtn" src="/IMG/btn-remove.svg" 
                  alt="Remove" />
              </div>
           ))}        
         </div> : <div class="cartEmpty d-flex align-center justify-center flex-column flex">
          <img class="mb-20" width="120px" height="120px" src="/IMG/empty-cart.jpg" alt="" />
          <h2>Карзина пустая</h2>
          <p class="opacity-6">Добавте хотя бы одну пару кроссовакБ чтобы сделать заказ.</p>
          <button class="greemButton">

            <img src="/IMG/arrow.svg" alt="" />
            Вернуться назад
          </button>
         </div>
        }
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