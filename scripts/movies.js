// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// http://www.omdbapi.com/?apikey=ff0f339f&t=${movie}


let movie=document.getElementById("search").value;


const url=`http://www.omdbapi.com/?apikey=ff0f339f&ts`
fetch(url)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res.data);
    append (res.data);
})
.catch(function(err){
    console.log(err);
})

// function append(data){
//     data.mat
//     let container=document.createElement("div");
//     container.innerHTML=null ;
    

// }