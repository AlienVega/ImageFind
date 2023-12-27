const formWrapper=document.querySelector(".form-wrapper");
const form=document.querySelector("#form");
const buttonwrapper=document.querySelector(".button-wrapper");
const searchbutton=document.querySelector("#searchbutton");
const clearbutton=document.querySelector("#clearbutton");
const searchInput=document.querySelector("#searchInput");
const imagelistwrapper=document.querySelector(".imagelist-wrapper");

runEventListener()
function runEventListener(){
    form.addEventListener("submit",search)
    clearbutton.addEventListener("click",clear)
}

function search(e){
    const value=searchInput.value.trim();
    clear();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization: "Client-ID aPdzVrID4sfI_SlovhAF2ImZwZBGvWZUJPpn8VqSlto"
        }
    })
    .then(res=>res.json())
    .then(data=>{
       Array.from(data.results).forEach(image => {
          
            addImageToUı(image.urls.small)
        });
    })
    .catch(err=>console.log(err))

    e.preventDefault()
}

function clear(){
    searchInput.value=""
    Array.from(imagelistwrapper.children).forEach(child => {
        child.remove()
    });
}

function addImageToUı(url){
   const div= document.createElement("div");
   div.className="card";
   const img= document.createElement("img");
   img.src = url;
   img.height="400";
   img.width="400";

   div.appendChild(img);
   imagelistwrapper.appendChild(div);
}