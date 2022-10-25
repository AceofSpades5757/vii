# Channels

Working with Vim channels (see `:help channel.txt` in Vim).

_Note: This is a low-level API. The eventual, high-level API should look like `let expr = Expr::from("line('$')");`._

```rust
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
