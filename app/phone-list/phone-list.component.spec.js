describe("phoneList", function () {
    beforeEach(module("phoneList"));
    describe("PhoneListController", function () {
        var ctrl;
        beforeEach(inject(function ($componentController) {
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