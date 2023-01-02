$(function() {
	$("#g-form-0").submit(function (event) {
		event.preventDefault();

		// Ссылка, которую получили на этапе публикации приложения
		let appLink = "https://script.google.com/macros/s/AKfycbyTHT4D2hrR6byGCmQHmzOyAiPP5dqX4YuHKopQGAHr4qX_Qelm1cfsfr7_5gGCpDmrQA/exec";

		// Сообщение при успешной отправке данных
		let successRespond = 'Pretplatili ste se';

		// Сообщение при ошибке в отправке данных
		let errorRespond = 'Slanje poruke nije uspelo. Kontaktirajte administratora sajta na <a href="mailto:sssplean@gmail.com">sssplean@gmail.com</a>';

		// Id текущей формы
		let form = $('#' + $(this).attr('id'))[0];

		// h2 с заголовком формы
		let formTitle = $(this).find('#g-form-0-title_main');

		// h2 с ответом формы
		let formRespond = $(this).find('#g-form-0-title_respond');

		// Блок прелоадера
		let preloader = $(this).find('#g-form-0-preloader');

		// Кнопка отправки формы
		let submitButton = $(this).find('#g-form-0-button');


		// FormData
		let fd = new FormData(form);


		$.ajax({

			url: appLink,
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			beforeSend: function(){

				if(fd.get('honeypot').length) {
					return false;
				} else {
					fd.delete('honeypot');
				}

  		// Показываем прелоадер
  		preloader.css('opacity', '1');

  		// Делаем неактивной кнопку отправки
  		submitButton.prop('disabled', true);

  		// валидация других полей.

  	},

  }).done(function(res, textStatus, jqXHR) {

  	if(jqXHR.readyState === 4 && jqXHR.status === 200) {

		// Прячем заголовок формы
		formTitle.css({
			'display': 'none'
		});

		// Прячем прелоадер
		preloader.css('opacity', '0');

		// Выводим ответ формы.
		formRespond.html(successRespond).css('color', '#b59f5b');

		// Возвращаем активность кнопке отправки
		submitButton.prop('disabled', false);

	  	// Очищаем поля формы
	  	form.reset();

	  } else {
	  	formTitle.css({
	  		'display': 'none'
	  	});
	  	formRespond.html(errorRespond).css('color', '#2f4f4f');
	  	preloader.css('opacity', '0');
	  	setTimeout( () => {
	  		formRespond.css({
	  			'display': 'none'
	  		});
	  		formTitle.css({
	  			'display': 'block'
	  		});

	  		submitButton.prop('disabled', false);
	  	}, 5000);

	  	console.log('Google nije odgovorio sa statusom 200');
	  }
	}).fail(function(res, textStatus, jqXHR) {
		formTitle.css({
			'display': 'none'
		});
		preloader.css('opacity', '0');
		formRespond.html('Slanje poruke nije uspelo. Obratite se administratoru sajta na drugi način').css('color', '#2f4f4f');
		setTimeout( () => {
			formRespond.css({
				'display': 'none'
			});
			formTitle.css({
				'display': 'block'
			});
			submitButton.prop('disabled', false);
		}, 5000);

		console.log('Izvršavanje zahteva na putanji navedenoj u skripti nije uspelo');
	});
});
}(jQuery));
