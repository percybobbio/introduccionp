function mapa(change){
    var mapas = new Array(3);

    mapas[0] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1949.6091535802682!2d-76.86591204211732!3d-12.233492676531823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bdb4fcc0938b%3A0xc158bbbc19dcb9fe!2sAv+Manuel+Valle%2C+Pachacamac+15823!5e0!3m2!1ses-419!2spe!4v1562314037628!5m2!1ses-419!2spe";
    mapas[1] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.7394407802292!2d-77.09591364211798!3d-12.07933367503774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c97b11c76077%3A0xe8256ce75b9a3182!2sJos%C3%A9+Gabriel+Aguilar+125%2C+Cercado+de+Lima+15087!5e0!3m2!1ses-419!2spe!4v1562316102333!5m2!1ses-419!2spe"; 
    mapas[2] = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.3637657702516!2d-76.9641625857881!3d-12.0184589446454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c434fa55a2ed%3A0x4a27945e6575ed85!2sCalle+8%2C+San+Juan+de+Lurigancho+15457!5e0!3m2!1ses-419!2spe!4v1562316335766!5m2!1ses-419!2spe";   

    document.getElementById("mapa1").src = mapas[change];
}
