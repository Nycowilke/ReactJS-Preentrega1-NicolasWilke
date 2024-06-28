
import Navbar from './components/NavBar/NavBar' 
 
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'



function App() {

  return (
  
    <div>
      <Navbar />
      <ItemListContainer greeting={'¡Bienvenidos a wineApp!'}/>
      
    </div>
  );
};
  
export default App
