var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/paper-plane.png') {
      myImage.setAttribute ('src','images/paper-plane2.png');
    } else {
      myImage.setAttribute ('src','images/paper-plane.png');
    }
}

