# Text and Fonts

### [CSS Font Stack](https://www.theverge.com/2018/4/19/17253308/google-allo-texting-paused-android-messages) lists commonly used fonts and the percentage of machines that are most likely to have the fonts.

* **Font Family** - used to apply different styles of fonts to text. Fonts that begin with numbers must be inside quotes, otherwise the CSS statement is invalid.

```css
p {
    font-family: 'Arial'; /* correct */
    font-family: Arial; /* correct */
    font-family: "19 Arial"; /* correct */
    font-family: 19 Arial; /* incorrect */
}
```

* **Font Size** - used to increase or decrease the size of text. There are different units of font size, including pixels (**px**), em (**em**). 
    * "The size of an **em** value is dynamic. When defining the font-size property, an em is equal to the size of the font that applies to the parent of the element in question. For example, if the font size is set to 16px, 1em = 16px, 2em = 32px, and so on. To calculate the em for any pixel value required: you can use this formula: em = desired element pixel value / parent element font size in pixels. For example, if the body's font size is 16px, and you want a paragraph to be 12px, then you should set the font size to 0.75em, because 12/16 is 0.75. - found on the [MDN reference page](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) for font size.

```css
body {
    font-size: 20px;
}

h1 {
    font-size: 3.0em; /* 60px */
}

p {
    font-size: 2.0em; /* 40px */
}

span {
    font-size: 2.0em; /* 80px */
    /* here, the span is nested inside of the p element */
}
```

* **Font Weight** - refers to how bold or light weight the font is. Some fonts can have numeric ranges (every hundred between 100 and 800, 100 being lightest and 800 being heaviest). 

```css
p {
    font-weight: 100; /* lightest */
    font-weight: 800; /* heaviest */
    font-weight: bold; /* bold is also allowed */
}
```

* **Line Height** - controls the height of a given line. Spaces lines in text elements.

```css
p {
    line-height: 2; /* double spacing */
}
```

* **Text Align** - controls how the text is aligned in any given element. 

```css
p {
    text-align: center;
    text-align: left;
    text-align: right;
}
```

* **Text Decoration** - applies certain effects to text elements, such as underline, overline, strikethrough, etc.

```css
p {
    text-decoration: underline;
}
```