import  data  from "../data.json";

export const getFetchs = new Promise((res) => {
    setTimeout(() => {
        res(data);
    }, 3000);
});

export const getItem = new Promise((res) => {
    setTimeout(() => {
        res(data.find(prod => prod.id === 16));
    }, 2000);
});


