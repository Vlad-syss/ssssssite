$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:2,
        slidesToScroll:2, 
        speed:800,
        infinite:true,
        autoplay:true,
        autoplaySpeed:2000,
        waitForAnimate:false,
    });
});
const ratingItemList = document.querySelectorAll('.rating_item');
const ratingItemArray = Array.prototype.slice.call(ratingItemList);

ratingItemArray.forEach(item => 
    item.addEventListener('click',() => {
        const {itemValue} = item.dataset;
        item.parentNode.dataset.totalValue = item.dataset.itemValue

    })
);