var express = require('express');
var app = express();

app.set('view engine','ejs')



const bar = console.log('bar')
const baz = console.log('baz')

const foo = ()=>{
    console.log('foo')
    setTimeout(bar, 0);

    new Promise((res,rej)=>{
        resovle('promise call back')
    }).then((rej)=>console.log(rej))

    baz()
}
app.get('/',function(req, res){

    res.render('pages/profile');
});

app.get('/home',function(req, res){
    res.render('pages/home');
});

app.listen(1000);