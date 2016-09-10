const ce = require( 'colour-extractor' );
const isFilePresent = require( './isFilePresent' ).isFilePresent;

const getTopColors = function( imageDir )
{
    return new Promise( ( resolve, reject ) => {
        isFilePresent( imageDir )
            .then( imageDir => {
              ce.topColours( imageDir, true, resolve )
             });
    });
}

module.exports = {
    getTopColors : getTopColors
};
