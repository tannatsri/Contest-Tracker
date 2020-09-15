var express = require('express');

const axios = require('axios');

const app = express();

// axios.get('https://clist.by/api/v1/contest/?order_by=-start&username=tannatsri&api_key=3bd98178a90c63f4a7bb20c5cb34bec7d814816f')
//     .then((res) => {
        

//     })
//     .catch(console.log('error'));


app.get('/', (req, res) => {
    // res.send('<h1>Hello</h1>');
    axios.get('https://clist.by/api/v1/contest/?start__gt=2020-09-15T00%3A00%3A00&end__lt=2020-09-25T00%3A00%3A00&username=tannatsri&api_key=3bd98178a90c63f4a7bb20c5cb34bec7d814816f')
    .then((response) => {
        res.send(response.data.objects);

    })
    .catch((error) => {
        res.send("Error");
    });
})


var api = 'https://clist.by/api/v1/contest/?order_by=-start&username=tannatsri&api_key=3bd98178a90c63f4a7bb20c5cb34bec7d814816f';


app.listen(3000);