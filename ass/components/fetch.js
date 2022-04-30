let  getdata = async (url)=>{
    
    let res = await fetch(url)
    let data = await res.json()
    console.log(data.results)
    return data.results
    
}

let append = (data,container) =>{
    container.innerHTML=null;
data.forEach(({poster_path,release_date,title,vote_average})=>{
    var div1 = document.createElement("div");
        console.log(title)
        var img = document.createElement("img");
        if(poster_path==null){
            img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
        }
        else{
            img.src = "https://image.tmdb.org/t/p/w500" + poster_path;
        }
        
        
        console.log(img)

        var t = document.createElement("h3");
        t.innerText=`Movie : ${title}`;
        //console.log(title)
        var r_d = document.createElement("h3");
        r_d.innerText=`Release date : ${release_date}`;

        var rating = document.createElement("h3");
        rating.innerText=`IMDB rating : ${vote_average}`;

        var rec = document.createElement("h3");
        if(data.length==0){
            img.src = "https://media3.giphy.com/media/l1J9u3TZfpmeDLkD6/giphy.webp?cid=ecf05e47yai1cwkbwnq3njv3vkr2io71kqh0j0adk9g9fjl3&rid=giphy.webp&ct=g";
            t.innerText='No Result Found';
            
        }
        
        if(vote_average>8.5){
            rec.innerText="Recommended";
            rec.setAttribute("id","rec")
            r_d.innerText=`Release date : ${release_date}`;
            rating.innerText=`IMDB rating : ${vote_average}`;
            div1.append(rec,img,t,r_d,rating)
        }

        if(release_date==""){
            
            r_d.innerText=`Release date : Not available`;
            
            div1.append(r_d)
        }

        if(vote_average==0){
            
            rating.innerText=`IMDB rating : Not available`;
            
            div1.append(rating)
        }
        div1.append(img,t,r_d,rating)
        container.append(div1)
})

}

export {getdata,append}