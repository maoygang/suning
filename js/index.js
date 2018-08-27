


window.onload = function(){
	var myswiper1 = new Swiper('#swiper1',{
		pagination:'.swiper-pagination',        //分页器
		autoplay:4000,                          //自动轮播
		paginationClickable:true,               //点击分页器的指示点分页器会控制Swiper切换
		autoplayDisableOnInteraction:false,     //点击后继续轮播
		prevButton:'.swiper-button-prev',       //向前按钮
		nextButton:'.swiper-button-next',       //向后按钮
		loop:true,                              //循环滚动
		onlyExternal:true                       //禁止用户滚动
	})


	var myswiper2 = new Swiper('#swiper2',{
	    direction:'vertical',                   //垂直滚动
		slidesPerView:2,                        //可视化个数
		autoplay:2500,
		loop:true,
		onlyExternal:true                       //禁止用户滚动
	})

	var myswiper3 = new Swiper('#swiper3',{  
		slidesPerView:5,                        //可视化个数
		slidesPerGroup:5,                       //设置几个为1组
		prevButton:'.swiper-button-prev',       //向前按钮
		nextButton:'.swiper-button-next',       //向后按钮
		loop:true                               //环路
	})
    
    document.onscroll = function(){
		var Nav = document.getElementById('nav');
	    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		//console.log( scrollTop )
		if( scrollTop > 2800 && scrollTop < 8900 ){
		    Nav.style.display = 'block';
		}else{
		    Nav.style.display = 'none';
		}
		
	}

	$(function(){
	    $('#nav').onePageNav({
		    scrollThreshold:0.8
		});
	})
}