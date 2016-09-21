const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require("jimp");
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'flip <imageDir>' )
      .option( '-h, --horz [horz]', 'Flip the image horizontally' )
      .option( '-v, --vert [vert]', 'Flip the image vertically' )
      .option( '-o, --output [output]', 'The output file' )
      .description( 'Flip the image horizontally or vertically ' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                  var horz = Boolean(args.options.horz);
                  var vert = Boolean(args.options.vert);
                  var output = args.options.output ? `${args.options.output}.jpg` : 'chroma.jpg';

                  jimp.read( imageDir, ( error, image ) =>
                  {
                      if( error ) throw error;

                      image.flip( horz, vert );
                      image.write( output );
                      callback();
                  } )
             })
             .catch( error => {
                console.error( error );
                callback();
             });
      });
