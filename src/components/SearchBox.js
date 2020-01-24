import React from "react";

export const SearchBox =({searchChange, placeholder}) => {
    return(
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type="search"
                placeholder= {placeholder}
                onChange={searchChange}
            />
        </div>
    )
};


