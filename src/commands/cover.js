const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'cover <imageDir>' )
      .option( '-h, --height [height]', 'The height of the new image (default "auto")' )
      .option( '-w, --width [width]', 'The width of the new image (default "auto")' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Scale the image to the given width and height, some parts of the image may be clipped' )
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

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.cover( width, height );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
