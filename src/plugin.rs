//! Vim Plugin
//!
//! Vim Documentation: [`:help plugin`](https://vimhelp.org/usr_05.txt.html#plugin)
//!
//! Acts as if it was a Vim plugin. It'll run once on startup, assuming the main function only runs
//! it once, and can add functions, commands, global variables, and practically any other
//! functionality that can be added by a typical Vim plugin.

use std::net::TcpListener;
use std::net::TcpStream;

pub struct PluginConfig {
    ip: String,
    port: String,
}

impl PluginConfig {
    pub fn new(ip: String, port: String) -> Self {
        Self { ip, port }
    }
}

pub trait Plugin {
    /// Get Config for Plugin
    fn get_config(&self) -> PluginConfig;
    /// Plugin for Vim
    fn plugin(&mut self, stream: &mut TcpStream) -> Result<(), String>;
    /// Starts Plugin
    fn run(&mut self) {
        let config = self.get_config();
        let listener = TcpListener::bind(format!("{}:{}", config.ip, config.port)).unwrap();

        match listener.accept() {
            Ok((mut stream, _addr)) => {
                self.plugin(&mut stream).expect("Plugin failed to run.");
            }
            Err(err) => eprintln!("Unable to get client: {:?}", err),
        }
    }
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_simple() {
        struct MyPlugin;

        impl Plugin for MyPlugin {
            fn get_config(&self) -> PluginConfig {
                PluginConfig::new("127.0.0.1".to_string(), "8765".to_string())
            }
            fn plugin(&mut self, _stream: &mut TcpStream) -> Result<(), String> {
                Ok(())
            }
            fn run(&mut self) {}
        }

        let mut plugin = MyPlugin;

        plugin.run();
        // Need mock stream
        //assert_eq!(Ok(()), MyPlugin.plugin());
    }
}
