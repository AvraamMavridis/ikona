const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'contain <imageDir>' )
      .option( '-h, --height [height]', 'The height of the new image (default "auto")' )
      .option( '-w, --width [width]', 'The width of the new image (default "auto")' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Scale the image to the given width and height, some parts of the image may be letter boxed' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  const height = Number(args.options.height) || 250;
                  const width = Number(args.options.width) || 250;
                  const output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.contain( width, height );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
