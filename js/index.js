


window.onload = function(){
	var myswiper1 = new Swiper('#swiper1',{
		pagination:'.swiper-pagination',        //��ҳ��
		autoplay:4000,                          //�Զ��ֲ�
		paginationClickable:true,               //�����ҳ����ָʾ���ҳ�������Swiper�л�
		autoplayDisableOnInteraction:false,     //���������ֲ�
		prevButton:'.swiper-button-prev',       //��ǰ��ť
		nextButton:'.swiper-button-next',       //���ť
		loop:true,                              //ѭ������
		onlyExternal:true                       //��ֹ�û�����
	})


	var myswiper2 = new Swiper('#swiper2',{
	    direction:'vertical',                   //��ֱ����
		slidesPerView:2,                        //���ӻ�����
		autoplay:2500,
		loop:true,
		onlyExternal:true                       //��ֹ�û�����
	})

	var myswiper3 = new Swiper('#swiper3',{  
		slidesPerView:5,                        //���ӻ�����
		slidesPerGroup:5,                       //���ü���Ϊ1��
		prevButton:'.swiper-button-prev',       //��ǰ��ť
		nextButton:'.swiper-button-next',       //���ť
		loop:true                               //��·
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