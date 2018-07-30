function activateGallery() {
  // either notation works, greater than sign or space
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo img");
  
  
  let infoTitle = document.querySelector("#gallery-info > h3");  
  let infoDescription = document.querySelector("#gallery-info > p");
  
  // let currentSelected = document.querySelector("#gallery-thumbs > div");
  // add a div.current right after gallery-thumbs
  // galleryThumbsCurrent[2].classList.add("current")
  // let galleryThumbsCurrent = document.querySelector("#gallery-thumbs > div");
    
  let currentSelected = thumbnails[0].parentNode;
  
  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      currentSelected.className = "";
      thumbnail.parentNode.classList.add("current");

      // Set clicked image as main image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", thumbnail.alt);
      
      let newinfoTitle          = thumbnail.dataset.title;
      let newInfoDescription    = thumbnail.dataset.description;
      infoTitle.innerText       = newinfoTitle;      
      infoDescription.innerText = newInfoDescription;
      
      currentSelected = thumbnail.parentNode;
    });
  });  
  
}