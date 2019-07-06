window.onload = inicio;

var imagenC = 0;
var imagenes = new Array(13); 

function inicio (){
 
     imagenes [0] = 'imgGaleria/1.jpg';
     imagenes [1] = 'imgGaleria/2.jpg';
     imagenes [2] = 'imgGaleria/3.jpg';
     imagenes [3] = 'imgGaleria/4.jpg';
     imagenes [4] = 'imgGaleria/5.jpg';
     imagenes [5] = 'imgGaleria/6.jpg';
     imagenes [6] = 'imgGaleria/7.jpg';
     imagenes [7] = 'imgGaleria/8.jpg';
     imagenes [8] = 'imgGaleria/9.jpg';
     imagenes [9] = 'imgGaleria/10.jpg';
     imagenes [10] = 'imgGaleria/11.jpg';
     imagenes [11] = 'imgGaleria/12.jpg';
     imagenes [12] = 'imgGaleria/13.jpg';
     
    document.picture.src = imagenes[imagenC];
};

function right() {
   
    if (imagenC >= 12) {
        imagenC = 0;
    }else {
        imagenC++;
    }
    document.getElementById('picture').src = imagenes[imagenC];
    
};

function atras() {
   
    if (imagenC < 1) {
        imagenC = imagenes.length - 1;
    }else {
        imagenC--;
    }
    document.getElementById('picture').src = imagenes[imagenC];
    
};

function photo(change){
    
    document.getElementById('picture').src = imagenes[change];

};

