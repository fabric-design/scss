# Buttons
## Button Hierarchy
**Primary Buttons**

Button type used to emphasize the most common or the most important action.

<button>Save</button>
```html
<button>Save</button>
```

![Grid](src/style/assets/butt-ex1.svg)
<p> Use it to make default action more visible. </p>

![Grid](src/style/assets/butt-ex2.svg)
<p>Instead of using multiple Primary Buttons, try to show alternative actions in a subtle form (like Secondary Buttons)<p>

### Secondary Buttons
Default button - use it if there is no reason to use different one. In contrast to Primary Button, it can be used many times on one screen.

<button class="mod-secondary">Cancel</button>
```html
<button class="mod-secondary">cancel</button>
```

![Grid](src/style/assets/butt-ex1.svg)
<p>You can combine Secondary Buttons with one Primary Button which emphasize the most important or common user action.<p>

![Grid](src/style/assets/butt-ex3.svg)
<p>When you can point out default action from alternatives - use Primary Button to emphatize it from the rest.<p>

### Flat buttons
Used for alternative interactions. Can be used to create clean visual priority.

<button class="mod-flat">show details</button>
```html
<button class="mod-flat">show details</button>
```
<!--
### Toggle buttons
Allow single choice to be selected or deselected.

<button class="mod-secondary mod-toggle">show price</button>
```html
<button class="mod-secondary mod-toggle">show price</button>
```
-->
A button could also just contain an **icon**. Ensure that users understand an action behind used icon.

<button class="mod-secondary mod-collapse"><span class="icon-pencil-stroke icon32"></span></button>
```html
<button class="mod-secondary mod-collapse">
    <span class="icon-pencil-stroke icon32"></span>
</button>
```

## Button states
### Disabled
<button class="is-disabled">Disabled button</button>
```html
<button class="is-disabled">Disabled button</button>
```
### Active
<button class="is-active">Active button</button>
```html
<button class="is-active">Active button</button>
```

<!---
### Toggled
<button class="mod-toggle is-active">Toggled button</button>
```html
<button class="mod-toggle is-active">Toggled button</button>
```
-->
## Button sizes
<button>Normal button</button>

Default size.
```html
<button>Normal button</button>
```

<button class="mod-large">Large button</button>

Used on visually simple screens to emphasize default screen action.
```html
<button class="mod-large">Large button</button>
```

<button class="mod-small">Small button</button>

Used inside other elements (ex. Tables) or in visually crowded screens.
```html
<button class="mod-small">Small button</button>
```

##Button Placement
![Grid](src/style/assets/buttons1.jpg)

### Decision buttons
Use to make a decision about a screen or an element (button examples: Save, Cancel, Send, Show Details)

Placed on the right bottom side of a related content.

If there is more than one option available do not use more than one Primary Button (you can use none).

![Grid](src/style/assets/butt-ex4.jpg)
![Grid](src/style/assets/butt-ex5.jpg)
<p>Always place Primary Action on the the right side of buttons group.</p>

### Modification buttons
Used to modify an element (button example: Edit).

Placed in the on the left, over related element.

### View buttons
Used to modify the way in which content is shown (exchange data input, for example filters).

Placed in the on the right, over related area. Do not use Primary Buttons as View Buttons.
