import React,{useState} from "react";
import axios from "axios";


const SearchBar = ({setSearchResults}) => {
    console.log("Any message");


    const [searchTerm,setSearchTerm] = useState("");

    function implementSearch(e) {
        e.preventDefault();
        axios.get("https://api.unsplash.com/search/photos",{
            headers:{
                Authorization:`Client-ID zDa5oWx85v2-pIlyPTs6rINGx9OB7vJhWLfzEgc_bsU`
            },
            params:{
                query:searchTerm
            }
        })
        .then(response => {
            setSearchResults(response.data.results)
            console.log(response.data.results);
            setSearchTerm("")
         })
        .catch(error => console.log(error))
    }


    return(
        <div>
            <form onSubmit={implementSearch}>
                <input type="text" placeholder="Search..." 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <h1>Search for IMAGES</h1>
        </div>
    );
}


export default SearchBar;