# Ikona ([Εικόνα](https://el.wikipedia.org/wiki/%CE%95%CE%B9%CE%BA%CF%8C%CE%BD%CE%B1))

CLI tool for image processing

## Install & Run

`sudo npm install -g ikona`

Then from your command line just type `ikona`

Now you can use the following commands:

## Commands

###`help [command]`

Displays helpful information for a command. e.g. `help resize`

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

###`dominant <imageDir>`

Displays the dominant colors of an image

##### Example

`dominant abstract.jpg -h`

##### Options

|Option   	|  Description 	|
|---	|---	|
| -h   	|  Displays the colors in hex format 	|
| -w  	|  Displays the colors in rgba format 	|
