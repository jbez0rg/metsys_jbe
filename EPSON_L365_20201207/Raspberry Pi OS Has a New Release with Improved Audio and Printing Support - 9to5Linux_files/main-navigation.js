(function($){var masthead,menuToggle,siteNavContain,siteNavigation;function initMainNavigation(container){var dropdownToggle=$('<button />',{'class':'dropdown-toggle','aria-expanded':false});container.find('.menu-item-has-children > a, .page_item_has_children > a').after(dropdownToggle);container.find('.current-menu-ancestor > button').addClass('toggled-on').attr('aria-expanded','true');container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');container.find('.dropdown-toggle').click(function(e){var _this=$(this);e.preventDefault();_this.toggleClass('toggled-on');_this.next('.children, .sub-menu').toggleClass('toggled-on');_this.attr('aria-expanded',_this.attr('aria-expanded')==='false'?'true':'false');});}
initMainNavigation($('.mobile-navigation'));masthead=$('#masthead');menuToggle=masthead.find('.menu-toggle');siteNavContain=masthead.find('.mobile-navigation');siteNavigation=masthead.find('.main-navigation > div > div > ul');(function(){if(!menuToggle.length){return;}
menuToggle.attr('aria-expanded','false');menuToggle.on('click.bam',function(){siteNavContain.toggleClass('toggled-on');$(this).attr('aria-expanded',siteNavContain.hasClass('toggled-on'));});})();(function(){if(!siteNavigation.length||!siteNavigation.children().length){return;}
function toggleFocusClassTouchScreen(){if('none'===$('.menu-toggle').css('display')){$(document.body).on('touchstart.bam',function(e){if(!$(e.target).closest('.main-navigation li').length){$('.main-navigation li').removeClass('focus');}});siteNavigation.find('.menu-item-has-children > a, .page_item_has_children > a').on('touchstart.bam',function(e){var el=$(this).parent('li');if(!el.hasClass('focus')){e.preventDefault();el.toggleClass('focus');el.siblings('.focus').removeClass('focus');}});}else{siteNavigation.find('.menu-item-has-children > a, .page_item_has_children > a').unbind('touchstart.bam');}}
if('ontouchstart'in window){$(window).on('resize.bam',toggleFocusClassTouchScreen);toggleFocusClassTouchScreen();}
siteNavigation.find('a').on('focus.bam blur.bam',function(){$(this).parents('.menu-item, .page_item').toggleClass('focus');});})();})(jQuery);(function($){var searchButton=$('.bam-search-button-icon');searchButton.on('click.bam',function(){var _this=$(this),icon=_this.find('i'),container=_this.parent().find('.bam-search-box-container');container.toggleClass('active');if(icon.hasClass('fa-search')){icon.removeClass('fa-search');icon.addClass('fa-times');}else{icon.removeClass('fa-times');icon.addClass('fa-search');}
if(container.is('.active')){container.find('.search-field').focus();}});})(jQuery);