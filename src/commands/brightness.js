const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'brightness <imageDir>' )
      .option( '-f, --factor [factor]', 'The brightness factor f, from -1 to 1' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Scale the image by a factor' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var factor = Number(args.options.factor) || 1;
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.brightness( factor );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
