 $(".login").hide()
  $("#found").hide()

 
function searchMovies(){
    $("#found").empty()

  var name = $('#search').val()
  console.log(name)
  for(var i = 0 ; i<movies.length; i++){
   if(movies[i].name.toUpperCase()===name.toUpperCase()){
 $("#found").append("<div class='category1'>" +
  "<img src=" + movies[i].image + " class='second'>" +
  " <p>"+ movies[i].name + "</p>" +
  "</div>"
);   
  $(".store").hide() 
  $(".store2").hide() 
  $("#slideShow").hide()
  $("#found").show()

return;
    }
}
alert("Your movie is not found")
}
  $("#BBT").click(function(){
  $(".head").hide("fast")
  $(".store").hide("fast")
  $(".favorite").hide() 
  $("#slideShow").hide()
  $(".store2").hide()
  $(".login").show("slow")
})

$("#cancel").click(function(){
  $(".login").hide("slow")
  $(".head").show("fast")
  $(".store").show("fast")
  $(".favorite").hide() 
  $("#slideShow").show()
  $(".store2").show()
  
})
$("#loginB").click(function(){
 console.log($("#inp").val());
 console.log($("#inp1").val());
 console.log($("#inp2").val());
    return false;
});

$("#BT").click(function(){
$(".favorite").hide() 
 $(".store").show("fast")
 $(".store2").show()
  $("#slideShow").show()

});


var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("autoSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}


var movies=[
    {
     name: "Train to busan",
     image: "https://asiasociety.org/sites/default/files/styles/1200w/public/T/TrainToBusanFeatured2a-%281%29.jpg",
          link : "https://forja.tn/movie/tt5700672/Train-to-Busan-2016"


    } ,
    { name: "Spy" ,
      image: "https://fr.web.img6.acsta.net/pictures/15/03/17/17/06/314791.jpg",
         link : "https://forja.tn/movie/tt8242084/My-Spy-2020"

   
    },
    {name: "Jumanji",
     image: "https://i.pinimg.com/474x/c7/84/68/c78468587d19ae422d1de12805bc0e23.jpg",
     link : "https://forja.tn/movie/tt7975244/Jumanji-The-Next-Level-2019"
     
   
     },
       {name: "The prestige",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wILNNX2VL._SY445_.jpg",
             link : "https://forja.tn/movie/tt0482571/The-Prestige-2006"

     },
       {name: "Saw",
        image: "https://img.filmsactu.net/datas/films/s/a/saw-spiral/xl/saw-spiral-5e3ad0139f7c4.jpg",
             link : "https://forja.tn/movie/tt0432348/Saw-II-2005"

     },
       {name:"Blow",
        image: "https://images-na.ssl-images-amazon.com/images/I/51ABCZ3C8TL._AC_.jpg",
         link : "https://forja.tn/movie/tt0221027/Blow-2001"

       },
       {name:"Takers",
        image: "https://images-na.ssl-images-amazon.com/images/I/816dc%2BxiIHL._AC_SY445_.jpg",
             link : "https://www.youtube.com/watch?v=3jSs_Yo1Vmo"

   
       },
  
       {name: "Project Power",
        image: "https://www.denofgeek.com/wp-content/uploads/2020/07/project-power-poster-netflix.jpg?fit=1200%2C680",
            link : "https://forja.tn/movie/tt7153488/Army-of-One-2018"


   
       },
       {name: "Suicide squad",
        image: "https://images-na.ssl-images-amazon.com/images/I/A1tDLvY6efL._AC_SY445_.jpg",
             link : "https://forja.tn/movie/tt7153488/Army-of-One-2018"

       },
       {
        name:"divergent", 
        image: "https://fr.web.img2.acsta.net/pictures/15/01/28/18/08/152985.jpg",
             link : "https://forja.tn/movie/tt7153488/Army-of-One-2018"

       }
];

  $("body").append("<ul></ul>");
  for (var i = 0; i < movies.length; i++) {
  $(".store").append("<div class='category1'>" +
   "<a href="+movies[i].link +"><img src=" + movies[i].image + " class='second'></a>" +
   " <p>"+ movies[i].name + "</p>" +  "<button type='button' id='check' onclick='pick(" + "movies[" + i + "].name" + ")' value='movies'>&#x1F497</button>"+
   "</div>"
);
} 
 var kids = [
     { 
       name: "frozen" , 
       image:"https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
       
     
    },
    {
    name: "Ice age" , 
    image: "https://fr.web.img6.acsta.net/medias/nmedia/00/02/47/01/affiche.jpg" ,

    },
    {
      name: "Nemo",
      image:"https://slspotlight.com/wp-content/uploads/2012/09/FindingNemo.jpg",
      
    },
     {
     name: "Bolt",
      image:"https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-13brs4i_abd7aa3a.jpeg?region=0%2C0%2C1000%2C1502",
     }
   ];
  $("body").append("<ul></ul>");
  for (var i = 0; i < kids.length; i++) {
  $(".store2").append("<div class='category2'>" +
  "<img src=" + kids[i].image + " class='second2'>" +
  " <p>"+ kids[i].name + "</p>" +"<button type='button' id='check' onclick='pick(" + "kids[" + i + "].name" + ")' value='movies'>&#x1F497</button>"+
 "</div>"
);
}


function deleteFav(){
 localStorage.setItem('favoret', JSON.stringify([]));
 $(".favorite").hide() 
    var favoret = JSON.parse(localStorage.getItem('favoret'));
  $(".favorite").empty()
for (var i = 0; i < favoret.length; i++) {
     for(var j = 0 ; j < movies.length ; j++){
       if(movies[j].name === favoret[i]){
           $(".favorite").append("<div class='category1'>" +
  "<img src=" + movies[j].image + " class='second'>" +
 " <p>"+ movies[j].name + "</p>" +  
"</div>"
);
       }
     }  

}


$(".store").hide() 
$(".store2").hide() 
$("#slideShow").hide()
$(".favorite").show()

}

function pick(name){ 
 var favoret = JSON.parse(localStorage.getItem('favoret'));
   for(var i = 0 ; i < favoret.length ; i++){
    if(favoret[i]===name){
      alert("already exist :) ")
      return;
    }
  }
 favoret.push(name)
 localStorage.setItem('favoret', JSON.stringify(favoret));
  favoret = JSON.parse(localStorage.getItem('favoret'));
 console.log("this is favoret ==== >" , favoret)
 alert("Added To FAV")
}


$(".favorite").hide() 
$("#BT1").click(function(){
   var favoret = JSON.parse(localStorage.getItem('favoret'));
  $(".favorite").empty()
for (var i = 0; i < favoret.length; i++) {
     for(var j = 0 ; j < movies.length ; j++){
       if(movies[j].name === favoret[i]){
           $(".favorite").append("<div class='category1'>" +
  "<a href="+movies[i].link +"><img src=" + movies[i].image + " class='second'></a>"  +
 " <p>"+ movies[j].name + "</p>" +  
"</div>"
);
       }
     }  

}
 $(".favorite").append('<button id ="clear" onclick="deleteFav()">Clear</button>')

$(".store").hide() 
$(".store2").hide() 
$("#slideShow").hide()
$(".favorite").show() 

}) 

$('#data').hide()
var users=[]
$('#loginB').click(function(){
if($('#inp1').val()===$("#inp2").val()){
  data= {name: $('#inp').val(), password:  $('#inp1').val() }
  users.push(data)
  alert(`Welcome ${$('#inp').val()}`)
localStorage.setItem('users', JSON.stringify(users));
}
else{
  alert("WRONG PASSWORD")
}
})


  
  
  





