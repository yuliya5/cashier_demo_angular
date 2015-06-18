var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', '$filter', function($scope, $filter){  //injecting scope and filter into function
	
	var orderBy = $filter('orderBy');

	$scope.order = function(predicate, reverse){
		$scope.transactions = orderBy($scope.transactions, predicate, reverse);
	};
	$scope.order('-title', false);

	$scope.transactions = [
		{
			title: 'Sloppy Joe',
			cost: 4.49,
			notes: 'Extra sloppy'
		},
		{
			title: 'Crabby patty',
			cost: 3.49,
			notes: 'No pickles'
		},
		{
			title: 'Hot dog',
			cost: 2.49,
			notes: 'Vegan'
		},
		{
			title: 'Soda',
			cost: 1.49,
			notes: 'Large'
		},
		{
			title: 'Skittles',
			cost: 9.49,
			notes: 'Taste the rainbow'
		}
	];
}]);
