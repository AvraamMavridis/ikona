const fs = require( 'fs' );
const path = require( 'path' );

const isFilePresent = function( fileDir )
{
    return new Promise( ( resolve, reject ) => {
        var imagePath = path.resolve( __dirname + '/../../' + fileDir );
        fs.exists( imagePath, exists => {
            if( exists ) resolve( fileDir );
            if( !exists ) reject( `${fileDir} does not exist` );
        });
    })
}

module.exports = {
    isFilePresent : isFilePresent
};
