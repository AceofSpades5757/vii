//! Bindings to Vim objects, bindings to Vim channel commands, and a way to interact with Vim using Rust.
//!
//! Using this library, you can wite standard plugins, all in Rust, which get run just like a Vim plugin would typically run.
//!
//! Benefits compared to other libraries or methods to create functionality for Vim.
//! - Fast
//! - Type Safe
//! - NOT in VimL/vimscript
//!
//! One of the reasons for writing this stack for interfacing with Vim is due to the, assumed, direction of Vim which moves away from it's integration with other languages while focusing on VimL. Since I avoid writing anything in VimL, I'm driven to create this stack to be able to both understand Vim channels/jobs and to open up another venue of creating Vim plugins outside of VimL.
//!
//! Note that there are Neovim APIs that look more user-friendly than Vim's channels and jobs, but
//! are incompatible.
//!

/// Data Types
pub mod types;
/// Data Types
pub use self::types::DataType;

// Channels (channel.txt)
pub mod channel;

/// Vim Plugin
pub mod plugin;
