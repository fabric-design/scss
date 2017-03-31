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

## Switches
We support common checkboxes, radio buttons and on/off switches

**Checkboxes** constis of an label and an input element. Don't forget to add the class .label and for attribute to the label, 
the class .checkbox and an id to the input.

<input type="checkbox" class="checkbox" id="vote" name="vote" checked />
<label class="label" for="vote">Is wholesale sexy?</label>
```html
<input type="checkbox" class="checkbox" id="vote" name="vote" checked />
<label class="label" for="vote">Is wholesale sexy?</label>
```

**Radio buttons** behave the same like checkboxes. You have to add the class *.radio* and an *id* to the input.
The label requires the class *.label* and the for attribute to forward the clicks to the input.

<input type="radio" class="radio" name="action" value="rockz" id="rockz" checked/>
<label class="label" for="rockz">Wholesale rockz</label>
<input type="radio" class="radio" name="action" value="sux" id="sux"/>
<label class="label" for="sux">Wholesale sux</label>
```html
<input type="radio" class="radio" name="action" value="nothing" id="nothing" checked/>
<label class="label" for="nothing">Do nothing</label>
<input type="radio" class="radio" name="action" value="something" id="something"/>
<label class="label" for="something">Do something</label>
```

**Switches** requires the input to be from type *checkbox* and to have the class *.checkbox-switch*.
The label requires the class *.label*. For better user experience you should link the label and the input using id and for attributes.

<input type="checkbox" class="checkbox-switch" id="switch"/>
<label class="label" for="switch">Off/On</label>
```html
<input type="checkbox" class="checkbox-switch" id="switch"/>
<label class="label" for="switch">Off/On</label>
```
