var paginationArray;
var timerId;

$(function() {
	var mobileMenuBtn = $("#header__mobile-menu");
	var mobileMenu = $("#header__link-wrapper");
	mobileMenuBtn.click(function() {
		if (mobileMenuBtn.hasClass("header__mobile-menu_open")) {
			mobileMenuBtn.removeClass("header__mobile-menu_open");
			mobileMenu.css("visibility", "hidden");
		} else {
			mobileMenuBtn.addClass("header__mobile-menu_open");
			mobileMenu.css("visibility", "visible");
		}
	});


	paginationArray = $(".header__selector");
	paginationArray.click(function() {
		updateSlider(parseInt($(this).attr('id').replace(/\D+/g, "")));
	});

	$("#header__next-slide").click(function() {
		updateSlider($(this).attr('id'));
	});
	$("#header__prev-slide").click(function() {
		updateSlider($(this).attr('id'));
	});
	timerId = setInterval(updateSlider, 3200, "next", "auto");

});

function updateSlider(btnIndex, autoslider) {
	if (autoslider == undefined || !isDesktop()) //автослайдер отключается в 2 случаях
		clearInterval(timerId);
	
	if (isDesktop()) {
		var activeLink = $(".header__selector.header__selector_active");
		if (isNaN(btnIndex)) {
			btnIndexActive = $(activeLink).attr('id').replace(/\D+/g, "");
			if (btnIndex.indexOf("next") != -1) {
				btnIndex = btnIndexActive == paginationArray.length - 1 ? 0 : +btnIndexActive + 1;
			} else {
				btnIndex = btnIndexActive == 0 ? paginationArray.length - 1 : btnIndexActive - 1;
			}
		}
		activeLink.removeClass("header__selector_active");
		var newActiveLink = $("#header__selector_" + btnIndex);
		newActiveLink.addClass("header__selector_active");
		$(".header").css("background-image", "url(" + newActiveLink.data("slide") + ")");
	}
}

function isDesktop() {
	return $(".header__selector-wrapper").css("display") != "none";
}