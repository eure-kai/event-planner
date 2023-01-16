//set up the server
const express = require( "express" );
const app = express();
const port = 8080;

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.send( "<h1>Hello world!</h1>" );
} );

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );