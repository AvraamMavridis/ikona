# Ikona ([Εικόνα](https://el.wikipedia.org/wiki/%CE%95%CE%B9%CE%BA%CF%8C%CE%BD%CE%B1))

CLI tool for image processing

## Commands

###`help [command]`

Displays helpful informantion for a command. e.g. `help resize`

###`exit`

Exits from the cli

###`resize`

Resizes an image.

##### Options

|Option   	|  Description 	|   	|
|---	|---	|---	|
| -h   	|  The height of the new image 	|   Optional, defualt="auto"	|
| -w  	|  The width of the new image 	|   Optional, default="auto"	|
| -o 	|  The name of the new file 	|   Optional, default="chroma.jpg"	|
| -m 	|  The algorithm that will be used for resizing 	| [Bilinear, Nearest_Neighbor, Bicubic, Hermite, Bezier], default=Bilinear	|

