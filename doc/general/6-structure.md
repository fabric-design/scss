# Structure

## Header
<div style="width:100%; height:40px; background-color:#5D6B88 ;box-shadow: 0px 1px 2px;"></div>

Part of every view. Main navigation point for every system developed with DS.
The color is No. 5 of used color scheme and width: always 100%

Don’t:
- - use alternative versions of header that are not described in Design System;
- - use it in width lesser than 100%;
- - create screens without it.


## Top Panel
<div style="width:100%; height:80px; background-color:white ;box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.26);"></div>

Optional element. Might be used to separate view master data from the rest. Shouldn’t be used with VERTICAL MENU or DETAILS PANEL.
Width: always 100%

Don’t:
- - use it when data in panel is not “parental” to the rest of screen data;
- - use it in width lesser than 100%;
- - use it when left or right panel is visible by default;
- - hide any content behind panel;
- - put fixed position to it.


## Sheet
<div class="card" style="width:700px; height:600px;"></div>

Basic view component. Every view needs to be built from Sheet or Tile(s). Sheet can be sliced into smaller pieces through grid.

Don’t:
- - use too many sheets in one screen (usually one, three is maximum);
- - afraid to put additional content outside the sheet;


## Tile
<div class="card" style="width:300px; height:300px;"></div>

<div class="card" style="width:700px; height:300px;"></div>

Alternative main view component. Every view needs to be built from Sheet or Tile(s). Number of used tiles depends on needs. Tiles can be merged into bigger tiles. Standard tile width is 6 grid columns (minimum 3 grid columns)


## Side Panels
<div class="card" style="width:250px; height:700px;"></div>

### Left Panel
Should be used only when it is reasonable need for menu or fixed filters panel.

Don’t:
- - use it for different purpose than menu or filters;
- - show it by default if content is not crucial for screen usage;

### Right Panel
Used to show additonal data which does not belongs directly to the main view data (ex. updates feed) or shows more detail info about specific content.

Don’t:
- - show it by default if content is not crucial for screen usage;
