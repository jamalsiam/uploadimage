var app=angular.module("myApp",[]);


app.controller("myCtr",function($scope,$http){
var myApp = angular.module('myApp',[]);



    $scope.stepsModel = [];

    $scope.imageUpload = function(event){
         var files = event.target.files; //FileList object
         
         for (var i = 0; i < files.length; i++) {
             var file = files[i];
                 var reader = new FileReader();
                 reader.onload = $scope.imageIsLoaded; 
                 reader.readAsDataURL(file);
         }
    }

    $scope.imageIsLoaded = function(e){
        $scope.$apply(function() {
            $scope.stepsModel.push(e.target.result);
        });
        console.log($scope.stepsModel);
    }

})