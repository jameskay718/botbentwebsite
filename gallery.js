
/*this function returns the individual pictures as soon as we click on them*/

function imageGallery(){
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".photo-preview img");

    previews.forEach(preview => {
        preview.addEventListener("click", function(){
            const smallSrc = this.src; /*gives us the source of the image location*/
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            preview.classList.add('room-active');
        });
    });
}

imageGallery();