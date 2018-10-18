import React from 'react'
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Search = () => {
  return (
<form className="example" >
  <input type="text" placeholder="Enter Github Username" name="search"></input>
  <div className="icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
</form>
  );
};

export default Search;