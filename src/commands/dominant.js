const fsAutocomplete = require('vorpal-autocomplete-fs');
const vorpal = require('../vorpal').vorpal;
const getTopColors = require('../utils/topcolors').getTopColors;
const rgbHex = require( 'rgb-hex' );
const jimp = require("jimp");

vorpal.command( 'dominant <imageDir>' )
      .option( '-h, --hex', 'Outputs the colors in hex format' )
      .option( '-r, --rgb', 'Outputs the colors in rgb format (default)' )
      .description( 'Outputs most dominant colors' )
      .autocomplete( fsAutocomplete() )
      .action(( args, callback ) =>
      {
        getTopColors(args.imageDir)
            .then( colors =>
            {
                if( args.options.hex )
                {
                    colors = colors.map( color => {
                        return `#${rgbHex( color[1][0], color[1][1], color[1][2] )}`;
                    });
                    console.log( colors );
                    callback();
                }
                else
                {
                    colors = colors.map( color => {
                        return { red: color[1][0], green: color[1][1], blue: color[1][2] };
                    });
                    console.log( colors );
                    callback();
                }
            })
            .catch( error => {
                console.log( error )
                callback();
            })
      });
