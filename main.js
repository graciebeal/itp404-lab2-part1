let restaurantTemplateString = document.getElementById('restaurant-template').innerHTML;
let renderRestaurant = Handlebars.compile(restaurantTemplateString);

	$.getJSON('https://davidtang.io/teaching/2018/api/restaurants.json').then(
		function(restaurants){
			console.log(restaurants);
			let renderedRestaurant = renderRestaurant({
				restaurant: restaurants.data,
				ownedBy: restaurants.data.ownedBy
		});

		$('body').append(renderedRestaurant);

	});
