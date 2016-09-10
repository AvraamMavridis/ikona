const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const jimp = require( 'jimp' );
const levenshtein = require( 'levenshtein' );
const isFilePresent = require( '../utils/isFilePresent' ).isFilePresent;
const minBy = require( 'lodash/minBy' );

/**
 * Returns the channel using Levenshtein distance
 * @param  { String } channel
 * @return { String }  { r, g, b }
 */
const getChannel = function( channel )
{
    const channels = [
        {
            channel : 'r',
            distance : new levenshtein( channel, 'red' ).distance
        },
        {
            channel : 'g',
            distance : new levenshtein( channel, 'green' ).distance
        },
        {
            channel : 'b',
            distance : new levenshtein( channel, 'blue' ).distance
        },
    ];

    return minBy( channels, 'distance' ).channel;
}

vorpal.command( 'swap <imageDir> <channel1> <channel2> <outputDir>' )
      .description( 'Outputs most dominant colors' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
          const channel1 = getChannel( args.channel1 );
          const channel2 = getChannel( args.channel2 );

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

                                var temp = pixelRBG[channel1];
                                pixelRBG[channel1] = pixelRBG[channel2];
                                pixelRBG[channel2] = temp;

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
