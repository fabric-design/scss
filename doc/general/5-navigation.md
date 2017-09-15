# Navigation
System navigation is not the only menu. It is consistent structure that allows users to quickly and efficiently transfer to other parts of the system.

Navigation structure and used elements highly depend on system [Information Architecture](http://www.uxbooth.com/articles/complete-beginners-guide-to-information-architecture/) structure. Think about it before you make decision about your navigation and menu structure.

![Example](src/style/assets/navigation1.svg)


Fabric Design System promote four main navigation solutions:

## Context Links
The most natural way to move through the system is a system of well placed context links that leads to proper place.

![Example](src/style/assets/navigation2.svg)

## Menu Structure
Menus are used to visualize structure of the product.

<div style="position: relative; overflow: hidden; padding-bottom: 120px">
  <ws-header appName="Demo Page" links.bind="[{label: 'Planning', href: 'LinkValue', onClick: log},{label: 'Orders',href: '2222',children: [{label: 'Pre-Orders', href: 'Go go app 1'},{label: 'Re-Orders', href: 'Go go app 1'}]},{label: 'Articles', href: 'LinkValue', onClick: log}]"></ws-header>
</div>
![Menu](src/style/assets/menu-ex1.jpg)
<p>Technical structure is often confusing for users. Organize menu structure in a way that will be clear for them.<p>

## Tabs
Tabs can be used to divide page content into sections. It should be used to show only content relevant to specific user actions.

![Example](src/style/assets/navig5.jpg)

## Overlays
Layers are very efficient in showing detailed data or advanced actions without leaving current context. They should be considered as a standard way to show details in Fabric based products.

![Example](src/style/assets/navigation6.png)

More details in [Overlays](general/7-overlays)
