const fs = require( 'fs' );
const ce = require( 'colour-extractor' );
const diff = require( 'color-diff' );
const values = require( 'lodash/values' );
const countBy = require( 'lodash/countBy' );
const rgbHex = require( 'rgb-hex' );
const sortBy = require( 'lodash/sortBy' );
const vorpal = require( 'vorpal' )();
const fsAutocomplete = require('vorpal-autocomplete-fs');

var basecolor = { R: 255, G: 1, B: 30 };

var basePallete = [
    { R: 243, G: 243, B: 243 },
    { R: 246, G: 182, B: 0 },
    { R: 34, G: 95, B: 120 },
    { R: 181, G: 43, B: 6 },
    { R: 119, G: 120, B: 111 },
    { R: 34, G: 34, B: 35 },
];

vorpal.command( 'pal -n <number> <imageDir>' )
      .description('Outputs color mapping')
      .autocomplete( fsAutocomplete() )
      .action(function(args, callback) {
         mapClosesImages( args.number, args.imageDir, callback );
      });

vorpal.command( 'topcolors <imageDir>' )
      .description('Outputs most dominant colors')
      .autocomplete( fsAutocomplete() )
      .action(function(args, callback) {
        getTopColors(args.imageDir)
            .then(callback)
            .catch(callback)
      });

const isFilePresent = function( fileDir )
{
    return new Promise( ( resolve, reject ) => {
        fs.exists( __dirname + '/' + fileDir, exists => {
            if( exists ) resolve( fileDir );
            if( !exists ) reject( `${fileDir} does not exist` );
        });
    })
}

const getTopColors = function( imageDir )
{
    return new Promise( ( resolve, reject ) => {
        isFilePresent( imageDir )
            .then( imageDir => {
              ce.topColours( __dirname + '/' + imageDir, true, resolve )
             });
    });
}

const mapClosesImages = function( number, imageDir, cb )
{
        getTopColors( imageDir )
        .then( colors => {
             colors = colors.map( color => ({ R: color[1][0], G: color[1][1], B: color[1][2] }));
             colors = values( diff.map_palette(colors, basePallete ));
             colors = colors.map( color => {
                 return rgbHex(color.R, color.G, color.B );
             });
             colors = countBy(colors);
             colors = Object.keys( colors ).map( color => ({ color: color, occurencies : colors[color]}));
             console.log( sortBy(colors, 'occurencies') );
             cb();
        } );
}

vorpal
  .show()
  .parse(process.argv);
