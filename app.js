const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());


app.get('/setcookie', (req, res) => {
    res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2022'),
        secure: true,
        httpOnly: false,
        sameSite: 'lax'
    });
    res.send('Cookie have been saved successfully');
});


app.get('/getcookie', (req, res) => {
    //show the saved cookies
    console.log(req.cookies)
    res.send(req.cookies);
});


// delete the saved cookie
app.get('/deletecookie', (req, res) => {
    //show the saved cookies
    res.clearCookie();
    res.send('Cookie has been deleted successfully');
});




app.listen(5000, () => console.log('The server is running port 8000...'));




