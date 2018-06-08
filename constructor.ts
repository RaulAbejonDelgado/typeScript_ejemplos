//simplre funcion que ejecuta una instancia de un objeto

class Partner2{

  name:string;
  is_company:boolean;
  city:string;
  display_name:string;

constructor(nam:string, is_company:boolean, city:string, display_name:string){
  this.name = nam;
  this.is_company = is_company;
  this.city = city;
  this.display_name = display_name;
  }

}

let rul:Partner2 = new Partner2("Raul",true,"Bilbao","Game sat");

console.log(rul);
