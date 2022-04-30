import {navbar} from "../components/navbar.js";

console.log("dasaas "+navbar)

import "../style/navbar.css"

let navbar_div = document.getElementById("navbar");

navbar_div.innerHTML= navbar()

document.getElementById("search").addEventListener("input",function(){
    debounce(main,500)
})

import {getdata,append} from "../components/fetch.js"


const main = () =>{
    const find = document.getElementById("search").value;
    console.log(find)
    const url= `https://api.themoviedb.org/3/search/movie?api_key=8010ac67d442f68955d4d41cfb405e8f&language=en-US&page=1&include_adult=false&query=${find}`
    
    const container = document.getElementById("container")

    getdata(url).then((res)=>{
        append(res,container)
    })
}

let id;
const debounce = ((func,delay)=>{
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
        func()
    },delay)
})
