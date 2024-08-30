import logo from './logo.svg';
import './App.css';
import Header from './common/header';
import Home from './pages/Home';
import Footer from './common/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
