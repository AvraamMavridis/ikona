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

vorpal.command( 'resize <imageDir>' )
      .option( '-h, --height [height]', 'The height of the new image (default "auto")' )
      .option( '-w, --width [width]', 'The width of the new image (default "auto")' )
      .option( '-o, --output [output]', 'The width of the new image (default "auto")' )
      .option( '-m, --mode [mode]', 'The mode',['Bilinear', 'Nearest_Neighbor', 'Bicubic', 'Hermite', 'Bezier'] )
      .description( 'Resizes the image ' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var height = Number(args.options.height) || jimp.AUTO;
                  var width = Number(args.options.width) || jimp.AUTO;
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';
                  var mode = resizeModes[args.options.mode] || jimp.RESIZE_BILINEAR;

                  if( height === jimp.AUTO && width === jimp.AUTO )
                  {
                      height = 250;
                  }

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.resize( width, height, mode );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
