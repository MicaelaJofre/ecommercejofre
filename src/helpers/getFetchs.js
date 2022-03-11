import  data  from "../data.json";

export const getFetchs = new Promise((res) => {
    setTimeout(() => {
        res(data);
    }, 3000);
});

export const getItems = new Promise((res) => {
    setTimeout(() => {
        res(data);
    }, 2000);
});
