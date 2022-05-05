#[cfg(test)]
mod tests {

    #[test]
    #[allow(unused_imports)]
    fn test_public_plugin_trait() {
        // No Errors Should Occur

        use std::net::TcpStream;

        use vii::plugin::Plugin;
        use vii::plugin::PluginConfig;

        struct MyPlugin;

        impl Plugin for MyPlugin {
            fn get_config(&self) -> PluginConfig {
                PluginConfig::new("127.0.0.1".to_string(), "8765".to_string())
            }
            fn plugin(&mut self, stream: &mut TcpStream) -> Result<(), String> {
                Ok(())
            }
            fn run(&mut self) {}
        }

        let mut plugin = MyPlugin;

        //MyPlugin.run();
    }
}
