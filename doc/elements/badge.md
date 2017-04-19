# Badges

## Default Badge
We have default filter badge:
<span class="wsds-filter-badge">100</span>
```html
<span class="wsds-filter-badge">100</span>
```

## Change color of badge
To change color of text and background color of badge in your scss file you need to use badge mixin.
Firstly, you need to add color of text and then color of background:

```css
.wsds-filter-badge {
  @include badge($zalando-orange, $west-side)
}
```

Of course, you can create your own class:
```css
.wsds-yellow-filter-badge {
  @include badge($grandis, $west-side)
}
```
