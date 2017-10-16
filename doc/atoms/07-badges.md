# Badges

## Filter Badge
Badges are used to show active filter criteria.

<span class="badge">ID: something</span>
```html
<span class="badge">
	<span>ID: something</span>
</span>
```

![Badge](src/style/assets/badg-ex1.jpg)
<p>Filter badges are placed over filtered area.</p>

![Badge](src/style/assets/badg-ex2.jpg)
<p>Badge colors need to be aligned with product theme colors.</p>

## Information badge
<!---
 Per default the badges got the schema colors 3 as font color and 1 as background color.
With the modifier classes `.mod-red` or `.mod-gray` you can change the badge to be gray or red.
If you want to colorize you're badge different you have to create a new class using the
`badge-color($font-color, $background-color, $border-color)` mixin. The default color for the border
is the passed background color.
-->
Used next to element to provide additional information. Use grey badge to show neutral information and red badge for attention/error messages.

<span class="badge mod-gray">Draft</span>
<span class="badge mod-red">Not delivered</span>
<!--- <span class="badge" style="color: #FFF6C4; background-color: #FF6900; border-color: #FF6900">
	Yellow badge
</span> -->
```html
	<span class="badge mod-gray">
		<span>Draft</span>
	</span>
	<span class="badge mod-red">
		<span>Not delivered</span>
	</span>
```

## Grouped badges
Used to group badges with similar informations (for examples two filters from the same category).

<div class="badge-group">
	<span class="badge">Sneakers</span><span class="badge">High Heels</span>
</div>
```html
<div class="badge-group">
	<span class="badge mod-gray">Sneakers</span>
	<span class="badge mod-red">High Heels</span>
</div>
```
