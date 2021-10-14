const ingresos = [
    new Ingreso('salario', 2100.00 ),
    new Ingreso("Venta coche", 1500)
];

const egresos =[
    new Egreso("Renta departamento", 900),
    new Egreso("Ropa", 400)
];

let cargarApp = () =>{
    cargarCabecero()
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
let totalEgresos = ()=>{
    let totalEgresos = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalEgresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = porcentajeEgreso;
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}
const formatoMoneda = (valor) =>{
    return valor.toLocaleString("es-CO", {style: "currency", currency: "COP", minimumFractionDigits: 2 });
}


