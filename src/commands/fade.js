const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'fade <imageDir>' )
      .option( '-f, --factor [factor]', 'The factor f by which the image will be scaled' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Multiply the alpha channel by each pixel by the factor f, 0 - 1 ' )
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

                      image.fade( factor );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
