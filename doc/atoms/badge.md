# Badges

## Default Badge
We have default filter badge:

<span class="badge">ID: something</span>
```html
<span class="badge">
	<span>ID: something</span>
</span>
```

## Change color of badge
Per default the badges got the schema colors 3 as font color and 1 as background color.
With the modifier classes `.mod-red` or `.mod-gray` you can change the badge to be gray or red.
If you want to colorize you're badge different you have to create a new class using the 
`badge-color($font-color, $background-color, $border-color)` mixin. The default color for the border
is the passed background color.

<span class="badge mod-gray">Grey badge</span>
<span class="badge mod-red">Red badge</span>
<span class="badge" style="color: #FFF6C4; background-color: #FF6900; border-color: #FF6900">
	Yellow badge
</span>
```scss
.badge.mod-yellow {
  @include badge-color($egg-white, $zalando-orange)
}
```

## Grouping badges
If you want to display multiple badges together you can use a badge group which
reduces the spacing between the badges.

<div class="badge-group">
	<span class="badge">Something</span><span class="badge">Else</span>
</div>
```html
<div class="badge-group">
	<span class="badge mod-gray">Something</span>
	<span class="badge mod-red">Else</span>
</div>
```