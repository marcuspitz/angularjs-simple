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
        {"id": 2, "title": "SQL Server", "url": "www.google.com.br", "category": "Development"},
        {"id": 3, "title": "Arquiteto", "url": "www.google.com.br", "category": "Design"},
        {"id": 4, "title": "Working out", "url": "www.google.com.br", "category": "Exercise"},
        {"id": 5, "title": "Jokes", "url": "www.google.com.br", "category": "Humor"}
    ];


    $scope.currentCategory = null;
    $scope.setCurrentCategory = (category) => {
        $scope.currentCategory = category;
        $scope.cancelCreating();
        $scope.cancelEditing();
    };

    $scope.isCurrentCategory = (category) => {
        return $scope.currentCategory != null && $scope.currentCategory.name === category.name;
    };

    /**
     * todo it's a sample needing improvements
     */
    $scope.isCreating = false;
    $scope.isEditing = false;

    $scope.startCreating = () => {
        $scope.isCreating = true;
        $scope.isEditing = false;
        resetCreateForm();
    };

    $scope.cancelCreating = () => {
        $scope.isCreating = false;
    };

    $scope.startEditing = () => {
        $scope.isCreating = false;
        $scope.isEditing = true;
    };

    $scope.cancelEditing = () => {
        $scope.isEditing = false;
    };

    $scope.shouldShowCreating = () => {
        return $scope.currentCategory && !$scope.isEditing;
    }

    $scope.shouldShowEditing = () => {
        return $scope.isEditing && !$scope.isCreating;
    }
    /**
     * CRUD
     */
    function resetCreateForm() {
        $scope.newBookmark = {
            title:'',
            url:'',
            category: $scope.currentCategory.name
        }
    }

    $scope.createBookmark = (bookmark) => {
        console.log(bookmark);
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);
        resetCreateForm();
    };

});