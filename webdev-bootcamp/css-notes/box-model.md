# The Box Model

### "In a document, each element is represented as a rectangular box. In CSS, each of these rectangular boxes is described using the standard _box model_. Each box has four edges: the __margin edge__, __border edge__, __padding edge__, and __content edge__." - MDN

* **Margin** - the space between the border of an element on its outside and everything else.
    * Has four properties: margin-top, margin-right, margin-bottom, margin-left.

```css
#container {
    margin: 20px 40px 500px 100px;
}
```
* **Border** - the edges around an element.
* **Padding** - the space between the element and the border.
    * Has four properties: padding-top, padding-right, padding-bottom, padding-left.

```css
.container {
    border: 1px solid blue;
    background: orange;
    padding-left: 10px;
    padding-right: 25px;
    padding-top: 10px;
    padding-bottom: 5px;
}
```

* **Content** - the width and height of an element.
    * Height and width can be in pixels or percentages.
        * The percentages are relative to the parent element.

```css
#parent {
    width: 300px;
    height: 250px;
}

#child {
    width: 50%; /* 150px width */
    height: 50%; /* 125px width */
}
```

