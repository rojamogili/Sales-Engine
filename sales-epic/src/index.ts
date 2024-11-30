import app from './app';


const PORT = process.env.IS_TESTING_ENV ? 3232 : process.env.PORT || 3000;
console.log("---port---", PORT)
app.listen(PORT, () => {
  console.info('Express server listening on http://localhost:'+PORT);
});

module.exports = app;