// import React from "react";

// export default function Card(props) {
//   return (
//     <div className="card">
//       <div className="cardImage">
//         <img src={`${props.image}`} alt="" />
//       </div>

//       <div className="card-content">
//         <h2 className="card-title">{`${props.title}`}</h2>

//         <div className="card-body">
//           <p className="card-author">{`${props.author}`}</p>
//           <button className="card-buy">
//             <b>BUY</b>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="cardImage">
        <img
          src={
            props.image
              ? props.image
              : "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          }
          alt=""
        />
      </div>

      <div className="card-content">
        <h2 className="card-title">
          {props.title && props.title.slice(0, 21)}
        </h2>

        <div className="card-body">
          <p className="card-author">
            {props.author && props.author.slice(0, 10)}
          </p>

          <a href={props.link ? props.link : "/"}>
            <button className="card-buy">
              <b>READ</b>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
