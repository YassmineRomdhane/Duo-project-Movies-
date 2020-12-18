 $(".login").hide()
$("#BBT").click(function(){
  $(".head").hide("fast")
  $(".store").hide("fast")
  
  $(".login").show("slow")
})



$("#loginB").click(function(){
 console.log($("#inp").val());
 console.log($("#inp1").val());
 console.log($("#inp2").val());
    alert("welcome")
       return false;
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
     dateOfPublication:  "20 July 2016"

    } ,
    { name: "Spy" ,
      image: "https://fr.web.img6.acsta.net/pictures/15/03/17/17/06/314791.jpg",
      dateOfPublication: "2015"
   
    },
    {name: "Jumanji",
     image: "https://i.pinimg.com/474x/c7/84/68/c78468587d19ae422d1de12805bc0e23.jpg",
     dateOfPublication: "5 décembre 2017"
   
     },
       {name: "The prestige",
        image: "https://images-na.ssl-images-amazon.com/images/I/51wILNNX2VL._SY445_.jpg",
        dateOfPublication: "17 octobre 2006"
     },
       {name: "Saw",
        image: "https://img.filmsactu.net/datas/films/s/a/saw-spiral/xl/saw-spiral-5e3ad0139f7c4.jpg",
        dateOfPublication: "1 octobre 2004"
     },
       {name:"Blow",
        image: "https://images-na.ssl-images-amazon.com/images/I/51ABCZ3C8TL._AC_.jpg",
        dateOfPublication:"29 mars 2001"
   
       },
       {name:"Takers",
        image: "https://images-na.ssl-images-amazon.com/images/I/816dc%2BxiIHL._AC_SY445_.jpg",
        dateOfPublication: "4 août 2010"
   
       },
   
       {name: "Project Power",
        image: "https://www.denofgeek.com/wp-content/uploads/2020/07/project-power-poster-netflix.jpg?fit=1200%2C680",
        dateOfPublication: "14 août 2020"

   
       },
       {name: "Suicide squad",
        image: "https://images-na.ssl-images-amazon.com/images/I/A1tDLvY6efL._AC_SY445_.jpg",
        dateOfPublication: "1 août 2016"
       },
       {
        name:"divergent", 
        image: "https://fr.web.img2.acsta.net/pictures/15/01/28/18/08/152985.jpg",
        dateOfPublication: "18 mars 2014"
       }
];

$("body").append("<ul></ul>");
for (var i = 0; i < movies.length; i++) {
  $(".store").append("<div class='category1'>" +
  "<img src=" + movies[i].image + " class='second'>" +
 " <p>"+ movies[i].name + "</p>" +
"</div>"
);
} 
var kids = [
    { 
      name: "frozen" , 
      image:"https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
      dateOfPublication: "19 novembre 2013"
    },
    {
    name: "Ice age" , 
    image: "https://fr.web.img6.acsta.net/medias/nmedia/00/02/47/01/affiche.jpg" ,
    dateofpublication: "12 mars 2002"
    },
    {
      name: "Nemo",
      image:"https://slspotlight.com/wp-content/uploads/2012/09/FindingNemo.jpg",
      dateofpublication:"30 mai 2003"
     
      name: "lion king",
      image:"https://img01.mgo-images.com/image/thumbnail/v2/content/MMVFD4527132F1B898E30D0400B847E4C759.jpeg",
      dateofpublication:"9 juillet 2019"

   }
   ];

$('#data').hide()

var data=""
$('#loginB').click(function(){
     document.getElementById("data").textContent = "E-mail:" + $('#inp').val() + "Password:"   + $('#inp1').val()  + "Repeat Password:"+ $("#inp2").val() 
data= $('#inp').val() + " " + $('#inp1').val() + " " + $("#inp2").val() 
 localStorage.setItem($('#fname').val(), data);
})

