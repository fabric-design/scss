# Pagination

We have also default pagination:
Functions like ```navigate()``` need to move user to correct page.
You also can disable working arrows by changing the ```disabled ``` property of buttons:
This example of aurelia disable buttons if you are on first page or on last page:
```html
    <button class="mod-flat" disabled.bind="page < 1" onclick="navigate(-1)">&lsaquo;</button>
    <button class="mod-flat" disabled.bind="page >= total / size - 1" onclick="navigate(1)">&rsaquo;</button>
```

<div class="pagination">
    <button class="mod-flat" onclick="navigate(-1)">&lsaquo;</button>
    <span class="current">1-5</span>
    <span class="separator">of</span>
    <span class="total">20</span>
    <button class="mod-flat" onclick="navigate(1)">&rsaquo;</button>
</div>
```html
<div class="pagination">
    <button class="mod-flat" onclick="navigate(-1)">&lsaquo;</button>
    <span class="current">1-5</span>
    <span class="separator">of</span>
    <span class="total">20</span>
    <button class="mod-flat" onclick="navigate(1)">&rsaquo;</button>
</div>
```
