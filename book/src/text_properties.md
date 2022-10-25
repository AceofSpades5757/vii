# Text Properties

Working with Vim text properties (see `:help textprop.txt` in Vim).

_Note: This is a low-level API._

```rust
use vii::textprop::{
    TextProperty,
    PropertyType,
};
use vii::textprop::PropertyTypeBuilder;

// Create New Property

let prop = TextProperty { id: 0, r#type: "number".to_string() };

// Create New Property Type

let prop_type = PropertyTypeBuilder::default().highlight("Constant".to_string()).build();
```
