app.controller('MainController', ['$scope', function($scope) {
  
  $scope.books = [
    {
      name: 'jQuery Trickshots',
      author: 'Martin Angelov',
      price: 4.95,
      cover: 'img/book1.jpg'
    },
    {
      name: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke',
      price: 9.95,
      cover: 'img/book2.jpg'
    },
    {
      name: 'JavaScript Patterns',
      author: 'Stoyan Stefanov',
      price: 5.35,
      cover: 'img/book3.jpg'
    },
    {
      name: 'Effective JavaScript',
      author: 'David Herman',
      price: 4.95,
      cover: 'img/book4.jpg'
    },
    {
      name: 'jQuery in Action',
      author: 'Bear Bibeault, Yehuda Katz',
      price: 14.95,
      cover: 'img/book5.jpg'
    },
    {
      name: 'The Art of Unit Testing',
      author: 'Roy Osherove',
      price: 1.95,
      cover: 'img/book6.jpg'
    }
  ];
}]);