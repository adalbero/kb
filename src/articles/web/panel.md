# How to layout HTML in panels (top, middle, bottom, left, right, center) with CSS

> Tags: `#panel` `#css` `#flex`

## Container

- Should use 100% of screen
  - to use 100% of parent, parent mast have `position: relative`.
- Layout children with `flex column`

```css
.panel {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
}
```

## Top

- Should have a prefered height of `5rem`
- Should grow to fit content.

```css
.panel-top {
  flex: 0 0 5rem;
}
```

## Bottom

- Same as Top

```css
.panel-bottom {
  flex: 0 0 5rem;
}
```

## Middle

- Should grow to fit all remaining space
- Should not grow more then remaining space to fit bigger content

```css
.panel-middle {
  flex: 1 1 auto;

  display: flex;
  flex-direction: row;
  overflow: hidden;
}
```

## Left

- Should have a prefered width of of `10rem`
- Should show scrollbar if content is bigger

```css
.panel-left {
  flex: 0 0 10rem;
  overflow: auto;
}
```

## Right

- Should have a prefered width of of `10rem`
- Should show scrollbar if content is bigger

```css
.panel-right {
  flex: 0 0 100px;
}
```

## Center

- Should grow to fit remaining space
- Should show scrollbar if content is bigger

```css
.panel-center {
  flex: 1 1 auto;
  overflow-y: auto;
}
```

## CodePen

> <p class="codepen" data-height="535" data-theme-id="dark" data-default-tab="html,result" data-user="adalbero" data-slug-hash="mdWQVgb" data-preview="true" style="height: 535px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Panels">
>   <span>See the Pen <a href="https://codepen.io/adalbero/pen/mdWQVgb">
>   Panels</a> by Adalbero Guimaraes (<a href="https://codepen.io/adalbero">@adalbero</a>)
>   on <a href="https://codepen.io">CodePen</a>.</span>

</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
