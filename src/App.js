import './App.css';
import Fileupload from './pages/Fileupload'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Excel file uploader
      </header>
      <section className="container-main">
        <Fileupload />
      </section>
    </div>
  );
}

export default App;
