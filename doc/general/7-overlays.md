# Overlays
Layers are very efficient in showing detailed data or advanced actions without leaving current context. They should be considered as a standard way to show details in Fabric based products.

Do not use it when:
- - additional data can be shown on current screen without making view less understandable;
- - when action suggests that user doesn’t need current view anymore.


## Details Layer
It is the default layer solution for most of Fabric use cases. It is a simple and subtle solution do show element details without hiding screen information.

![Example](/img/over-ex10.svg)
<p>Use it to show limited details data or additional action elements.</p>

![Example](/img/over-ex11.svg)
<p>For a bigger amount of data use <b>Full-page Layer</b> or <b>Side Panel</b>.</p>


## Modal Window
Should be used ONLY for task stopping events (like critical error).

![Example](/img/over-ex11.svg)
<p>Use it for crucial decisions that interfere user workflow.</p>

![Example](/img/over-ex7.svg)
<p>Use it for crucial information that break standard user workflow.</p>

![Example](/img/over-ex8.svg)
<p>Standard decisions and editions elements should be placed next to main data view or on <b>Details Layer</b></p>

![Example](/img/over-ex9.svg)
<p>For standard system feedback use <b>Notification system</b>.</p>

## Full-page Layer
Whole page content is hidden under it.

It should be used only if default page content is not needed when user is looking for layer info. It also shouldn’t be used for limited amount of information.

![Example](/img/over-ex4.svg)
<p>Use it when you need to focus additional information about element.</p>

![Example](/img/over-ex5.svg)
<p>For limited amount of data, use <b>Details Layer</b>.</p>


## Side Panel
Side layers can be used on the right (only for filters and navigation elements), left or bottom edge of the screen.

![Example](/img/over-ex1.svg)
<p>Use it when you need to show additional information about element without hiding the main data.</p>

![Example](/img/over-ex2.svg)
<p>For limited amount of data, use <b>Details Layer</b>.</p>

![Example](/img/over-ex3.svg)
<p>Additonal decision options should be placed on <b>Details Layer</b>.</p>


## Interactions
Side, context and full-page layers are shown when user clicks proper element (usually text link or button). They can be hidden by interacting with the same element again or by clicking proper action on the layer itself (like "Done" button).

Layers appearence/disapearence should be animated. Use “slide” animation for side and dialog layers and “scale” animations for full-page and modals.
