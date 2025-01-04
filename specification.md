#Spectrum Chart

The goal of this project is to create an interactive, informative spectrum chart with a focus on the 2.4, 5, and 6 GHz bands.

The chart will feature multiple radio technologies that can be toggled on and off, for example:

* Wi-Fi
* Bluetooth
* Zigbee

#Layer Menu

This menu will give the user the ability to hide and show various layers.

* Frequency Markers
  * MHz
  * GHz
* Wi-Fi
  * Show Channel markers
  * Show Center Frequency markers
  * 2.4 GHz Wi-Fi
    * 20 MHz Channels
    * 40 MHz Channels
    * Show DSSS signatures
  * 5 GHz Wi-Fi
    * Show Band markers
    * 20 MHz Channels
    * 40 MHz Channels
      * 802.11n notation
      * 802.11ac notation
    * 80 MHz Channels
    * 160 MHz Channels
    * 80 + 80 MHz Channels
    * Mark DFS Channels
    * Mark TDWR Channels
  * 6 GHz Wi-Fi
    * 20 MHz Channels
      * PSCs
    * 40 MHz Channels
    * 80 MHz Channels
    * 160 MHz Channels
    * 320 MHz Channels
* Zigbee
  * Show channel markers
  * Show frequency markers
* Bluetooth
  * Show channel markers
  * Show frequency markers
* Bluetooth Low Energy
  * Show channel markers
  * Show frequency markers

# Channel labels and attributes

Each channel has a set of attributes, such as channel, center frequency, and max Tx power. The user can enable a "channel label" that shows these attributes. For the moment, I am planning to use html/css divs that hover over the chart, and sync with it so they can stack. A dotted vertical line will connect the channel chart to the label. The label will turn into a "..." when zoomed out.

## Mousing over a label



# Mouseover inspector

As the user mouses over, draw a vertical line. Above the vertical line, show the current frequency. Snap to the edges and centers of signatures.

# Cookies

The user's center frequency and zoom level will be saved to a cookie.

# Shortcuts

Using the same system as the cookies, the user can click `900 MHz`, `2.4 GHz`, `5 GHz`, or `6 GHz` to jump to a specific frequency and zoom level.

# To-Do

* Only draw line and ticks from 0 to 8000 MHz
* Add transparent fill to signatures
* Refactor JSON - each technology should contain a group of channels with the same width
* Stack labels correctly
* Limit panning. The edge of the viewawble spectrum should not pan past the center of the screen.
* Show subcarriers at a certain zoom level
