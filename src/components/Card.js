function Card() {
   return (
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
   );
}
export default Card;