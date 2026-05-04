var index = 0;
var BannerImg = [
    "Images/Cover%20Photo.jpeg",
    "Images/BackgroundB.jpeg",
    "Images/Resourcesbackground.jpeg",
    "Images/ContactusBackground.jpeg"

];

function changeBannerImg(){

    var currentBannerImg = document.querySelector(".main_banner");

    currentBannerImg.style.setProperty(
        "--banner-img",
        `url(${BannerImg[index]})`
    );

   index = (index + 1) % BannerImg.length;
}

window.onload = function(){
    changeBannerImg();
    setInterval(changeBannerImg, 5000);
}