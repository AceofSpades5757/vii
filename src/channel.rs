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

impl Default for ChannelCommand {
    fn default() -> Self {
        ChannelCommand::Unknown
    }
}

impl ChannelCommand {

    fn to_datatypes(&self) -> Vec<DataType> {
        match self {
            ChannelCommand::Redraw {forced} => {
                let mut args = Vec::new();
                args.push(DataType::Boolean(*forced));
                args
            },
            ChannelCommand::Normal(normal_command) => {
                let mut args = Vec::new();
                args.push(DataType::String(normal_command.command.clone()));
                args
            },
            ChannelCommand::Call(call_command, request_id) => {
                let mut args = Vec::new();
                args.push(DataType::String(call_command.function.clone()));
                args.push(DataType::List(call_command.args.clone()));
                if let Some(request_id) = request_id {
                    args.push(DataType::Number(request_id.0));
                }
                args
            },
            _ => unimplemented!(),
        }
    }
}

#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_channel_command_default() {

        let default: ChannelCommand = Default::default();
        assert_eq!(default, ChannelCommand::Unknown);

    }

    #[test]
    fn test_channel_command_to_datatypes() {

        let expected = vec![
            DataType::String("getline".to_string()),
            DataType::List(vec![
                DataType::Number(15),
            ]),
            DataType::Number(1),
        ];
        let call = ChannelCommand::Call(
            Call {
                function: "getline".to_string(),
                args: vec![DataType::Number(15)],
            },
            Some(RequestId(1)),
        );
        assert_eq!(call.to_datatypes(), expected);

    }
}
