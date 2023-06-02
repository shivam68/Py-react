// import './App.css';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
function App() {
  return(
    <><Navbar/>
    
    <div className="d-flex gap-4 justify-content-center pt-5">
    
        <Cards  title="Javascript"
        src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400"
        prag="loreum10 loreum10loreum10loreum10loreum10loreum10loreum10loreum10"
        />
       <Cards  title="Nodejs"
        src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400"
        prag="loreum10 loreum10loreum10loreum10loreum10loreum10loreum10loreum10"
        />
       <Cards  title="Reactjs"
        src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400"
        prag="loreum10 loreum10loreum10loreum10loreum10loreum10loreum10loreum10"
        />
    </div> 
    </>

  )
}

export default App;
