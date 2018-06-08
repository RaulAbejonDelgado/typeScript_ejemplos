"use strict";
//simplre funcion que ejecuta una instancia de un objeto
var Partner2 = /** @class */ (function () {
    function Partner2(nam, is_company, city, display_name) {
        this.name = nam;
        this.is_company = is_company;
        this.city = city;
        this.display_name = display_name;
    }
    return Partner2;
}());
var rul = new Partner2("Raul", true, "Bilbao", "Game sat");
console.log(rul);
