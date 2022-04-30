import {navbar} from "../components/navbar.js";

console.log("dasaas "+navbar)

import "../style/navbar.css"

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML= navbar()

//import {getdata,append} from "../components/fetch.js"

// const url= `https://api.themoviedb.org/3/trending/all/day?api_key=8010ac67d442f68955d4d41cfb405e8f`
    
//     const container = document.getElementById("container")

//     getdata(url).then((res)=>{
//         append(res,container)
//     })