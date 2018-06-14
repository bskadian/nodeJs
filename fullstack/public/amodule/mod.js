var mod=angular.module('restmod',[]);
mod.controller("rest",['httpservice','$scope',function(httpservice,$scope){
$scope.pattern="";
$scope.companies=[];
$scope.readpattern=function(){
    $scope.companies=  httpservice.getComapanies($scope.pattern).then(
        (data)=>{
            $scope.companies=data;
            $scope.$digest();
        },
        (Error)=>{
           $scope.companies=[];
            $scope.$digest(); 
        }
    );
    console.log($scope.companies);
}
}]);

mod.service('httpservice',['$http',function($http){
    this.getComapanies= function(pattern){
        return new Promise(function(resolve,reject){ 
            $http.get("http://localhost:8081/mongo.api/cname/"+pattern).then(
                (response)=>{resolve(response.data);},
                (Error)=>{reject([]);}
            );

        });
        };
}]);