Bindings to Vim objects, bindings to Vim _channel commands_, and a way to interact with Vim using Rust.

Aims to be able to eventually write standard plugins in Rust, and potentially services for Vim in Rust using channels.

# Installation

Add this line to your dependencies section of your `Cargo.toml` file.

`vii = "0.1"`

# Usage

Working with Vim data types.

``` rust
use vii::DataTypes;
use vii::DataTypes{
  String,
  Number,
  Float
};

// Using a Vim data type
let vim_float = Float(3.14);
// Serializing for transmission to Vim
let serialized_float = vim_float.to_string();  // "3.14"

let vim_string = String("Hello World!".to_string());
let serialized_string = vim_string.to_string();  // "\"Hello World!\""
```

## Data Types

List of data type support.

- [x] Number
- [x] String
- [ ] Funcref
- [x] List
- [ ] Dictionary
    * Work in progress using `HashMap<String, String>`
- [x] Float
- [x] Boolean
- [x] None
- [ ] Job
- [ ] Channel
- [ ] Blob

# Contributing

If there are any features you would like added, found any potential bugs, or have any questions, then feel free to create an issue.
