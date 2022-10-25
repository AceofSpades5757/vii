# Quickstart

_If possible, use the examples directly from the documentation as they are more clear and tested._

## Plugin

- _Note: Server plugins, or persistent plugins are not yet implemented._
- _Note: FiletypePlugin, for a Vim filetype plugin, is not yet implemented._

Creating a Vim plugin using Rust. Can be installed and run using the Vim plugin `rust-plug`.

Acts _almost_ just like a Vim plugin would. It runs on startup, running it's code. Exceptions include adding `pythonx` code, the `autoload` directory, but it can still create functions, commands, global variables, and read from Vim itself.

- Uses `PluginConfig` struct to add configuration support.
- Uses `Plugin` trait to create a plugin.
  - `get_config` - Get the configuration struct.
  - `plugin` - The plugin, the important information.

Here's an example, taken from [rust-plug proof of concept](https://github.com/AceofSpades5757/rust-plug-poc).

```toml
# Cargo.toml
[package]
name = "rust-plug-poc"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
vii = "0.0"
```

```rust
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
