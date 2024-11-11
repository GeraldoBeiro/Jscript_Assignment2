/* Georgian College at ILAC
24F Client-Side JavaScript - 200
Assignment 2
-------------------------------
Student: Geraldo Beiro Neto
Student ID: 200587023
*/

// Here I’m waiting for the page to fully load before running this code

document.addEventListener ('DOMContentLoaded', () => {
    
    //here I grabbed the main  image element so I can change it when thumbnails are clicked
    const featuredImage = document.querySelector('#featured-image img');
    
    // here I got the caption element for the main image to update it later
    const caption = document.querySelector('#featured-image figcaption');
    
    //here I’m selecting all the thumbnail  images to add a click event to each one
    const thumbnails = document.querySelectorAll('#thumbnails img');

    //now I’m looping through each thumbnail
    thumbnails.forEach(thumbnail => {
        
        // Here I’m adding a click event to each thumbnail
        thumbnail.addEventListener('click', () => {
   
        // in this part I'm updating the main image’s src to show the large version of the clicked thumbnail
            featuredImage.src = thumbnail.dataset.large;
            
            //also updating the alt text for accessibility
            featuredImage.alt = thumbnail.alt;
            
            // below I’m setting the caption text to match the clicked thumbnail’s caption
            caption.textContent = thumbnail.dataset.caption;

          // Next, I’m removing the 'active' class from all thumbnails to clear the previous selection
            thumbnails.forEach(img => img.classList.remove('active'));
            
            // to finish I'll add the 'active' class to the clicked thumbnail to show the selection
            thumbnail.classList.add('active');
        });
    });
});