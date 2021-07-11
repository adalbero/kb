# Adalbero's KB - Markdown syntax

Tags: `#markdown #kb #workflow`

### Headers

# H1

## H2

### H3

#### H4

##### H5

###### H6

Alternatively, for H1 and H2, an underline-ish style:

# Alt-H1

## Alt-H2

## Syntax highlight

### Typescript

```typescript
const language = "typescript";
```

### CSS

```css
.class {
  background: #808080;
}
```

### SQL

```sql
SELECT object_name FROM dm_document WHERE r_modify_date >= DATE(TODAY);
```

### Inline Code

Value of `title` is empty.

## Tables

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

## Horizontal Rule

Three or more...

---

Hyphens

---

Asterisks

---

Underscores

## Lists

1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

## Blockquote

> Blockquote to the max

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

## Links

Go to [Google](https://www.google.com) and enjoy.

## Youtube Video

[![Youtube Video](https://img.youtube.com/vi/HUBNt18RFbo/0.jpg)](https://www.youtube.com/watch?v=HUBNt18RFbo)

## Reference

> - [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
> - [ngx-markdown](https://jfcere.github.io/ngx-markdown/get-started)
> - [Prism JS](https://prismjs.com/)
