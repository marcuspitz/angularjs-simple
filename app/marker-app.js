angular.module('Marker', [
    //submodules / dependencies
])
.controller('AppCntrl', ($scope) => {

    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
        {"id": 0, "title": "C++", "url": "www.google.com.br", "category": "Development"},
        {"id": 1, "title": "Angular", "url": "www.google.com.br", "category": "Development"},
        {"id": 2, "title": "SQL Server", "url": "www.google.com.br", "category": "Development"}
    ];
});