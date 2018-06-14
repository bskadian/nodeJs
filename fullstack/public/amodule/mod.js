var mod=angular.module('restmod',[]);
mod.controller("rest",function($scope){
$scope.pattern="";
$scope.companies=['abc','hdf',"hdsf"];
$scope.readpattern=function(){
    console.log($scope.pattern);
}
});