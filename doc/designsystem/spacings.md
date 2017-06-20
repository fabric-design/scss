# Space in Design Systems

## Space Fundamentals
It's based on [Eight Shapes 'Space In Design System'](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62)

```scss
$space-xxs: 0.25rem; // 4px
$space-xs: 0.5rem; // 8px
$space-s: 0.75rem; // 12px
$space-m: 1rem; // 16px
$space-default: $space-m;
$space-l: 1.5rem; // 24px
$space-xl: 2rem; // 32px
$space-xxl: 4rem; // 64px
```

## Inset

```scss
@include inset-spacing("m");
@include inset-spacing("l");
@include inset-spacing("xl");
```

## Inset Squish

```scss
@include inset-spacing-squish("xs");
@include inset-spacing-squish("m");
@include inset-spacing-squish("xl");
```

## Inset Stretch

```scss
@include inset-spacing-stretch("xs");
@include inset-spacing-stretch("s");
@include inset-spacing-stretch("m");
@include inset-spacing-stretch("l");
```

## Space  Stack

```scss
$space-stack-xxs: 0 0 $space-xxs 0;
$space-stack-xs: 0 0 $space-xs 0;
$space-stack-s: 0 0 $space-s 0;
$space-stack-m: 0 0 $space-m 0;
$space-stack-l: 0 0 $space-l 0;
$space-stack-xl: 0 0 $space-xl 0;
$space-stack-xxl: 0 0 $space-xxl 0;
```

## Space Inline

```scss
$space-inline-xxs: 0 $space-xxs 0 0;
$space-inline-xs: 0 $space-xs 0 0;
$space-inline-s: 0 $space-s 0 0;
$space-inline-m: 0 $space-m 0 0;
$space-inline-l: 0 $space-l 0 0;
$space-inline-xl: 0 $space-xl 0 0;
$space-inline-xxl: 0 $space-xxl 0 0;
```