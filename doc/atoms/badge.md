# Badges

## Default Badge
We have default filter badge:

<span class="badge">
	<span>ID: something</span>
	<span class="icon-cross"></span>
</span>
```html
<span class="badge">
	<span>ID: something</span>
	<span class="icon-cross"></span>
</span>
```

## Change color of badge
To change color of text and background color of badge in your scss file you need to use badge mixin.
Firstly, you need to add color of text and then color of background:

<span class="badge" style="color: #FF6900; background-color: #FFF6C4">
	<span>ID: something</span>
	<span class="icon-cross"></span>
</span>
```scss
.badge {
  @include badge(14px, $zalando-orange, $egg-white)
}
```

Of course, you can create your own class:
```scss
.badge-yellow {
  @include badge($grandis, $west-side)
}
```
