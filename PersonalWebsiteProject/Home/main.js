/* Home Page */
//carousel set up
carousel = (function(){
  var box = document.querySelector('.carousel');
  var next = box.querySelector('.right');
  var prev = box.querySelector('.left');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];

  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

//set youtube thumbnails and links
var test = [1,2,3,4,5,6];
var innerDiv = "";
var channelID = "UCLbmYqqTpfGvCC6qITTnvEw";

for (let i = 0; i< test.length; i++){
$.getJSON('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D'+channelID, function(data) 
{
   var link = data.items[i].link;
   var id = link.substr(link.indexOf("=")+1);
    var thumbnailSource = `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
    var videoSource = `https://youtube.com/watch?v=${id}`;
    innerDiv += 
    ` 
      <a href="${videoSource}" target = "_blank">
        <div class="video-box">
          <img class="video-thumbnail col-4 vid testImage" src="${thumbnailSource}">
        </div>
      </a>
    `

var container = document.getElementById("videos");
container.innerHTML = innerDiv;
});

    
} 


/* want to use http://i.ytimg.com/vi/{video_id}/maxresdefault.jpg as the thumbnail finder when i get the href to be the video on youtube

follow xBs website

*/