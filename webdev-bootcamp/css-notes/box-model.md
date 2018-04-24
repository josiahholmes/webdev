# The Box Model

### "In a document, each element is represented as a rectangular box. In CSS, each of these rectangular boxes is described using the standard _box model_. Each box has four edges: the __margin edge__, __border edge__, __padding edge__, and __content edge__." - MDN

* **Margin** - the space between the border of an element on its outside and everything else.
    * Has four properties: margin-top, margin-right, margin-bottom, margin-left. The 'margin' shorthand follows the syntax: top | left | bottom | right.

```css
#container {
    margin-top: 20px;
    margin-left: 40px;
    margin-bottom: 500px;
    margin-right: 100px;
    margin: 20px 40px 500px 100px;
}
```

* **Border** - the edges around an element. Syntax is: width | style | color. Or, 'border' may be used as a shorthand. 

```css
.container {
    border-width: 1px; 
    border-style: solid;
    border-color: black;
    border: 1px solid black; /* width | style | color */
}
```

* **Padding** - the space between the element and the border.
    * Has four properties: padding-top, padding-right, padding-bottom, padding-left. The 'padding' shorthand follows the syntax: top | left | bottom | right.

```css
.container {
    border: 1px solid blue;
    background: orange;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom: 5px;
    padding-right: 25px;
    padding: 10px 10px 5px 25px;
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

