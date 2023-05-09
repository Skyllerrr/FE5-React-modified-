import './App.css';
import TripList from './tripList/TripList';

/*
import Menu from './components/menu/Menu.jsx'
import NewMenu from './components/newMenu/NewMenu'
*/

function App() {

  /*
  const name1 = "라이캣! 1호"
  const name2 = "라이캣 2호!";

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  */

  

  return (
    <div>
      <TripList/>
    </div>
  )

  /*
  return (
    <div>
        <NewMenu />
        <Menu />
        <input type="radio" checked></input>
          <h1 hello="hi" style={{backgroundColor: "black", color: "white"}}>안녕, {name1}</h1>
          <h1 hello="hi">안녕, {name2}</h1>
        <div style={{backgroundColor:"black", color:"white"}}>
          <h1 style={{color:'red'}}>년 : {year}</h1>
          <h1>월/일 : {month}/{date}</h1>
          <h1>시간 : {hour}시 {min}분 {sec}초</h1>
        </div>
        <div>
          
        </div>


    </div>
  );
  */
}

export default App;
