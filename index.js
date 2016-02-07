angular.module('app', [])
	.controller('mainCtrl', mainCtrl)
	.directive('avatar', avatarDirective)
;

function mainCtrl ($scope){
	$scope.users = [];
	$scope.addNew=function(user){
		if(user.name == '' || user.name == null){
			return;
		}
		$scope.users.push({
			name: user.name,
			avatarUrl: user.url
		});
		user.name = '';
		user.url = '';
	};
	$scope.addRandom=function(){
		$scope.users.push(
			randomArray[Math.floor(Math.random() * (randomArray.length))]
			);
	}
}

function avatarDirective(){
	return{
		scope: {
			user: '='
		},
		restrict: 'E',
		template:(
			'<div class="Avatar">' +
			  '<img ng-src="{{user.avatarUrl}}" />' +
			  '<h4>{{user.name}}</h4>' +
			'</div>'
		),
		link: zelda,

	};

	function zelda(scope){
		if(!scope.user.avatarUrl){
			scope.user.avatarUrl = 'http://cimbura.com/tech/wp-content/uploads/2015/05/light_sabers_small.jpg'
		}
	}
}

var randomArray = [
	{name:'Yoda', avatarUrl:'http://screenrant.com/wp-content/uploads/Star-Wars-Alternate-Ending-Vader-Father-Yoda.jpg'},
	{name:'Kylo Ren', avatarUrl:'http://static02.mediaite.com/themarysue/uploads/2015/12/Kylo_Ren.jpg'},
	{name:'Ben Solo', avatarUrl:'https://i.guim.co.uk/img/media/7ccccc807f704551768ff5d215a552b9535c1f27/1858_294_1317_791/master/1317.jpg?w=620&q=85&auto=format&sharp=10&s=da927e5c1c45f13c7cbba7a1fcb0432a'},
	{name:'Rey', avatarUrl:'https://cdn2.vox-cdn.com/thumbor/SgBOHHceX1AafzpyZV1X5xS15pU=/34x0:680x431/1280x854/cdn0.vox-cdn.com/uploads/chorus_image/image/48440721/rey.0.0.jpeg'},
	{name:'Luke Skywalker', avatarUrl:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRki3Cbdn5mkrlQbFyeb6AMeeX6X0YR1UtSfW50a6rKfE51EA7_nQ'},
	{name:'Anakin Skywalker', avatarUrl:'https://upload.wikimedia.org/wikipedia/en/7/74/Anakin-Jedi.jpg'},
	{name:'Darth Vader', avatarUrl:'http://cdn.bgr.com/2015/08/darth-vader.jpg'},
	{name:'Leia Organa', avatarUrl:'https://s-media-cache-ak0.pinimg.com/564x/1f/dc/19/1fdc19815a210d0317ef2bf998f4200e.jpg'},
	{name:'Mace Windu', avatarUrl:'http://static.comicvine.com/uploads/original/14/147686/3905289-macewinduwallpaperv2.jpg'},
	{name:'Emperor Palpatine', avatarUrl:'https://pbs.twimg.com/profile_images/378800000043102842/afd562c597df16854a8d8380041d25cc.jpeg'},
	{name:'Obi Wan Kenobi', avatarUrl:'http://vignette3.wikia.nocookie.net/swfanon/images/b/ba/ObiWanKenobi.JPG/revision/latest?cb=20090421055937'},
	{name:'Darth Maul', avatarUrl:'http://img03.deviantart.net/bef5/i/2009/340/f/c/darth_maul_by_skinny22.jpg'},
	// {name:'', avatarUrl:''},
	// {name:'', avatarUrl:''},
	// {name:'', avatarUrl:''},
]