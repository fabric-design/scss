# Radio Groups

## Usage
A radio group is a collection of radio controls with labels which are shown as toggle buttons.
They are included the same way as a normal radio control except that they are wrapped 
in a container with the class `radio-group`.

<div class="radio-group">
  <input type="radio" id="r1v1" name="r1" />
  <label for="r1v1">Cool</label>
  <input type="radio" id="r1v2" name="r1" />
  <label for="r1v2">Uncool</label>
</div>
```html
<div class="radio-group">
  <input type="radio" id="r1v1" name="r1" />
  <label for="r1v1">Cool</label>
  <input type="radio" id="r1v2" name="r1" />
  <label for="r1v2">Uncool</label>
</div>
```

## Sizes
As with normal buttons you can specify the size of the control with the classes
`mod-small` and `mod-large` (medium is the default).

<div class="radio-group mod-small">
  <input type="radio" id="r2v1" name="r2" />
  <label for="r2v1">Cool</label>
  <input type="radio" id="r2v2" name="r2" />
  <label for="r2v2">Uncool</label>
</div>
<div class="radio-group mod-large">
  <input type="radio" id="r3v1" name="r3" />
  <label for="r3v1">Cool</label>
  <input type="radio" id="r3v2" name="r3" />
  <label for="r3v2">Uncool</label>
</div>
```html
<div class="radio-group mod-small">
  <input type="radio" id="r2v1" name="r2" />
  <label for="r2v1">Cool</label>
  <input type="radio" id="r2v2" name="r2" />
  <label for="r2v2">Uncool</label>
</div>
<div class="radio-group mod-large">
  <input type="radio" id="r3v1" name="r3" />
  <label for="r3v1">Cool</label>
  <input type="radio" id="r3v2" name="r3" />
  <label for="r3v2">Uncool</label>
</div>
```

## Disabled
By either adding the attribute `disabled` or the class `is-disabled` to the input you can
disable single buttons. Disabling the whole control is not supported.

<div class="radio-group">
  <input type="radio" disabled id="r4v1" name="r4" />
  <label for="r4v1">Cool</label>
  <input type="radio" class="is-disabled" id="r4v2" name="r4" />
  <label for="r4v2">Uncool</label>
</div>
```html
<div class="radio-group">
  <input type="radio" disabled id="r4v1" name="r4" />
  <label for="r4v1">Cool</label>
  <input type="radio" class="is-disabled" id="r4v2" name="r4" />
  <label for="r4v2">Uncool</label>
</div>
```

## Selected value
To show a button as active / selected you must either add the attribute `checked` or the
class `is-active` or `is-checked` to the input.

<div class="radio-group">
  <input type="radio" checked id="r5v1" name="r5" />
  <label for="r5v1">Cool</label>
  <input type="radio" id="r5v2" name="r5" />
  <label for="r5v2">Uncool</label>
</div>
```html
<div class="radio-group">
  <input type="radio" checked id="r5v1" name="r5" />
  <label for="r5v1">Cool</label>
  <input type="radio" id="r5v2" name="r5" />
  <label for="r5v2">Uncool</label>
</div>
```
