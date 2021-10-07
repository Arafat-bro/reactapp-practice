import React,{useState} from "react";
import SearchResult from "./SearchResult";


const Search = () => {
    const [img, setImg] = useState();
    
    const searchInp = (e) => {
        const val = e.target.value;
        setImg(val);
        // console.log(val);
    }
    return (
        <>
            <input type="serch" id="" value={img} className="mb-4" placeholder=" Search anything" onChange={searchInp} />

            {img === "" ? null :
                <SearchResult name={img} />
            }
        </>
    )
}
export default Search;