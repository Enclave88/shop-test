app.controller('MainController', ['$scope', function($scope) {
  
  $scope.books = [
    {
      name: 'jQuery Trickshots',
      author: 'Martin Angelov',
      price: 4.95
    },
    {
      name: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      price: 9.95
    },
    {
      name: 'JavaScript Patterns',
      author: 'Stoyan Stefanov',
      price: 5.35
    },
    {
      name: 'Effective JavaScript',
      author: 'David Herman',
      price: 4.95
    },
    {
      name: 'jQuery in Action',
      author: 'Bear Bibeault, Yehuda Katz',
      price: 14.95
    },
    {
      name: 'The Art of Unit Testing',
      author: 'Roy Osherove',
      price: 1.95
    }
  ];
}]);