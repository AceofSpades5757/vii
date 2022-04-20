//! Source: https://vimhelp.org/channel.txt.html#channel-commands
//!
//! Vim has 5 different channel commands:
//!     * redraw
//!     * ex
//!     * normal
//!     * expr (2-way)
//!     * call (2-way)
//!

use crate::DataType;

#[derive(Debug, PartialEq)]
pub struct RequestId(pub i32);

/// Vim Ex Mode Command
/// e.g. `call myscript#MyFunc(arg)` to call a function inside Vim.
#[derive(Debug, PartialEq)]
pub struct ExCommand {
    pub command: String,
}

/// Vim Normal Mode Command
/// e.g. `Zo` to open folds
/// e.g. `w` to move cursor forward a word
#[derive(Debug, PartialEq)]
pub struct NormalCommand {
    pub command: String,
}

/// Vim expression.
/// e.g. line('$')
#[derive(Debug, PartialEq)]
pub struct Expression {
    pub expression: String,
}

/// Vim Function Call
/// e.g. `:call line('$')`
#[derive(Debug, PartialEq)]
pub struct Call {
    pub function: String,
    pub args: Vec<DataType>,
}

/// Vim Function Call
/// `:help channel-commands`
/// e.g. `:call line('$')`
#[derive(Debug, PartialEq)]
pub enum ChannelCommand {
    Redraw { forced: bool },
    Ex(ExCommand),
    Normal(NormalCommand),
    Expr(Expression, Option<RequestId>),
    Call(Call, Option<RequestId>),
    Unknown,
}
