// import "./Banner.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import requests from "../../request";

// const Banner = () => {
//   const [movie, setMovie] = useState([]);
//   useEffect(() => {

//   }, []);

//   return (

//   );
// };

// export default Banner;
// import "./Banner.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// import requests from "../../request";

// const baseUrl = "https://image.tmdb.org/t/p/original";

// const Banner = ({ fetchUrl }) => {
//   // console.log("yes");
//   const [movie, setMovie] = useState([]);
//   useEffect(() => {

//     async function fetchData() {
//       const { data } = await axios.get(fetchUrl);

//       setMovie(
//         data.results[
//         Math.floor(Math.random() * data.results.length - 1)
//         ]
//       );


//     } fetchData();
//   }, []);

//   return (
//     <div>
//       <header
//         className="banner"
//         style={{
//           backgroundSize: 'cover',
//           backgroundPosition: 'center center',
//           backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
//         }}
//       >
//         <div className="banner__contents">
//           <h1 className="banner__title">
//             {movie?.title || movie?.original_name}
//           </h1>
//           <div>

//             <p className="banner__description">
//               {movie.overview}
//             </p>
//           </div><br />
//           <div>

//             <button className="banner__button">Play</button>
//             <button className="banner__button">My Lists</button>
//           </div>

//         </div>
//       </header>
//     </div>
//   )
// };

//export default Banner;
import "./Banner.css";
 import { useState, useEffect } from "react";
 import axios from "axios";
 import requests from "../../request";

const Banner = () => {
  
  const [movie, setMovie] = useState([]);
  
  
  useEffect(() => {

    axios.get(requests.fetchNetflixOriginals)
    .then(res=>{
      //console.log(res)
       setMovie(res.data.results[Math.floor(Math.random()*19)])
       //console.log(res.data.results[0]);
    
    })
   
   
   
  },[]);

  return (
    <div >
      <header className="banner" style={{backgroundImage:`URL(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.name}
        </h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My Lists</button>
        <p className="banner__description">{movie.overview}</p>
      </div>
      </header>
   </div>
    

  );

      };
      export default Banner;

// import React, { Component } from 'react'

// export default class Banner extends Component {
//   state={
//     movie:[{
//       name:"abcd",
//       img:"img1",
//       release:2021
//     },{
//       name:"abcd",
//       img:"img2",
//       release:2020

//     },{name:"abcd",
//     img:"img1",
//     release:2021}
    
//   ],
//  employees : [
//     { name: 'Alice', salary: 50000 },
//     { name: 'Bob', salary: 60000 },
//     { name: 'Charlie', salary: 70000 },
//   ],
  
//   hero:[{ name:"abcd",
//   img:"img1",
//  age:21},
//  { name:"abcd",
//  img:"img1",
// age:21}]

//   }
//   render() {
    
//     return (
//       <div>
//         <div class ="movie"></div>
//         <h2>Movies:</h2>
        
//         <ul>
//           {this.state.movie.map((m) => (
//             <li key={m.name}>
            
//               <h3>{m.name}</h3>
//               <p>{m.release}</p>
//             </li>
//           ))}
//         </ul>
//         {/* <p>{this.state.employees.map((e)=>(
//           key={e.name}
//           <p>{e.name}</p>
//           <p>{e.salary}</p>}
//         </p> */}
       
  


       
//       </div>
//     )
//   }
// }

