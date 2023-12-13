// import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Collab from './Components/Collab';
import Main from './Components/Main';
import Navbar from './Components/Navbar';



function App() {
  return (
    <>
   <Navbar logo="Hello" />   
   {/* <Navbar /> */}
   <Main title={"Hello"}/>
   <Collab />
   <Cards name="Jay" />
</>
  );
}

export default App;
