
const app = require ('./app');

app.listen(app.get('port'), function() {                            // FICHERO EJECUCIÓN API

    console.log('Server listen on port ' + app.get('port'));

});