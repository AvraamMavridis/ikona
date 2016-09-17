# Ikona ([Εικόνα](https://el.wikipedia.org/wiki/%CE%95%CE%B9%CE%BA%CF%8C%CE%BD%CE%B1))

CLI tool for image processing

## Commands

###`help [command]`

Displays helpful information for a command. e.g. `help resize`

###`exit`

Exits from the cli

###`resize <imageDir>`

Resizes an image.

##### Example

`resize abstract.jpg -h 250 -w 250 -m Biliner -o abstract2.jpg`

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

`scale abstract.jpg -f 2 --m Biliner -o abstract2.jpg`

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -f   	|  Scale factor 	|   Optional, defualt=2	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

###`cover <imageDir>`

Scale the image to the given width and height, some parts of the image may be clipped

##### Example

`cover abstract.jpg -h 250 -w 250 -m Biliner -o abstract2.jpg`

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

`contain abstract.jpg -h 250 -w 250 -o abstract2.jpg`

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|

###`swap <imageDir> <channel1> <channel2>`

Swap the color channels of an image

##### Example

`swap abstract.jpg red green -o abstract2.jpg`

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
