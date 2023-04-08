import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className='App'>
      <Navbar title = "TextUtils23" aboutText="About TextUtils"/>
      <div className='container my-3'></div>
      <TextForm heading="Enter the text to analyze below"></TextForm>
    </div>
  );
}

export default App;
