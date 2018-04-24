# Selectors

## Listing common selectors that are good to know

### Selectors found in [this article](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048).

1. **Star (*)** - the star selector will target every single element on the page. It can also be used with child selectors. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome).

```css
* {
    margin: 0;
    padding: 0;
}

#container * {
    border: 1px solid black;
}
```

2. **ID (#X)** - the hash symbol prefixed with a selector will target the id of the element. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome).

```css
#container {
    width: 960px;
    margin: auto;
}
```
3. **Class (.X)** - the class selector can target multiple elements. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome).

```css
.error {
    color: red;
}
```
4. **Descendant (X Y)** - the descendant selector is useful for targeting elements nested underneath other elements. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome).

```css
li a {
    text-decoration: none;
}
```
5. **Type (X)** - the type selector targets all elements of a specific type. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome).

```css
a { color: red; }
ul { margin-left: 0; }
```

6. **Pseudo-classes (X:visited and X:link)** - the :link pseudo-class targets all anchor tags which have yet to be clicked on. The :visited pseudo-class targets all anchor tags which have been visited. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
a:link { color: red; }
a:visited { color: purple; }
```
7. **Adjacent (X + Y)** - the adjacent selector only targets elements immediately preceded by the former element. In the example, only the first paragraph after an unordered list will have red text. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
ul + p {
    color: red;
}
```
8. **Descendant #2 (X > Y)** - The difference between **X Y** and **X > Y** is that the latter only selects direct children. In the example below, the selector only targets ul's which are direct children of the div with an id of container. It won't target the ul of the first li. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
div#container > ul {
    border: 1px solid black;
}
```
```html
<div id="container">
    <ul>
        <li> List Item
            <ul>
                <li> Child </li>
            </ul>
        </li>
        <li> List Item </li>
        <li> List Item </li>
        <li> List Item </li>
    </ul>
</div>
```
9. **Adjacent #2 (X ~ Y)** - this selector is similar to the adjacent selector, but is less strict. While **ul + p** will select the first paragraph after an unordered list, **ul ~ p** will select any paragraph, as long as it follows an unordered list. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
ul ~ p {
    color: red;
}
```

10. **Attribute (X[title])** - the attribute selector only targets elements with the specified attribute. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
a[title] {
    color: green;
}
```

11. **Attribute #2 (X[href="foo"])** - a more specified version of the first attribute selector, this selector only targets elements with the exact specification. For example, the CSS below only target anchor tags that link to Google.
(**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
a[href="https://wwww.google.com/"] {
    color: green;
}
```
12. **Attribute #3 (X[href\*="google"])** - the star in the href attribute requires the proceeding attribute to be _somewhere_ in the element's href attribute. For more specific strings, use the carat (^) and/or dollar sign ($) to reference the beginning and end of a string, respectively. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
a[href*="google"] {
    color: green;
}
```
13. **Attribute #4 (X[href^="http"])** - the carat symbol is used to target all elements that have the proceeding attribute at the _beginning_ of their attribute. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
a[href^="http"] {
    background: url(path/to/external/icon.png) no-repeat;
    padding-left: 10px;
}
```
14. **Attribute #5 (X[href$=".jpg"])** - the dollar sign is used to target all elements that have the proceeding attribute at the _end_ of their attribute. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
a[href$='.jpg'] {
    color: red;
}
```
15. **Explicit Type (X[data-\*="foo"])** - this selector allows for targeting elements of a similar type, such as image files jpeg, png, gif, etc., without having to select them separately. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```html
<a href="path/to/image.jpg" data-filetype="image"> Image Link </a>
```
```css
a[data-filetype="image"] {
    color: red;
}
```
16. **Another Explicit Type (X[foo~="bar"])** - the tilda symbol targets element attributes which have space separated values. This way, we can specify one data attribute instead of multiple ones. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```html
<a href="path/to/image.jpg" data-info="external image"> Image Link </a>
```
```css
a[date-info~="external"] {
    color: red;
}

