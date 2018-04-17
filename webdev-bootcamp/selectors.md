# Selectors

## Listing common selectors that are good to know

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