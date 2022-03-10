import  data  from "../data.json";

export const getFetchs = new Promise((res) => {
    setTimeout(() => {
        res(data);
    }, 3000);
});


