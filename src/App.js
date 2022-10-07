import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
const arr = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl:'/IMG/sneakers/01.jpg'},
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, imageUrl:'/IMG/sneakers/02.jpg'},
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl:'/IMG/sneakers/03.jpg'},
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl:'/IMG/sneakers/04.jpg'}
];
function App() {
  return (
    <div className="wrapper clear">
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
      </div>
    </div>
  );
}

export default App;
