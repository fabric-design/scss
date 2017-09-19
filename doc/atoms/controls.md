# Controls

## Checkboxes
![Default](src/style/assets/con-ex1.jpg)
<p>Checkboxes in Fabric allow users to select multiple elements from list, table or form.</p>

![Default](src/style/assets/con-ex2.jpg)
<p>If user can select only one element - use <b>Radio Buttons</b> instead.</p>

![Default](src/style/assets/con-ex3.jpg)
<p>For on-off alternatives - use <b>Switch</b> instead.</p>

![Default](src/style/assets/con-ex4.jpg)
<p>If available space or element's amount does not allow you to show options naturally - use <b>Dropdown</b> instead.</p>

**Checkboxes** consists of an label and an input element. Important is that the label is placed directly after the input element.

<input type="checkbox" id="vote" name="vote" checked />
<label for="vote">Premium Article</label>
```html
<input type="checkbox" id="vote" name="vote" checked />
<label for="vote">Premium Article</label>
```

## Radio Buttons
![Default](src/style/assets/con-ex5.jpg)
<p>Radio Buttons in Fabric allow users to select one elements from list, table or form.</p>

![Default](src/style/assets/con-ex6.jpg)
<p>If user can select more than one element - use <b>Checkboxes</b> instead.</p>

![Default](src/style/assets/con-ex7.jpg)
<p>For on-off alternatives - use <b>Switch</b> instead.</p>

![Default](src/style/assets/con-ex8.jpg)
<p>If available space or element's amount does not allow you to show options naturally - use <b>Dropdown</b> instead.</p>


**Radio Buttons**  markup looks similar to checkboxes except that you specify the type as 'radio' and that you add a name to create a radio group.

<input type="radio" name="action" value="premium" id="premium" checked/>
<label for="premium">Premium Article</label>
<input type="radio" name="action" value="regular" id="regular"/>
<label for="regular">Regular Article</label>
```html
<input type="radio" name="action" value="premium" id="premium" checked/>
<label for="premium">Premium Article</label>
<input type="radio" name="action" value="regular" id="regular"/>
<label for="regular">Regular Article</label>
```

## Switches
![Default](src/style/assets/con-ex9.jpg)
<p>Switches in Fabric are used for on-off choice.</p>

![Default](src/style/assets/con-ex10.jpg)
<p>If choice can not be naturally shown as on-off alternative - use <b>Checkboxes</b> or <b>Radio Buttons</b>.</p>

**Switches** requires the input to be from type *checkbox* and to have the class *.mod-switch*.

<input type="checkbox" class="mod-switch" id="switch"/>
<label for="switch">Save changes automatically</label>
```html
<input type="checkbox" class="mod-switch" id="switch"/>
<label for="switch">Save changes automatically<</label>
```

## Disabled Controls
![Default](src/style/assets/con-ex11.jpg)
<p>Use only when you provide clear suggestion how to enable it.</p>

![Default](src/style/assets/con-ex12.jpg)
<p>If there is no clear way to enable element - hide it.</p>
