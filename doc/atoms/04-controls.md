# Controls

## Checkboxes
**Checkboxes** are used to select multiple elements from list.

<input type="checkbox" id="vote" name="vote" checked />
<label for="vote">Premium Article</label>
```html
<input type="checkbox" id="vote" name="vote" checked />
<label for="vote">Premium Article</label>
```
![Default](src/style/assets/con-ex1.jpg)
<p>Checkboxes in Fabric allow users to select multiple elements from list, table or form.</p>

![Default](src/style/assets/con-ex2.jpg)
<p>If user can select only one element - use <b>Radio Buttons</b> instead.</p>

![Default](src/style/assets/con-ex3.jpg)
<p>For on-off alternatives - use <b>Switch</b> instead.</p>

![Default](src/style/assets/con-ex4.jpg)
<p>If available space does not allow you to show options naturally - use <b>Dropdown</b> instead.</p>


## Radio Buttons
**Radio Buttons** are used to select only elements from list.

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
![Default](src/style/assets/con-ex5.jpg)
<p>Radio Buttons in Fabric allow users to select one elements from list, table or form.</p>

![Default](src/style/assets/con-ex6.jpg)
<p>If user can select more than one element - use <b>Checkboxes</b> instead.</p>

![Default](src/style/assets/con-ex7.jpg)
<p>For on-off alternatives - use <b>Switch</b> instead.</p>

![Default](src/style/assets/con-ex8.jpg)
<p>If available space does not allow you to show options naturally - use <b>Dropdown</b> instead.</p>

## Switches
**Switches** are used to select to enable or disable specific option. They require the input to be from type *checkbox* and to have the class *.mod-switch*.

<input type="checkbox" class="mod-switch" id="switch"/>
<label for="switch">Save changes automatically</label>
```html
<input type="checkbox" class="mod-switch" id="switch"/>
<label for="switch">Save changes automatically<</label>
```
![Default](src/style/assets/con-ex9.jpg)
<p>Switches in Fabric are used for on-off choice.</p>

![Default](src/style/assets/con-ex10.jpg)
<p>If choice can not be naturally shown as on-off alternative - use <b>Checkboxes</b> or <b>Radio Buttons</b>.</p>

## Disabled Controls
![Default](src/style/assets/con-ex11.jpg)
<p>Use only when you provide clear suggestion how to enable it.</p>

![Default](src/style/assets/con-ex12.jpg)
<p>If there is no clear way to enable element - hide it.</p>

## Reverse Order
Although default labels are placed on the right side of the control element, sometimes they can also be placed on the left.
<!---
**Reverse order** of input and label, so the label is on the right side of the toggle, can be done by wrapping the toggle and label with the class *.mod-toggle-reverse*.
-->
<div class="mod-toggle-reverse">
	<input type="checkbox" class="mod-switch" id="switch2"/>
	<label for="switch2">Off/On</label>
</div>
```html
<div class="mod-toggle-reverse">
	<input type="checkbox" class="mod-switch" id="switch2"/>
	<label for="switch2">Off/On</label>
</div>
```
