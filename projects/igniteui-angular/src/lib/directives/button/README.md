# igxButton

The **igxButton** directive is intended to be used on any button, span, div, input, or anchor element to turn it into a fully functional button.  
A walkthrough of how to get started can be found [here](https://www.infragistics.com/products/ignite-ui-angular/angular/components/button.html)

# Usage
```html
<target-element igxButton [...options]>Click me</target-element>
```

## Display Density

The button provides the ability to choose a display density from a predefined set of options: **compact**, **cosy** and **comfortable** (default one). We can set it by using the `displayDensity` input of the button.

```html
<target-element igxButton [displayDensity]="'compact'">Click me</target-element>
```

Or

```typescript
this.button.displayDensity = "compact";
```

> Note that the `icon` type button does not introduce visual changes for different display density values.

# API Summary
| Name   |      Type      |  Description |
|:----------|:-------------:|:------|
| `igxButton` |  string | Set the type of igxButton to be used. Default is set to flat. |
| `igxButtonColor` |    string   |   Set the button text color. You can pass any CSS valid color value. |
| `igxButtonBackground` | string | Set the button background color. You can pass any CSS valid color value. |
| `displayDensity` | DisplayDensity | Determines the display density of the button. |

# Button types
| Name   | Description |
|:----------|:-------------:|
| `flat` | The default button type. Uses transparent background and the secondary theme color from the palette color for the text. |
| `outlined` |  Very similar to the flat button type but with a thin outline around the edges of the button. |
| `contained` | As the name implies, this button type features a subtle shadow. Uses the secondary theme color from the palette for background. |
| `fab` | Floating action button type. Circular with secondary theme color for background. |
| `icon` | This is the simplest of button types. Use it whenever you need to use an icon as button. |

# Examples
Using `igxButton` to turn a span element into an for Angular styled button.
```html
<span igxButton="outlined">Click me<span>
```
