'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function () {

    it('should redirect `index.html` to `index.html#!/phones`', function () {
        browser.get('index.html');
        expect(browser.getCurrentUrl()).toContain('index.html#!/phones');
    });

    describe("View: phoneList", function () {

        beforeEach(function () {
            browser.get('index.html#!/phones');
        });

        it("should filter the phone list as a user types into the search box", function () {
            var phoneList = element.all(by.repeater("phone in $ctrl.phones"));
            var query = element(by.model('$ctrl.query'));
            expect(phoneList.count()).toBe(3);
            query.sendKeys('nexus');
            expect(phoneList.count()).toBe(3);
            query.clear();
            query.sendKeys('motorola');
            expect(phoneList.count()).toBe(2);
        });

        it("should be possible to control phone order via the drop-down menu", function () {
            var queryField = element(by.model("$ctrl.query"));
            var orderSelect = element(by.model("$ctrl.orderProp"));
            var nameOption = orderSelect.element(by.css('option[value="name"]'));
            var phoneNameColumn = element.all(by.repeater("phone in $ctrl.phones").column("phone.name"));

            function getNames() {
                return phoneNameColumn.map(function (elem) {
                    return elem.getText();
                });
            }

            queryField.sendKeys("tablet");

            expect(getNames()).toEqual([
                'Motorola XOOM\u2122 with Wi-Fi',
                'MOTOROLA XOOM\u2122'
            ]);

            nameOption.click();

            expect(getNames()).toEqual([
                'MOTOROLA XOOM\u2122',
                'Motorola XOOM\u2122 with Wi-Fi'
            ]);
        });

        it("should render phonespecific links", function () {
            var query = element(by.model("$ctrl.query"));
            query.sendKeys("nexus");
            element.all(by.css(".phones li a")).first().click();
            expect(browser.getCurrentUrl()).toContain("index.html#!/phones/nexus-s")
        });
    });

    describe("View: Phone details", function () {
        beforeEach(function () {
            browser.get("index.html#!/phones/nexus-s");
        });

        it('should display placeholder page with `phoneId`', function () {
            expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
        })
    })
});
