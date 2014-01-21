var booksApp = angular.module("BookStore", []);
booksApp.controller("booksCtrl", function($scope) {
  Object.defineProperty($scope, "queryFilter", {
      get: function() {
          var out = {};
          out[$scope.queryBy || "$"] = $scope.query;
          return out;
      }
  });
  $scope.books = [{
      "book": "JavaScript for Web Developers",
      "autor": "Robin Dixon",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/js-3rd.jpg"
  }, {
      "book": "Begin CSS",
      "autor": "Ian Pouncey and Richard York",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/css.jpg"
  }, {
      "book": "Php Plug-In",
      "autor": "Robin Dixon",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/php.jpg"
  }, {
      "book": "Canvas html5",
      "autor": "Eric Rowell",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/html5.jpg"
  }, {
      "book": "Zend Framework 2.0",
      "autor": "Krishna Shasankar V",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/zend.jpg"
  }, {
      "book": "Hello iOS Development",
      "autor": "Lou Franco, Eitan Mendelowitz",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/hello-ios.jpg"
  }, {
      "book": "Backbone.js Applications",
      "autor": "Addy Osmani",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/backbone.jpg"
  }, {
      "book": "Jump Start NodeJS",
      "autor": "Don Nguyen",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "image": "img/start-nodejs.jpg"
  }];
});