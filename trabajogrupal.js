function Computadora (ram,cpu,disco,monitor,gpu){
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}
let compu =  new Computadora("3Gb","intel core i7", "256GB", "13 pulgadas", true);
let compu1 = new Computadora("4Gb","intel core i3", "526GB", "20 pulgadas", false);
let compu2 = new Computadora("8Gb","intel core i5", "1T", "24 pulgadas", false);
let compu3 = new Computadora("16Gb","intel core i9", "2T", "22 pulgadas", true);
let compu4 = new Computadora("20Gb","Ryzer", "4T", "27 pulgadas", true);

let computadoras = []
computadoras.push(compu);
computadoras.push(compu1);
computadoras.push(compu2);
computadoras.push(compu3);
computadoras.push(compu4);
console.log(computadoras);
let compusgpu = computadoras.filter(compu => compu.gpu == true);
console.log(compusgpu);
function calcularnafta(kilometros) {
    let litrosgastados = kilometros * 2 / 100;
    return litrosgastados;
}
function preciototal(preciolitro, kilometros){
   let gastototal= calcularnafta(kilometros) * preciolitro;
   return gastototal;
}
let gastofinal = preciototal(10,90);
console.log(gastofinal);



