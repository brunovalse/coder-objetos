class revistas{

    constructor( nombre, valor, envio) {

        this.nombre = nombre;
        this.valor = valor;
        this.envio = envio;

    }

    getEnvioCapital() {
        return this.valor + 200 
    }
    
    getEnvioGba() {
        return this.valor + 400 
    }

    getPrecio(){
        return this.valor
    }
    
}

const revistas1 = new revistas('El Grafico', 500, )

console.log('La revista elegida es ' + revistas1.nombre)
console.log('Valor con envio a CABA ' + revistas1.getEnvioCapital());
console.log('Valor con envio a Gran Buenos Aires ' + revistas1.getEnvioGba());
console.log('Valor de la revista ' + revistas1.getPrecio())



