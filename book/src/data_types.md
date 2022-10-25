# Data Types

Working with Vim data types.

_See documentation for supported data types._

```rust
use vii::DataType;

// Using a Vim data type
let vim_float = DataType::Float(3.14);
// Serializing for transmission to Vim
let serialized_float = vim_float.to_string();  // "3.14"

let vim_string = DataType::String("Hello World!".to_string());
let serialized_string = vim_string.to_string();  // "\"Hello World!\""
```
