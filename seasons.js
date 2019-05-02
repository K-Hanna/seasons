var d = new Date();
var day = d.getDate();
var month = d.getMonth();
var days = day + month * 30;
if(days < 81 || days > 352){
document.body.style.backgroundImage = "url('winter.jpg')";
} else if (days < 202){
document.body.style.backgroundImage = "url('spring.jpg')";
} else if (days < 291){
document.body.style.backgroundImage = "url('summer.jpg')";
} else {
document.body.style.backgroundImage = "url('autumn.jpg')";
}

document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";