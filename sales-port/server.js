const express             =     require('express');
const compression         =     require('compression');
// const morgan              =     require('morgan');
const path                =     require('path');
const handleRequest       =     require('./server/helpers/handleRequest');
const config              =     require('./server/env/config_dev');
const exphbs              =     require('express-handlebars');

const app = express();
const router = express.Router();
const port = process.env.port | 3002;

// Set up the globals in the express app object
app.set('views', path.resolve(__dirname, 'dist', 'sales-port'));
app.engine('.html', exphbs({}));
app.set('view engine', '.html');

// Set up middlewares
app.use(compression()) //compressing dist folder 
app.use('/zxing.wasm', (req, res, next) => {
  var options = {
    headers: {
      'Content-Type': 'application/wasm'
    }
  };
  res.sendFile(path.join(__dirname, './dist/kaizesales-portn/assets/zxing.wasm'), options, function (err) {
    if (err) {
      next(err);
    }
  });
})
app.use(express.static(path.resolve(__dirname, './dist/sales-port'), {index: '_'})); // set the static files location for the static html
// app.use(morgan('dev'));                    // log every request to the console

// Health Check API
app.use('/healthcheck', (req, res) => {
  res.status(200).json({
    status: 'active'
  })
})


// CRM API Proxy

// Set up the API Proxy
// Serve the angular application
router.get('*', handleRequest);

app.use('/', router);

app.listen(port);
console.log("**********************************");
console.log("Blake is running on port " + port);
console.log("***********************************");
