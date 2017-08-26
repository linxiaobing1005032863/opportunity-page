//左边点击导航变色
$('.secOul li').on('click',function () {
    $(this).addClass('change-svg').siblings().removeClass('change-svg');
});

//点击中间导航下拉换向 隐藏的ol显示
$('.secOulTwo li').on('click',function () {
    $(this).toggleClass('nav-change').siblings().removeClass('nav-change');
    /*$('.secOulTwo li ol').toggle();*/
    /* if('nav-change'){
     $(this).removeClass('nav-change')
     }else{
     $(this).addClass('nav-change')
     }*/
});
