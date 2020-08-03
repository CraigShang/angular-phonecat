describe('phoneDetail', function () {
    beforeEach(module('phoneDetail'))
    describe('PhoneDetailController', function () {
        var $httpBackend, ctrl;
        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});
            $routeParams.phoneId = 'xyz';
            ctrl = $componentController('phoneDetail');
        }));

        it('should fetch the phone details', function () {
            expect(ctrl.phone).toBeUndefined();
            $httpBackend.flush();
            expect(ctrl.phone).toEqual({name: 'phone xyz'});
        })
    })
})
