const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'crop <imageDir>' )
      .option( '-x, --x [x]', 'The starting point at x axis' )
      .option( '-y, --y [y]', 'The starting point at y axis' )
      .option( '-h, --height [height]', 'The height of the new image (default "auto")' )
      .option( '-w, --width [width]', 'The width of the new image (default "auto")' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Crop the image ' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var x = Number(args.options.x) || 0;
                  var y = Number(args.options.y) || 0;
                  var height = Number(args.options.height) || 250;
                  var width = Number(args.options.width) || 250;
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.crop( x, y, width, height );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
