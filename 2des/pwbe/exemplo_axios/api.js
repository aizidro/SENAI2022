// const api = axios.create({
//     baseURL: "http://localhost:3000"
//     .then(resp => {
//         console.log(resp.data);
//     })
//     .catch(err => {
//         console.log(err);
//     })
    api.get("/imoveis")
    .then(resp => {
        console.log(resp.data);
    })
// })