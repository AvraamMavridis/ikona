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

vorpal.command( 'scaletofit <imageDir>' )
      .option( '-h, --height [height]', 'The height of the new image (default "auto")' )
      .option( '-w, --width [width]', 'The width of the new image (default "auto")' )
      .option( '-o, --output [output]', 'The output file' )
      .option( '-m, --mode [mode]', 'The mode',['Bilinear', 'Nearest_Neighbor', 'Bicubic', 'Hermite', 'Bezier'] )
      .description( 'Scale the image to the largest size that fits inside the given width and height' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var height = Number(args.options.height) || jimp.AUTO;
                  var width = Number(args.options.width) || jimp.AUTO;
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';

                  if( height === jimp.AUTO && width === jimp.AUTO )
                  {
                      height = 250;
                  }
                  var mode = resizeModes[args.options.mode] || jimp.RESIZE_BILINEAR;

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.scaleToFit( width, height, mode );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
