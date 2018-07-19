//toggle form fields between red and white

$(function(){
	
	var toggleStyle = function(){
		var inputFields = $('input[type="text"]');
		if (inputFields.css('background-color') === 'rgb(255, 0, 0)'){
			inputFields.css('background-color', 'rgb(255, 255, 255)');
		} else{
			inputFields.css('background-color', 'rgb(255, 0, 0)');
		}
	}
	$('#ReqAQuoteBtn').click(toggleStyle);

})

//coreValues stuff

$(function(){
	$('.coreValues').prepend("<li><strong> This is brand new !!</strong></li>");
	$("<li><strong> This is also great !!</strong></li>").prependTo('.coreValues');
})


//entering values for form
$(function(){
	var nameVal = $('input[name="nameVal"]');

	function FillEmpty(){
		if( nameVal.val() == ''){
			nameVal.val( 'John Doe' );
		}
	}
	$('#ReqAQuoteBtn').click(FillEmpty);
})

// switch content
$(function(){
	var box1 = $('.box1');
	var box2 = $('.box2');

	function LeftToRight(){
		if(box2.html() == ''){
			box2.html(box1.html());
			box1.html('');
		}
	}
	$('#LeftToRight').click(LeftToRight);

	function RightToLeft(){
		if(box1.html() == ''){
			box1.html(box2.html());
			box2.html('');
		}
	}
	$('#RightToLeft').click(RightToLeft);
})

//add open sesame class
$(function(){
	$('.navigation > li').hover(function(){
		$(this).addClass('openSesame');
	},function(){
		$(this).removeClass('openSesame');
	})
})


//toggleBtn class
$(function(){
	$('.toggleBtn').click(function(){
		$(this).toggleClass("toggleOn");
	});
})

//dropdown Slider animation
$(function(){
/*	$('.dropdownMenu > li').hover(function(){
		$(this).children("ul").slideDown(200);
	},function(){
		$(this).children("ul").slideUp(200);
	})*/
	$('.dropdownMenu>li').hover(function(){
		$(this).children("ul").slideToggle(200);
	})
})

//fruit basket stuff
$(function(){
	// Array containing Objects with Fruit names & quantities
	var fruitBasket = [	{title:'Apples', quantity:20},
						{title:'Oranges', quantity:25},
						{title:'Kiwis', quantity:50},
						{title:'Strawberries', quantity:45},
						{title:'Bananas', quantity:10},
						{title:'Mangoes', quantity:5},
						{title:'Tomatoes', quantity:30} ];

	$(function(){
		$.each( fruitBasket, function(index, element){
			$('.fruits').append('<li>We have ' + element.quantity + ' ' + element.title + ' </li>')
		})
		$('.fruits > li').each(function(index, element){
			$(element).css('background-color', 'rgb(100,200,0)');
		})
	})

})
