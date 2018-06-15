const images = document.querySelectorAll(".slide-in");

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function windowScroll(){
  //window top
  const scrollTop = window.scrollY;
  //window bottom
  const scrollBottom = window.scrollY + window.innerHeight;

  //detect if each image is in our view
  images.forEach(image => {
    const imageTop = scrollBottom - image.offsetTop - image.height/2;
    const imageBottom = image.offsetTop + image.height - scrollTop;
    console.log(imageTop + " " + imageBottom);
    if( imageTop > 0 && imageBottom > 0){
      image.classList.add('active');
    }else {
      image.classList.remove('active');
    }
    

    //console.log(image.offsetTop);
  });
  
}


window.addEventListener('scroll', debounce(windowScroll));