a[data-info~="image"] {
    border: 1px solid black;
}
```
17. **Checked Pseudo-Class (X:checked)** - this pseudo-class only targets user interface elements that have been checked (radio buttons, checkboxes, etc.). (**Compatibility**: IE9+, Firefox, Safari, Opera, Chrome).

```css
input[type=radio]:checked {
    border: 1px solid black;
}
```
18. **Before and After Pseudo-Class (X:before and X:after)** - these pseudo-classes are used to generate content around an element. (**Compatibility**: IE8+, Firefox, Safari, Opera, Chrome).

```css
h1:before {
    content: url(sadface.jpg);
}

h1:after {
    content: url(smileyface.jpg);
}
```
19. **Hover Pseudo-Class (X:hover)** - Official term is _user action pseudo class_. The hover class applies styling to elements on hover. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome. In IE6, the hover pseudo class must be applied to anchor tags.)

```css
div:hover {
    background: #e3e3e3;
}

a:hover {
    border-bottom: 1px solid black;
    /* this looks much better than text-decoration: underline */
}
```
20. **Negation Pseudo-Class (X:not(selector))** - this selects all elemenets except the ones specified in parentheses. (**Compatibility**: IE9+, Firefox, Safari, Opera, Chrome).

```css
div:not(#container) {
    color: blue;
}
```
21. **Pseudo-Elements (X::pseudoElement)** - used to style fragments of an element, such as the first letter or first line. Can only be used on block-level elements. Uses two colons instead of one. (**Compatibility**: IE6+, Firefox, Safari, Opera, Chrome).

```css
p::first-line {
    font-weight: bold;
    font-size: 1.2em;
}

p::first-letter {
    float: left;
    font-size: 2em;
    font-weight: bold;
    font-family: cursive;
    padding-right: 2px;
}
```
22. **Nth child Pseudo-Class (X:nth-child(n))** - targets specific elements by their child ordering. Can also be used to targets elements in sequence, such as every fourth element. (**Compatibility**: IE9+, Firefox 3.5+, Safari, Chrome).

```css
li:nth-child(3) {
    color: red;
}

li:nth-child(2n) {
    /* every second element is styled */
    color: blue;
}
```
23. **Nth last child Pseudo-Class (X:nth-last-child(n))** - this pseudo-class targets the n-to-last element in a list of items. Starts from the end and works its way backwards. (**Compatibility**: IE9+, Firefox 3.5+, Safari, Opera, Chrome).

```css
li:nth-last-child(2) {
    color: red;
}
```
24. **Nth of type (X:nth-of-type(n))** - targets only the nth element in a group of elements. (**Compatibility**: IE9+, Firefox 3.5+, Safari, Chrome).

```css
ul:nth-of-type(2) {
    border: 1px solid black;
}
```
25. **Nth last of type (X:nth-last-of-type(n))** - only targets nth-from-last element type. (**Compatibility**: IE9+, Firefox 3.5+, Safari, Opera, Chrome).

```css
ul:nth-last-of-type(3) {
    border: 1px solid black;
}
```
26. **First child Pseudo-Class (X:first-child)** - only targets the first child of the parent element. (**Compatibility**: IE7+, Firefox, Safari, Opera, Chrome).

```css
ul li:first-child {
    border-top: none;
}
```
27. **Last child Pseudo-Class (X:last-child)** - only targets the last child of the parent element. (**Compatibility**: IE9+, Firefox, Safari, Opera, Chrome).

```css
ul li:last-child {
    border-bottom: none;
}
```
28. **Only child Pseudo-Class (X:only-child)** - only targets the element that is the _only child_ of the parent element. (**Compatibility**: IE9+, Firefox, Safari, Opera, Chrome).

```css
div p:only-child {
    color: red;
}
```
29. **Only of type Pseudo-Class (X:only-of-type)** - only targets elements that do not have any siblings in its parent container. (**Compatibility**: IE9+, Firefox 3.5+, Safari, Opera, Chrome).

```css
ul > li:only-of-type {
    font-weight: bold;
}
```
30. **First of type Pseudo-Class (X:first-of-type)** - only selects the first element sibling of its type. (**Compatibility**: IE9+, Firefox 3.5+, Safari, Opera, Chrome).

```css
/* Option 1 */
ul:first-of-type li:nth-child(2) {
    font-weight: bold;
}

/* Option 2 */
p + ul li:last-child {
    font-weight: bold;
}

/* Option 3 */
ul:first-of-type li:nth-last-child(1) {
    font-weight: bold;
}
```