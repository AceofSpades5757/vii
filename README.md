[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Coverage](https://github.com/AceofSpades5757/vii/actions/workflows/tests.yml/badge.svg)](https://github.com/AceofSpades5757/vii/actions/workflows/tests.yml)

[![cargo.io](https://img.shields.io/crates/v/vii)](https://crates.io/crates/vii)
![License](https://img.shields.io/crates/l/vii?color=purple)

Bindings to Vim objects, bindings to Vim _channel commands_, and a way to interact with Vim using Rust.

Aims to be able to eventually write standard plugins in Rust, and potentially services for Vim in Rust using channels.

# Installation

Add this line to your dependencies section of your `Cargo.toml` file.

`vii = "0.0"`

_Current interface is highly unstable._

# Usage

## Plugin

* _Note: Server plugins, or persistent plugins are not yet implemented._
* _Note: FiletypePlugin, for a Vim filetype plugin, is not yet implemented._

Creating a Vim plugin using Rust. Can be installed and run using the Vim plugin `rust-plug`.

Acts _almost_ just like a Vim plugin would. It runs on startup, running it's code. Exceptions include adding `pythonx` code, the `autoload` directory, but it can still create functions, commands, global variables, and read from Vim itself.

* Uses `PluginConfig` struct to add configuration support.
* Uses `Plugin` trait to create a plugin.
  * `get_config` - Get the configuration struct.
  * `plugin` - The plugin, the important information.

Here's an example, taken from [rust-plug proof of concept](https://github.com/AceofSpades5757/rust-plug-poc).

``` toml
# Cargo.toml
[package]
name = "rust-plug-poc"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
vii = "0.0"
```

``` rust
// src/main.rs
use std::env;
use std::net::TcpStream;

use vii::plugin::Plugin;
use vii::plugin::PluginConfig;

struct MyPlugin{
    ip: String,
    port: String,
}

/// Make your struct, MyPlugin, into a Plugin ready for Vim.
impl Plugin for MyPlugin {
    fn get_config(&self) -> PluginConfig {
        PluginConfig::new("127.0.0.1".to_string(), "8765".to_string())
    }
    fn plugin(&mut self, _stream: &mut TcpStream) -> Result<(), String> {
        Ok(())
    }
}

fn main() {

  // Environment Variable, to communicate with rust-plug
  let port = env::var("VII_PLUGIN_PORT").unwrap();
  let mut plugin = MyPlugin {
    ip: "127.0.0.1".to_string(),
    port,
  };

  // Run your plugin.
  //
  // Here you can run your plugin as many times as you'd like, create multiple plugins, etc.
  plugin.run();
}
```

## Data Types

Working with Vim data types.

``` rust
use vii::DataType;

// Using a Vim data type
let vim_float = DataType::Float(3.14);
// Serializing for transmission to Vim
let serialized_float = vim_float.to_string();  // "3.14"

let vim_string = DataType::String("Hello World!".to_string());
let serialized_string = vim_string.to_string();  // "\"Hello World!\""
```

### Support

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

## Vim Channels

Working with Vim channels (see `:help channel.txt` in Vim).

_Note: This is a low-level API. The eventual, high-level API should look like `let expr = Expr::from("line('$')");`._

``` rust
use vii::channel::{
  ChannelCommand,
  Call,
  Expression,
};

// Number of Lines in Current Buffer
// ["expr","line('$')"]
let expression = ChannelCommand::Expr(
  Expression {
    expression: "line('$')".to_string(),
  },
  None,
);

// Number of Lines in Current Buffer
// ["call", "line", ["$"]]
let call = ChannelCommand::Call(
  Call {
    function: "line".to_string(),
    args: vec![DataType::String("$")],
  },
  None,
);


println!("{}", expression.to_string());
// ["expr","line('$')"]
println!("{}", call.to_string());
// ["call", "line", ["$"]]
```

# Contributing

If there are any features you would like added, found any potential bugs, or have any questions, then feel free to create an issue.

## Testing

`cargo test`

Unittests are in the same file, next to the units they are testing (bottom). Integration tests are in `/tests/`.

# License

Licensed under either of

 * Apache License, Version 2.0
   ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
 * MIT license
   ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
