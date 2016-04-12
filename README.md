# Wholesale-Design-System

The Wholesale-Design-System UI toolkit is a highly-modular design system for rapid web page development. It contains different materials that can be assembled into more complex page layouts.

### Modifying

**Change the design**

The design is based on ([bourbon.io](http://bourbon.io)):

* Bourbon 4.2.x (Mixins)
* Neat 1.7.x (Grid)
* Refills (Components)
* Bitters (Basic Variables)

To change the design, we change the tokens or the components in `./refills/`.

Add the styles as a new FANCY.scss file to `./custom/` and reference it in `./custom/_custom.scss`.

### Use the design/framework

install the package

`npm install git+ssh://github.bus.zalan.do/WholesaleDesignSystem/Styleguide-SCSS.git --save`

**ATTENTION:**
Git sometime removes the 'git+' prefix from the URL. If there are problems, check your package.json.

use it in your styles

`@import "node_modules/wholesale-styleguide-scss/index"`
