var favicons = [
  ''
],

counter = 0; // To keep track of the current image

setInterval(function() {

  // remove current favicon
  if(document.querySelector("link[rel='icon']") !== null)
     document.querySelector("link[rel='icon']").remove();
      
  if(document.querySelector("link[rel='shortcut icon']") !== null)
     document.querySelector("link[rel='shortcut icon']").remove();

  // add new favicon image
  document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicons[counter] + '" type="image/gif">');

  // If last image then goto first image
  // Else go to next image    
  if(counter == favicons.length -1)
     counter = 0;
  else
    counter++;
}, 1000);
