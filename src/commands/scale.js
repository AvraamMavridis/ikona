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

vorpal.command( 'scale <imageDir>' )
      .option( '-f, --factor [factor]', 'The factor f by which the image will be scaled' )
      .option( '-o, --output [output]', 'The output file' )
      .option( '-m, --mode [mode]', 'The mode',['Bilinear', 'Nearest_Neighbor', 'Bicubic', 'Hermite', 'Bezier'] )
      .description( 'Scales the image by a factor f' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var factor = Number(args.options.factor) || 2;
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';
                  var mode = resizeModes[args.options.mode] || jimp.RESIZE_BILINEAR;

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.scale( factor, mode );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
