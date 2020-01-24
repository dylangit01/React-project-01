import React from "react";

// export const Card = ({name, email, id}) => {
//     return (
//         <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
//             <img alt='robots' src={`https://robohash.org/${id}?/200x200`} />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     );
// };


// Below props get array from CardList
export const Card = (props) => {
    const {id, name, email} = props.user
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?/200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
