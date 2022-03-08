// import logo from './logo.svg';
import './App.css';
import FilterContainer from './components/filter/FilterContainer'
// import SearchContainer from './components/search/SearchContainer'
import ResultsContainer from './components/results/ResultsContainer'

// import {BrowserRouter,  Routes, Route} from 'react-router-dom';

function App() {
  return (
        <div className='app-wrapper'> 
         <FilterContainer/>
         {/* <SearchContainer/> */}
         <ResultsContainer/>
        </div>
  );
}

export default App;
