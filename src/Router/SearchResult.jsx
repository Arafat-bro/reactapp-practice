import React from "react";


const SearchResult = (props) => {
    const imgLink = `https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <div className="mt-2 mb-3">
                <img src={ imgLink} alt="img"/>
            </div>
        </>
    )
}
export default SearchResult;