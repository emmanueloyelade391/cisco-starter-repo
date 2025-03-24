import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <div className="p-4">
        <Exhibit heading="Example Exhibit">
          <p>This is an example of an exhibit component!</p>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
