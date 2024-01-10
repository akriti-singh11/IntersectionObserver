//Let's begin with selecting all images
//The high resolution images will be loaded so we will select those.
//We select the images with the 'data-src' attribute 
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);


//This function will be called when the target intersects the 
//root element at the threshold that 
// we defined

//Also this function gets called with two arguments -> entries and observer object itself
//Entries is an array of threshold entries
const loadImg = function(entries,observer){
  //functionality
  //only one threshold so only one entry
  const[entry] = entries;
  console.log(entry);

  //Do something
  if(!entry.isIntersecting) return;

  //Replace src with data-src
  //Here the target is the image
  entry.target.src = entry.target.dataset.src;
  
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-image');
    observer.unobserve(entry.target);
  });
};

//Now let's create an image observer with takes in a callback function and some options
const imgObserver = new IntersectionObserver(loadImg,{
   root:null, //Root is the element that the target is intersecting
   threshold:0 //The percentage of intersection at which the callback function will be called
              //Threshold can have multiple values
  });    

//Let's attach the imageObserver to all the targets

imgTargets.forEach(img=>imgObserver.observe(img));


