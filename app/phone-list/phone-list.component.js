angular
    .module("phoneList")
    .component("phoneList", {
        templateUrl: "phone-list/phone-list.template.html",
        controller: ["Phone",
            function PhoneListController(Phone) {
                this.phones = Phone.queryAll();
                this.orderProp = "age";
            }]
    })
;
