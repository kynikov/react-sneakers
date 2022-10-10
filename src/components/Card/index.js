import React from 'react';
import styles from './Card.module.scss';

console.log(styles);
function Card({ onFavorite, onPlus, imageUrl, title, price}) {
   const [isAdded, setIsAdded] = React.useState(false);

   const onClickPlus = () => {
      onPlus({title, imageUrl, price});
      setIsAdded(!isAdded);
   }
   return  (
      <div className={styles.card}>
       <div className="styles.favorite" onClick={onFavorite}>
        <img src="/IMG/heart-unliked.svg" alt="Unliked" />
       </div>
       <img width={133} height={112} src={imageUrl} alt="Sneakers" />
       <h5>{title}</h5>
       <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
         <span>Цена:</span>
         <b>{price} BGN</b>
        </div>
        <img
         className={styles.plus} onClick={onClickPlus} 
         width={21} height={21} 
         src={isAdded ? "/IMG/btn-checked.svg" : "/IMG/btn-plus.svg"} alt="Plus" />
       </div>
      </div>
   );
}
export default Card;