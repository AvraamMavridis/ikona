# Ikona ([Εικόνα](https://el.wikipedia.org/wiki/%CE%95%CE%B9%CE%BA%CF%8C%CE%BD%CE%B1))

CLI tool for image processing

![Brush](http://downloadicons.net/sites/default/files/paint-brush-icon-67669.png)

## Install & Run

`sudo npm install -g ikona`

Then from your command line just type `ikona`

Now you can use the following commands:

## Commands

###`help [command]`

Displays helpful information for a command. e.g. `help resize`

##### Example

`help resize`

![HELP](http://s10.postimg.org/lax3960d5/Screen_Shot_2016_09_21_at_10_36_17.png)

###`exit`

Exits from the cli

###`resize <imageDir>`

Resizes an image.

##### Example

`resize realcat.jpg -h 200 -w 200 -o resizecat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](https://s11.postimg.org/kqwo37k4j/resizecat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used for resizing 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

###`scale <imageDir>`

Scale an image by the given factor

##### Example

`scale realcat.jpg -f 1.5 -o bigcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](https://s13.postimg.org/4hxp2u7xj/bigcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -f   	|  Scale factor 	|   Optional, defualt=2	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

###`scaletofit <imageDir>`

Scale the image to the largest size that fits inside the given width and height

##### Example

`scaletofit realcat.jpg -h 450 -w 500 -o scaletofitcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](https://s16.postimg.org/84vhlw93p/scaletofitcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

###`cover <imageDir>`

Scale the image to the given width and height, some parts of the image may be clipped

##### Example

`cover realcat.jpg -h 300 -w 100 -o covercat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](https://s22.postimg.org/58s2rskdt/covercat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

###`contain <imageDir>`

Scale the image to the given width and height, some parts of the image may be letter boxed

##### Example

`contain realcat.jpg -h 200 -w 250 -o containcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](https://s12.postimg.org/llck2q2ul/containcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`swap <imageDir> <channel1> <channel2>`

Swap the color channels of an image

##### Example

`swap realcat.jpg green blue`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](https://s14.postimg.org/g8rnqjcpt/realcat2.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used for resizing 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

###`crop <imageDir>`

Crop an image on the given points

##### Example

`crop realcat.jpeg -x 20 -y 20 -h 70 -w 70 -o croppedcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s15.postimg.org/9dff4vssr/croppedcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -x   	|  Starting point in the x axis 	|   Optional, defualt=0	|
| -y  	|  Starting point in the y axis 	|   Optional, defualt=0		|
| -h   	|  The height of the new image 	|   Optional, defualt=250	|
| -w  	|  The width of the new image 	|   Optional, default=250	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`brightness <imageDir>`

Adjust the brighness by a value -1 to +1

##### Example

`brightness realcat.jpg -f 0.5 -o brightcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s11.postimg.org/7te4pxog3/brightcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -f   	|  Brightness factor 	|   Optional, defualt=1	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`contrast <imageDir>`

Adjust the contrast by a value -1 to +1

##### Example

`contrast realcat.jpg -f 0.5 -o contrastcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s13.postimg.org/ja1g9un93/contrastcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -f   	|  Contrast factor 	|   Optional, defualt=1	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`grey <imageDir>`

Remove colour from the image

##### Example

`grey realcat.jpg -o greycat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s16.postimg.org/qklu7pzr9/greycat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`normalize <imageDir>`

Normalize the channels in an image

##### Example

`normalize realcat.jpg -o normalcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s9.postimg.org/5j020j4rj/normcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`invert <imageDir>`

Normalize the channels in an image

##### Example

`invert realcat.jpg -o invertcat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s11.postimg.org/y8p1u7io3/invertcat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`dominant <imageDir>`

Displays the dominant colors of an image

##### Example

`dominant abstract.jpg -h`

##### Options

|Option   	|  Description 	|
|---	|---	|
| -h   	|  Displays the colors in hex format 	|
| -w  	|  Displays the colors in rgba format 	|

###`fade <imageDir>`

Multiply the alpha channel by each pixel by the factor f, 0 - 1

##### Example

`fade realcat.jpg -f 0.5 -o fadecat`


##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -f   	|  Contrast factor 	|   Optional, defualt=1	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`sepia <imageDir>`

Apply a sepia wash to the image

##### Example

`sepia realcat.jpg -o sepiacat`

![Cat](https://s16.postimg.org/v26wzfpat/realcat.jpg)   ![Cat2](http://s18.postimg.org/x9ujdy6l5/sepiacat.jpg)

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
