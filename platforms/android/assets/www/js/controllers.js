angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Questions) {
  $scope.data = {};

  shuffle = function(array) {
    new_array = [];
    var seed = new Date();
    var j = Math.floor(Math.random(seed.getTime())*array.length);
    for (var i = 0; i < array.length; i++) {
      while(new_array.indexOf(array[j]) != -1){
        j = Math.floor(Math.random(seed.getTime())*array.length);
      }
      new_array.push(array[j]);
    }
    return new_array;
  }

  $scope.next = function(){
    $scope.question = Questions.randomQuestion();
    $scope.question.options = shuffle($scope.question.options);
    $scope.myanswer = "";
    $scope.correct = null;
  };
  $scope.answer = function(ans){
    if ($scope.myanswer != ans)
        $scope.myanswer = ans;
    else
        $scope.correct = ($scope.myanswer == $scope.question.answer);
  };

  $scope.next();
})

.controller('CardsCtrl', function($scope, Questions) {
  $scope.next = function(){
    $scope.question = Questions.randomQuestion();
    $scope.in_question = true;
  };
  $scope.swap = function(){
    $scope.in_question = !$scope.in_question;
  };

  $scope.next();
})

.controller('QuestionsCtrl', function($scope, Questions) {
  $scope.questions = [];
  $scope.total = 0;
  $scope.loadMore = function(){
    $scope.questions = $scope.questions.concat(Questions.getFiveMore($scope.total));
    $scope.total += 5;
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
  
});
