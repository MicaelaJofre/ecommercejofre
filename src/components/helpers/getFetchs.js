import frasco from "../../assets/image/frasco01.jpg";
import maceta from "../../assets/image/macetaPlaymobil.jfif";
import macetaChica from "../../assets/image/macetaChica.png";
import ensaladera from "../../assets/image/ensaladeraRayas.png";


const prods = [
    {
        id: 1,
        discount: 30,
        img: frasco,
        name: 'FRASCO HERMETICO DE CERAMICA CON TAPA DE MADERA 10 X10X13CM(3 COLORES)',
        price: 2350,
        quota: 966.67,
    },
    {
        id: 2,
        discount: 10,
        img: maceta,
        name: 'Maceta Playmobil Starwars Cemento',
        price: 2650,
        quota: 980,
    },
    {
        id: 3,
        discount: 20,
        img: macetaChica,
        name: 'Maceta Chica Cilindrica Estilo Origami Ceramica',
        price: 1650,
        quota: 620.3,
    },
    {
        id: 4,
        discount: 30,
        img: ensaladera,
        name: 'Ensaladera Bowl Rayas Negro Ceramica',
        price: 1750,
        quota: 655.1,
    }
];

export const getFetchs = new Promise((res, rej) => {
    let url = 'url';
    if (url === 'url') {
        setTimeout(() => {
            res(prods);
        }, 3000);
    } else {
        rej('400 no funciona')
    }
});