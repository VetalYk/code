describe("route main", function () {
    var $rootScope,
        $scope,
        $http,
        $httpBackend,
        controller;

    beforeEach(function () {
        module('ardasApp');

        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');

            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('MainCtrl', {$scope: $scope});
        });
    });
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });



/*    it('Testin get request', function () {
        var response = [{'name': 'task1'}, {'name': 'task2'}];
        $httpBackend.whenGET($scope.url).respond(response);
        $httpBackend.expectGET('app/route/main/main.html').respond(response);
        $httpBackend.flush();
        expect($scope.url).toBe({'name': 'task1'}, {'name': 'task2'})
        debugger
    });

*/
});

describe("route task", function () {
    var $rootScope,
        $scope,
        controller;

    beforeEach(function () {
        module('ardasApp');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('TaskCtrl', {$scope: $scope})
        });
    });


    describe("Testing TaskCtrl", function () {
        it('Hide elem', function () {
            expect($scope.visible).toBeFalsy();
        });

        it('Show elem', function () {
            $scope.chgClass();
            expect($scope.editing).toBeTruthy();
        });

        it("Called function", function(){
            spyOn($scope,'getReq').and.returnValue("I am called");
            expect($scope.getReq()).toEqual("I am called");
        })
    });

});