# Input Fields

Input fields are used to insert text data to the system. They can be used as stand-alone element as well as part of other elements like Tables, Filters or Date Picker.

## Text Input
Used to enter specific data (like number value, name etc.)
<label class="mod-large">Article Name</label>
<input type="text" placeholder="" />
```html
<label class="mod-large">Article Name</label>
<input type="text" placeholder="" />
```

## Text Area
Used to enter longer text forms (like comments, descriptions etc.)
<label class="mod-large">Comments</label>
<textarea style="width: 300px; height: 150px;">Please correct article color.</textarea>
```html
<label class="mod-large">Comments</label>
<textarea>Please correct article color.</textarea>
```
<!---
## Selection input
Used to enter data from predefined options. If one value is more common, consider putting it by default.
<label class="mod-large">Article Color</label>
<select>
    <option>Red</option>
    <option>Blue</option>
    <option>White</option>
</select>
```html
<label class="mod-large">Article Color</label>
<select>
    <option>Red</option>
    <option>Blue/option>
    <option>White</option>
</select>
```
-->

## Required fields
Inputs that are **Required** to fulfill looks like that:
<label class="required mod-large">Article Name</label>
<input type="text" value="White Sneakers"/>
```html
<label class="required mod-large">Article Name</label>
<input type="text" value="White Sneakers"/>
```

## Input size
![Default](src/style/assets/inp-ex1.jpg)
<p>If your input has fixed value length, adjust size of your input to it.</p>

![Default](src/style/assets/inp-ex2.jpg)
<p>Do not make input longer than the longest reasonable input.</p>
