# Forms

## Inputs
Our forms consist in general of text inputs, selects which will be shown as dropdown, labels, buttons and custom elements like the date picker.
The button, date picker and dropdown related part can be found on it's separate page. 

A simple **text input** can have the types text, url, password, tel, number, color or email. 

<input type="text" placeholder="Wholesale rockz" />
```html
<input type="text" placeholder="Wholesale rockz" />
```

**Textareas** looks like an normal text input but you can resize it vertically. **Only vertically** 

<textarea>Wholesale rockz</textarea>
```html
<textarea>Wholesale rockz</textarea>
```

**Selects** looks similar to text inputs but with a dropdown list. 

<select>
    <option>Wholesale rockz</option>
    <option>Wholesale still rockz</option>
    <option>Wholesale rockz for sure</option>
</select>
```html
<select>
    <option>Wholesale rockz</option>
    <option>Wholesale still rockz</option>
    <option>Wholesale rockz for sure</option>
</select>
```

## Labels
All of our labels are displayed above the inputs

<label>Does wholesale rock?</label>
<input type="text" value="yes"/>
```html
<label>Does wholesale rock?</label>
<input type="text" value="yes"/>
```

To mark an input as **required** add the required class to the label

<label class="required">Does wholesale rock?</label>
<input type="text" value="yes"/>
```html
<label class="required">Does wholesale rock?</label>
<input type="text" value="yes"/>
```

## Toggles
We support common checkboxes, radio buttons and on/off switches

**Checkboxes** consists of an label and an input element. Important is that the label is placed directly after the input element.
For better user experience you should add an id attribute on the input and reference on it via an from attribute on the label.

<input type="checkbox" id="vote" name="vote" checked />
<label for="vote">Is wholesale sexy?</label>
```html
<input type="checkbox" id="vote" name="vote" checked />
<label for="vote">Is wholesale sexy?</label>
```

**Radio buttons**  markup looks similar to checkboxes except that you specify the type as 'radio' and that you add a name to create a radio group. 

<input type="radio" name="action" value="rockz" id="rockz" checked/>
<label for="rockz">Wholesale rockz</label>
<input type="radio" name="action" value="sux" id="sux"/>
<label for="sux">Wholesale sux</label>
```html
<input type="radio" name="action" value="nothing" id="nothing" checked/>
<label for="nothing">Do nothing</label>
<input type="radio" name="action" value="something" id="something"/>
<label for="something">Do something</label>
```

**Switches** requires the input to be from type *checkbox* and to have the class *.mod-switch*.

<input type="checkbox" class="mod-switch" id="switch"/>
<label for="switch">Off/On</label>
```html
<input type="checkbox" class="mod-switch" id="switch"/>
<label for="switch">Off/On</label>
```

**Reverse order** of input and label, so the label is on the right side of the toggle, can be done by wrapping the toggle and label with the class *.mod-toggle-reverse*.

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
