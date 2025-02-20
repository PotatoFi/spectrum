# Spectrum Chart

The radio spectrum is a complicated place, with many overlapping technologies and bands that vary depending on the regulatory domain. The radio spectrum is much too complicated to represent on a static chart, so I've always wanted to create something interactive to represent it.

Additionally, I've always loved graphical Wi-Fi scanners and spectrum analysis tools, and figured that an interactive spectrum chart tool could build on the graphical Wi-Fi scanner concept.

Side note: As far as I know, credit for the first graphical Wi-Fi scanner goes to Ryan Woodings (and probably also Brian Tuttle), who pioneered the idea with inSSIDer 2 at MetaGeek, building on their experience with spectrum analyzers in the 2.4 GHz band.

# Usage

## Panning

Pan across the spectrum by:
* Two-finger swiping left and right on a trackpad
* Left-clicking and dragging with a mouse pointer
* Swiping horizontally on a touchscreen

## Zooming

Zoom in and out of the spectrum by:
* Two-finger scrolling on a trackpad
* Rolling the scroll wheel on a mouse
* Pinching on a touchscreen

## Options

Use the hamburger menu 🍔 in the upper left to hide and show different technologies, channel widths, and modes. You can also change the height of the signatures/masks with the slider.

## Shortcuts

To jump to a specific part of the band, use the shortcuts menu. ⭐


## Download

Use the download button to take a snapshot of the canvas, and download it.

# How can I use it?

Feel free to use this chart for:

* A reference, whenever you want to look something up.
* Entertainment.
* Teaching classes about radio technologies such as Wi-Fi, both in a paid and unpaid setting.

Please don't copy my code and redistribute it, or host it anywhere else. I might add a more permissive license in the future, but not right now.

# Future Plans

For now, I've worked on this project alone to learn HTML, CSS, and JavaScript, and to have something creative to work on. There has been some interest by my employer (Hamina Wireless) to put some real development effort behind the idea, and make an official "Hamina Spectrum Chart". Maybe that will happen.

## Planned Features

I might add some of these features, but I am a novice developer. We'll see what I can get done.

* Overhaul the band label system, as there are tons of band labels out there that I'd like to apply but the system isn't flexible enough.
* Add more technologies, such as cellular bands (I have a pretty extensive list from Keith at Wireless LAN Pros).
* Show subcarriers for 40, 80, and 160 MHz Wi-Fi channels.
* Show 802.11ax subcarriers.
* Mouseover inspector that draws a vertical line and shows the current frequency.
* Store settings (such as frequency, zoom level, and selected options) in a cookie.
* Put all of the labels for a particular technology on the same row (I had this in the past but the code was mind-bogglingly complicated and hard to work with).
* Limit panning to the viewable spectrum.
* Expand the spectrum beyond 8 GHz.
* Let the user zoom in more to look at technologies below VHF.

## Feature Requests

Let's try to use the tools built into GitHub for that. Remember that I am a novice dev, learning as I go, so some features might be outside of my capabilities.
