import styles from './Card.module.scss';

console.log(styles);
function Card(props) {
   console.log(props);
   return  (
      <div className={styles.card}>
       <div className="favorite">
        <img src="/IMG/heart-unliked.svg" alt="Unliked"/>
       </div>
       <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
       <h5>{props.title}</h5>
       <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
         <span>Цена:</span>
         <b>{props.price} руб.</b>
         </div>
        <button className="button" onClick={props.presClick}>
         <img width={11} height={11} src="/IMG/plus.svg" alt="Plus"/>
        </button>
       </div>
      </div>
   );
}
export default Card;