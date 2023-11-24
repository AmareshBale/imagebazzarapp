import React,{useState} from "react";
import SearchBar from "./Components/Display";
import Display from "./Components/Display";




const App = () => {
  const [searchResults,setSearchResults] = useState([])



  return(
    <div>
      <h1>Amaresh</h1>
      <SearchBar setSearchResults={setSearchResults}/>
      <Display searchResults={searchResults}/>
    </div>
  )
}

export default App;