class Persona {
    constructor(name,age) {
            this._age = age;
            this._name = name;
            let _phone;

    }
    
    set setphone(v){
        this._phone = v;
    }

    get regphone(){
        return this._phone
    }
    datosPersona() {
        console.log(this._age + this._name + this._phone);
    }
    
}

let objetoPersona = new Persona("Jerry", 25);
objetoPersona._phone = "698754123";
objetoPersona.datosPersona();