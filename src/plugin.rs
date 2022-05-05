/// Vim Plugin
use std::io::Write;
use std::net::TcpListener;
use std::net::TcpStream;

use simple_logger::SimpleLogger;

pub struct PluginConfig {
    ip: String,
    port: String,
}

impl PluginConfig {
    fn new(ip: String, port: String) -> Self {
        Self { ip, port }
    }
}

trait Plugin {
    /// Get Config for Plugin
    fn get_config(&self) -> PluginConfig;
    /// Plugin for Vim
    fn plugin(&mut self, stream: &mut TcpStream) -> Result<(), String>;
    /// Starts Plugin
    fn start(&mut self) {
        let PluginConfig = self.get_config();
        let listener =
            TcpListener::bind(format!("{}:{}", PluginConfig.ip, PluginConfig.port)).unwrap();

        match listener.accept() {
            Ok((mut stream, _addr)) => {
                self.plugin(&mut stream).expect("Plugin failed to run.");
            }
            Err(err) => log::warn!("Unable to get client: {:?}", err),
        }
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_simple() {
        struct MyPlugin;

        impl Plugin for MyPlugin {
            fn get_config(&self) -> PluginConfig {
                PluginConfig::new("127.0.0.1".to_string(), "8765".to_string())
            }
            fn plugin(&mut self, stream: &mut TcpStream) -> Result<(), String> {
                Ok(())
            }
        }

        let plugin = MyPlugin;

        MyPlugin.start();
        assert_eq!(Ok(()), MyPlugin.run());
    }
}
