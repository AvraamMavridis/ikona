const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

var resizeModes = {
    Bilinear         : jimp.RESIZE_BILINEAR,
    Nearest_Neighbor : jimp.RESIZE_NEAREST_NEIGHBOR,
    Bicubic          : jimp.RESIZE_BICUBIC,
    Hermite          : jimp.RESIZE_HERMITE,
    Bezier           : jimp.RESIZE_BEZIER
}

vorpal.command( 'rotate <imageDir>' )
      .option( '-d, --degrees [degrees]', 'Degrees' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Rotate the image clockwise by a number of degrees. ' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var degrees = Number(args.options.degrees) || 90;
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.rotate( degrees );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
