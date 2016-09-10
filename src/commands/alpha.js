const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require( 'jimp' );
const levenshtein = require( 'levenshtein' );
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;

vorpal.command( 'alpha <imageDir> <alpha> <outputDir>' )
      .description( 'Change the alpha channel of images" pixels ')
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          isFilePresent( args.imageDir )
              .then( imageDir =>
              {
                    jimp.read( imageDir, ( error, image ) =>
                    {
                        if( error ) throw error;

                        for( var i=0; i<image.bitmap.width; i++ )
                        {
                            for( var j=0; j<image.bitmap.height; j++ )
                            {
                                var pixelRBG = jimp.intToRGBA(image.getPixelColor(i,j));
                                image.setPixelColor( jimp.rgbaToInt( pixelRBG.r, pixelRBG.g, pixelRBG.b, args.alpha ), i,j );
                            }
                        }
                        image.write(`${args.outputDir}.jpg`);
                        callback();
                    } )
             })
             .catch( error => {
                console.log( error );
             });
        });
