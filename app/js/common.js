function deleteuser() {
	var infouser = "";
	$('.user-card__wrapper__button--deleteuser').click(function(event) {

		var elem = $(this).parents('.user-card');
		infouser = {
			imgpath : elem.find('.user-card__img').attr('src'),
			imgalt : elem.find('.user-card__img').attr('alt'),
			userlogin : elem.find('.user-card__login').text(),
			username : elem.find('.user-card__name').text(),
		}
		$('<img />',{
			src : infouser['imgpath'],
			alt : infouser['imgalt'],
			class : 'delete-users__img'
		}).appendTo('.delete-users__imgwrap');
		$('<div />',{
			class : 'delete-users__login',
			text : infouser['userlogin']
		}).appendTo('.delete-users__textwrap');	
		$('<div />',{
			class : 'delete-users__name',
			text : infouser['username']
		}).appendTo('.delete-users__textwrap');
		$('.delete-users__text').text('Remove user from the white list?');
		$('.body').addClass('fixed');
		$('.delete-users--single').addClass('delete-users--fixed');
	});
}

function check_checked() {
	$('.user-card__wrapper__checkbox').change(function(event){
		if($('.user-card__wrapper__checkbox:checked').length > 0)
		{
			console.log($('.user-card__wrapper__checkbox:checked').length);
			$('.list-users__content__searchcontainer').hide();
			$('.list-users__content__buttonswrap').show();
		}
		else
		{
			$('.list-users__content__searchcontainer').show();
			$('.list-users__content__buttonswrap').hide();
			console.log($('.user-card__wrapper__checkbox:checked').length);
		}
		if ($(this).prop('checked')) 
		{
			$(this).parent().addClass('user-card__wrapper__label--checked');
			$(this).parents('.user-card').children('.user-card__wrapper').addClass('user-card__wrapper--active');

		}
		else {
			$(this).parent().removeClass('user-card__wrapper__label--checked');
			$(this).parents('.user-card').children('.user-card__wrapper').removeClass('user-card__wrapper--active');
		}

	});
}

function buttons_delete() {
	$('.delete-users__button--close,.list-users__content__button--cancel').click(function(event) {
		$('.delete-users').removeClass('delete-users--fixed');
		$('.delete-users__imgwrap').html('');
		$('.delete-users__textwrap').html('');
		$('.delete-users__text').text('');
		$('.body').removeClass('fixed');
		$('.user-card__wrapper__checkbox').prop('checked',false);
		$('.user-card__wrapper__label').removeClass('user-card__wrapper__label--checked');
		$('.user-card__wrapper').removeClass('user-card__wrapper--active');

	});
	$('.delete-users__cross').click(function(event) {
		$('.delete-users').removeClass('delete-users--fixed');
		$('.delete-users').removeClass('delete-users--fixed');
		$('.body').removeClass('fixed');
		$('.delete-users__text').text('');
		$('.delete-users__imgwrap').html('');
		$('.delete-users__textwrap').html('');
	});
	$('.list-users__content__button--selectall').click(function(event) {
		$('.user-card__wrapper__checkbox').prop('checked',true);
		$('.user-card__wrapper__label').addClass('user-card__wrapper__label--checked');
		$('.user-card__wrapper').addClass('user-card__wrapper--active');
	});
}





function search_focus(){
	var item = $('.list-users__content__search');
	item.focus(function() {
		$('.list-users__content__clear').addClass('list-users__content__clear--active');
	});
	item.blur(function() {
		setTimeout(function(){
			$('.list-users__content__clear').removeClass('list-users__content__clear--active');}
			,250);
	});
}


function help_show(){
	var elem = $('.list-users__head__helpwrap');
	var elemclass = 'list-users__head__helpwrap--show';
	$('.list-users__head__helpbutton').click(function() {
		elem.addClass(elemclass);
	});
	$('.list-users__head__helpwrap__img--cross').click(function(event) {
		elem.removeClass(elemclass);
	});
	$(document).mouseup(function (e){
		if (!elem.is(e.target) 
			&& elem.has(e.target).length === 0) {
			elem.removeClass(elemclass);
	}
});

	

}


function menu(){
	if($(document).width()<=1023){
		$('.user-menu__avatar').addClass('user-menu__avatar--dontshow');
		$('.user-menu__avatar__top').addClass('user-menu__avatar__top--dontshow');
		$('.user-menu__avatar__close').addClass('user-menu__avatar__close--dontshow');
		$('.user-menu__avatar__link--share').addClass('user-menu__avatar__link--share--dontshow');
		$('.user-menu__avatar__img').addClass('user-menu__avatar__img--dontshow');
		$('.user-menu__avatar__name').addClass('user-menu__avatar__name--dontshow');
		$('.user-menu__adduser').addClass('user-menu__adduser--dontshow');
		$('.user-menu__linewrap').addClass('user-menu__linewrap--dontshow');
		$('.user-menu__link').addClass('user-menu__link--dontshow');
		$('.user-menu__title').addClass('user-menu__title--dontshow');
		$('.user-menu__link__text').addClass('user-menu__link__text--dontshow');
		$('.user-menu__link__right').addClass('user-menu__link__right--dontshow');
		$('.user-menu__link__img').addClass('user-menu__link__img--dontshow');
		$('.user-menu__avatar__img').addClass('user-menu__avatar__img--dontshow');
	}
}	

$(document).ready(function(){
	$('.delete-users').mouseup(function (e){
		if (!$('.delete-users__container').is(e.target) 
			&& $('.delete-users__container').has(e.target).length === 0) 
		{
			$('.delete-users').removeClass('delete-users--fixed');
			$('.delete-users').removeClass('delete-users--fixed');
			$('.delete-users__imgwrap').html('');
			$('.delete-users__textwrap').html('');
		}
	});
	deleteuser();
	help_show();
	check_checked();
	search_focus();
	buttons_delete();
	menu();
});