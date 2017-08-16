# Overlays
Layers are very efficient in showing detailed data or advanced actions without leaving current context. They should be considered as a standard way to show details in Fabric based products.

Do not use it when:
- - additional data can be shown on current screen without making view less understandable;
- - when action suggests that user doesn’t need current view anymore.


## Dialog window
Should be used to show element detailed info without hiding main screen. Element should be used when amount of additional info is limited - for big amount of data, use side layer

![Example](/img/overlays1.png)


## Modal window
Should be used ONLY for task stopping events (like critical error).

![Example](/img/overlays2.png)


## Full-page layer
Whole page content is hidden under details layer.

It should be used only if default page content is not needed when user is looking for layer info. It also shouldn’t be used for limited amount of information.

![Example](/img/overlays3.png)


## Side panel
Side layers can be used on the right (only for filters and navigation elements), left or bottom edge of the screen.

![Example](/img/overlays4.png)


## Interactions
Side, context and full-page layers are shown when user clicks proper element (usually text link or button). They can be hidden by interacting with the same element again or by clicking proper action on the layer itself (like "Done" button).

Layers appearence/disapearence should be animated. Use “slide” animation for side and dialog layers and “scale” animations for full-page and modals.
