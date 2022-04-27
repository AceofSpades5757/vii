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

impl Expression {
    fn from_string(string: String) -> Self {
        Self { expression: string }
    }
    fn from_str(str_: &str) -> Self {
        Self::from_string(str_.to_string())
    }
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
            ChannelCommand::Redraw { forced } => {
                let mut args = Vec::new();
                args.push(DataType::Boolean(*forced));
                args
            }
            ChannelCommand::Normal(normal_command) => {
                let mut args = Vec::new();
                args.push(DataType::String(normal_command.command.clone()));
                args
            }
            ChannelCommand::Call(call_command, request_id) => {
                let mut args = Vec::new();
                args.push(DataType::String(call_command.function.clone()));
                args.push(DataType::List(call_command.args.clone()));
                if let Some(request_id) = request_id {
                    args.push(DataType::Number(request_id.0));
                }
                args
            }
            ChannelCommand::Expr(expr_command, request_id) => {
                let mut args = Vec::new();

                args.push(DataType::String(expr_command.expression.clone()));

                if let Some(request_id) = request_id {
                    args.push(DataType::Number(request_id.0));
                }

                args
            }
            _ => unimplemented!(),
        }
    }
}

impl ChannelCommand {
    pub fn to_string(&self) -> String {
        match self {
            ChannelCommand::Redraw { forced: _ } => {
                let mut list = self.to_datatypes();
                list.insert(0, DataType::String("redraw".to_string()));

                let mut string = String::new();

                // Start
                string.push_str("[");

                // Args
                for i in list {
                    string.push_str(&i.to_string());
                    string.push_str(", ");
                }

                // Remove last ", "
                string.pop();
                string.pop();

                // End
                string.push_str("]");

                return string;
            }
            ChannelCommand::Normal { .. } => {
                let mut list = self.to_datatypes();
                list.insert(0, DataType::String("normal".to_string()));

                let mut string = String::new();

                // Start
                string.push_str("[");

                // Args
                for i in list {
                    string.push_str(&i.to_string());
                    string.push_str(", ");
                }

                // Remove last ", "
                string.pop();
                string.pop();

                // End
                string.push_str("]");

                return string;
            }
            ChannelCommand::Call { .. } => {
                let mut list = self.to_datatypes();
                list.insert(0, DataType::String("call".to_string()));

                let mut string = String::new();

                // Start
                string.push_str("[");

                // Args
                for i in list {
                    string.push_str(&i.to_string());
                    string.push_str(", ");
                }

                // Remove last ", "
                string.pop();
                string.pop();

                // End
                string.push_str("]");

                return string;
            }
            ChannelCommand::Expr { .. } => {
                let mut list = self.to_datatypes();
                list.insert(0, DataType::String("expr".to_string()));

                let mut string = String::new();

                // Start
                string.push_str("[");

                // Args
                for i in list {
                    string.push_str(&i.to_string());
                    string.push_str(", ");
                }

                // Remove last ", "
                string.pop();
                string.pop();

                // End
                string.push_str("]");

                return string;
            }
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
            DataType::List(vec![DataType::Number(15)]),
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

    #[test]
    fn test_channel_command_to_string() {
        // Tests boolean and String DataType Variants
        //"[\"redraw\", v:true]"
        let expected = "[\"redraw\", v:false]";
        let redraw = ChannelCommand::Redraw { forced: false };
        assert_eq!(redraw.to_string(), expected);

        let expected = "[\"normal\", \"gg\"]";
        let normal = ChannelCommand::Normal(NormalCommand {
            command: "gg".to_string(),
        });
        assert_eq!(normal.to_string(), expected);

        let expected = "[\"call\", \"getline\", [15], 1]";
        let call = ChannelCommand::Call(
            Call {
                function: "getline".to_string(),
                args: vec![DataType::Number(15)],
            },
            Some(RequestId(1)),
        );
        assert_eq!(call.to_string(), expected);

        let expected = "[\"expr\", \"getline('$')\", 3]";
        let expr = ChannelCommand::Expr(
            Expression {
                expression: "getline('$')".to_string(),
            },
            Some(RequestId(3)),
        );
        assert_eq!(expr.to_string(), expected);
    }

    #[test]
    fn test_expression_froms() {
        let expr = Expression {
            expression: "getline('$')".to_string(),
        };
        assert_eq!(expr, Expression::from_string("getline('$')".to_string()));
        assert_eq!(expr, Expression::from_str("getline('$')"));
    }
}
