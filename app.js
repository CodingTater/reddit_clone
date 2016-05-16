var app = angular.module("myApp", ['angularMoment', 'ngAnimate']);

app.controller("redditController", function($scope) {
	$this.toggle = false;
	$scope.posts = [{	
		'title': 'Outside Aspen',
		'author': 'Ned Stark',
		'image': 'http://www.outsideonline.com/sites/default/files/styles/three-quarter-page-scaled-1x/public/aspen-apres-ski-in_h.jpg?itok=XSJCFYxH',
		'desc': 'Some mountains outside aspen',
		'date': new Date(),
		'votes': 10,
		'comments': []
	}, {
		'title': 'Cliffs of Moher',
		'author': 'Hodor',
		'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cliffs_of_Moher_with_O%27Brien%27s_Tower_-_2012.jpg/800px-Cliffs_of_Moher_with_O%27Brien%27s_Tower_-_2012.jpg',
		'desc': 'Some cliffs of Moher, duh.',
		'date': new Date(),
		'votes': 5,
		'comments': []
	}, {
		'title': 'Olympic National Park',
		'author': 'John Snow',
		'image': 'https://res.cloudinary.com/roadtrippers/image/upload/c_fill,h_316,w_520/v1370384018/hoh-rain-forest-51a525be7f3d772cd2002703.jpg',
		'desc': 'Dat Rainforest doe',
		'date': new Date(),
		'votes': 2,
		'comments': []
	}];
	$scope.post = {};
	$scope.post.comments = [];
	$scope.post.comment = {};
	$scope.commentForm = false;
	$scope.commentsView = false;
	$scope.sortChoice = '-votes';

app.animation()


})
