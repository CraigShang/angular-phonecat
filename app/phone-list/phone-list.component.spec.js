describe("phoneList", function () {
    beforeEach(module("phoneList"));
    describe("PhoneListController", function () {
        var $httpBackend, ctrl;
        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function ($componentController, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET("phones/phones.json")
                .respond([{name: "Nexus S"}, {name: "Motorola DROID"}]);
            ctrl = $componentController("phoneList");
        }))
        it("should create a new 'phones' model with 3 phones", function () {
            expect(ctrl.phones.length).toBe(3);
        })
        it("should set a default value for the 'orderProp' model", function () {
            expect(ctrl.orderProp).toBe('age');
        })
    })
})