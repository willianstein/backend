 //map percorro todo o array e o trim eu tiro espacamentos antes e depois 
 module.exports =
function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(tech => tech.trim())
}