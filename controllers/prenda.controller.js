const PrendasArray = [
    {
        id: 1,
        nombre: "Camiseta de Algodón",
        tipo: "Superior",
        precio: 25.99,
        tallas: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        nombre: "Pantalones Vaqueros",
        tipo: "Inferior",
        precio: 45.50,
        tallas: ["38", "40", "42", "44"]
    },
    {
        id: 3,
        nombre: "Chaqueta Impermeable",
        tipo: "Abrigo",
        precio: 89.00,
        tallas: ["M", "L", "XL"]
    },
    {
        id: 4,
        nombre: "Zapatillas Deportivas",
        tipo: "Calzado",
        precio: 60.00,
        tallas: ["40", "41", "42", "43", "44"]
    }
];


export const PrendasController = {

    // Obtener prendas del array superior
    ObtenerPrendas() {
        return PrendasArray;
    }
}