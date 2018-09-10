# Organizing CSS with OOCSS, SMACSS, and BEM - Matt Stauffer

### [Video](https://www.youtube.com/watch?v=IKFq2cSbQ4Q)


## Learn from Object-Oriented Programming
- **Decoupling** - making it so that one piece is less tied to other pieces.
- **Single Responsibility Principle & Separation of Concerns** - each piece of code should have a single responsibility.
- **Encapsulation** - not only are you separating the pieces, but each piece should be able to be used in other projects. 

## OOCSS (Object-Oriented CSS)

- Identify patterns and "objects" (or "modules") in your code - Nicole Sullivan's Media Object.

## SMACSS (Scalable Modular Architecture for CSS)

- **Base**: applies to HTML, no class/ID selectors
- **Layout**: big page sections - .header, .sidebar, etc.
- **Module**: encapsulated modeles, re-usable
- **State**: overrides default - e.g., .is-opened
- **Theme**: optional, if theming needed

## BEM (Block Element Modifier) 

- Naming convention for modular/object-oriented CSS
- .{Block}__{Element}
- .{Block}__{Element}--{Modifier}
- .{Block}--{Modifier}

## BEM with Sass

```css
/* Sass 3.3+ w/BEM: */
.object {
    color: red;

    &__descendant {
        color: black;
    }
}

/* Generates:
    .object {
        color: red;
    }
    .object__descendant {
        color: black;
    }
*/
```