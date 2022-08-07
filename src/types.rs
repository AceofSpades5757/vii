//! Vim Data Types
//!
//! Vim Documentation: [`:help type()`](https://vimhelp.org/builtin.txt.html#type%28%29)
//!
//! Some are currently not supported.
//!
//! | Supported | Type       | Built-In Variable    | Number for Type |
//! | ---       | --------   | -------------------  | ---             |
//! | ☑         | Number     | `v:t_number`         | 0               |
//! | ☑         | String     | `v:t_string`         | 1               |
//! | ☐         | Funcref    | `v:t_func`           | 2               |
//! | ☑         | List       | `v:t_list`           | 3               |
//! | ☐         | Dictionary | `v:t_dict`           | 4               |
//! | ☑         | Float      | `v:t_float`          | 5               |
//! | ☑         | Boolean    | `v:t_bool`           | 6               |
//! | ☑         | None       | `v:t_none`           | 7               |
//! | ☐         | Job        | `v:t_job`            | 8               |
//! | ☐         | Channel    | `v:t_channel`        | 9               |
//! | ☐         | Blob       | `v:t_blob`           | 10              |
//!
//! # Examples
//!
//! Basic usage of data types.
//!
//! ```
//! // Float
//! let vim_float = vii::DataType::Float(3.14);
//! assert_eq!(vim_float.to_string(), "3.14");
//! ```
//!
//! ```
//! // String
//! let vim_string = vii::DataType::String("Hello World!".to_string());
//! assert_eq!(vim_string.to_string(), "\"Hello World!\"");
//! ```

use std::collections::HashMap;

pub type Function = String; // TODO

/// A Vim datatype.
///
/// See the module-level documentation for more details: [`types`]
///
/// [`types`]: crate::types
#[derive(Debug, PartialEq, Clone)]
pub enum DataType {
    // TODO: Add the type ID (numbers)
    Number(i32),
    String(String),
    Funcref(Function), // TODO
    List(Vec<DataType>),
    //Dictionary(HashMap<DataType::String, DataType>),  // TODO: implement
    Dictionary(HashMap<String, String>),
    Float(f64),
    Boolean(bool),
    None,

    Job,     // TODO
    Channel, // TODO
    Blob,    // TODO
}

/// Implement to_string functionality.
impl DataType {
    pub fn to_string(&self) -> String {
        match self {
            DataType::Number(i) => i.to_string(),
            DataType::Boolean(b) => {
                match b {
                    // WARNING: This is different in Neovim
                    // TODO: Add support for Neovim
                    true => "v:true".to_string(),
                    false => "v:false".to_string(),
                }
            }
            // WARNING: Removes decimal point if there are no decimals
            DataType::Float(f) => f.to_string(),
            DataType::String(s) => format!("\"{}\"", s),
            //DataType::Funcref => "funcref".to_string(),
            DataType::List(v) => {
                // Open List
                let mut s = "[".to_string();

                // Add each argument
                for i in v {
                    s.push_str(&i.to_string());
                    s.push_str(", ");
                }

                // Remove last ", "
                s.pop();
                s.pop();

                // Close list
                s.push_str("]");
                s
            }
            //DataType::Dictionary(d) => {
            //let mut s = "{".to_string();
            //for (k, v) in d {
            //s.push_str(&k);
            //s.push_str(": ");
            //s.push_str(&v);
            //s.push_str(", ");
            //}
            //s.push_str("}");
            //s
            //}
            // TODO: Add support for Vim's other variant (v:none)
            // This is for the variant supported by both Neovim and Vim
            DataType::None => "v:null".to_string(),
            //DataType::Job => "Job".to_string(),
            //DataType::Channel => "Channel".to_string(),
            //DataType::Blob => "Blob".to_string(),
            _ => unimplemented!(),
        }
    }
}

#[cfg(test)]
mod tests_datatype {

    use super::*;

    #[test]
    fn test_datatype_to_string() {
        assert_eq!(DataType::Boolean(true).to_string(), "v:true",);
        assert_eq!(DataType::Boolean(false).to_string(), "v:false",);

        assert_eq!(DataType::Float(1.0).to_string(), "1",);
        assert_eq!(DataType::Float(3.1459).to_string(), "3.1459",);

        assert_eq!(DataType::String("test".to_string()).to_string(), "\"test\"",);
        //assert_eq!(
        //DataType::List(vec![DataType::String("test".to_string())]).to_string(),
        //"[\"test\"]",
        //);
        //assert_eq!(
        //DataType::Dictionary(
        //vec![
        //("test".to_string(), DataType::String("test".to_string())),
        //("test2".to_string(), DataType::String("test2".to_string())),
        //]
        //).to_string(),
        //"{\"test\": \"test\", \"test2\": \"test2\"}",
        //);
        assert_eq!(DataType::None.to_string(), "v:null",);
        //assert_eq!(
        //DataType::Job.to_string(),
        //"Job",
        //);
    }
}
