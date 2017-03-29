# Buttons

## Button Styles
We have five button styles. Primary, secondary, toggle, flat and icon buttons. 
Giving your primary, secondary and tertiary action buttons the proper visuel weight facilitates user flow.
Without proper visual weight, you can cause the user to make mistakes.

It is importatnt that the primary button have the strongest visual weight and identifies the primary action in a set of buttons.

<button>Primary Button</button>
```html
<button>Primary button</button> 
```

A **secondary button** isn't as import as a primary one, so it shouldn't call as much attention. This button could be used for actions such as Cancel, Abort, Reset or Go back. 

<button class="mod-secondary">Secondary Button</button>
```html
<button class="mod-secondary">Secondary Button</button>
```

**Toggle buttons** allow single choice to be selected or deselected

<button class="mod-secondary mod-toggle">Toggle Button</button>
```html
<button class="mod-secondary mod-toggle">Toggle Button</button>
```

**Flat buttons** looks like a normal anchor but on click they become the look of an button for a short time.

<button class="mod-flat">Flat button</button>
```html
<button class="mod-flat">Flat button</button>
```

A button could also just contain an **icon**

<button class="mod-secondary"><span class="icon-pencil-stroke icon16"></span></button>
```html
<button class="mod-secondary">
    <span class="icon-pencil-stroke icon16"></span>
</button>
```

## Button states
Buttons can have different states which can be represented using classes.

**Disabled**

<button class="is-disabled">Disabled button</button>
```html
<button class="is-disabled">Disabled button</button>
```

**Focused**

<button class="is-focused">Focused button</button>
```html
<button class="is-focused">Focused button</button>
```

**Toggled**

<button class="is-toggled">Toggled button</button>
```html
<button class="is-toggled">Toggled button</button>
```

## Button sizes
All of our buttons can be small, normal or large. For normal buttons just do nothing and for small or large buttons add a modifier class.

<button class="mod-large">Large button</button>
<button>Normal button</button>
<button class="mod-small">Small button</button>
```html
<button class="mod-large">Large button</button>
<button>Normal button</button>
<button class="mod-small">Small button</button>
```

