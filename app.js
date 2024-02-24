let span=document.querySelector('span') 
// let a=document.querySelector('#learn') 
const mainImage = document.querySelector('#mainImage');
const rightCircle = document.querySelector('.right_circle');
const colorArray = ['#005b35', '#e6bbbd', '#a2266d']
function changeMainImage(value){
    
if(value==2){
    // span.style.color="skyblue";
    span.style.color="green";

    mainImage.setAttribute('src', "./assests/img"+value+".png");
    rightCircle.style.backgroundColor= colorArray[value-1];
}
else{
    span.style.color="skyblue";
    mainImage.setAttribute('src', "./assests/img"+value+".png");
    rightCircle.style.backgroundColor= colorArray[value-1];

} 
}



