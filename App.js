import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <label htmlFor="avatar">Choose a profile picture:</label>

        <form method="post" encType="multipart/form-data">
    <div>
      <label htmlFor="file">Choose file to upload</label>
      <input type="file" id="file" name="file" multiple />
    </div>
    <div>
      <button>Upload</button>

    </div>
   
</form>
</p>
      

      </header>
    </div>
  );
}

export default App;
