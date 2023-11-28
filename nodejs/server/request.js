const http = require('http');

const Option = {
    hostname: 'fakeapi.com',
    path: '/product/1',
    method: 'GET'
}


const apiReq = http.request(Option, (apiRes) => {
    apiRes.on("data", (data) => {
        console.log(data.tostring());
    })
});

apiReq.on("error", () => {
    console.log(e);
});

apiReq.end();