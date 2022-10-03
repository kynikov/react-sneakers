function Header() {
   return (
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
   );
}
export default Header;