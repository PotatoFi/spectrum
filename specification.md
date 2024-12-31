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

# To-Do

* Change signature line widths depending on zoom level
* Add frequency markers
* Add transparent fill to signatures
* Refactor JSON - each technology should contain a group of channels with the same width
* Stack labels correctly
* Limit panning. The edge of the viewawble spectrum should not pan past the center of the screen.
* Show subcarriers at a certain zoom level
* Implement primary band labels
* Proper secondary (UNII) band labels
