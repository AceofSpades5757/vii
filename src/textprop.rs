#![allow(dead_code)]
#![allow(unused_variables)]
//! Text Properties
//!
//! Text properties are properties that can be optionally added to text to give them special meaning.
//!
//! The real power behind text properties is that they move with the text, regardless of position.
//!
//! Text properties do not have persistence outside of Vim. Once your instance closes, the text properties are removed as well.
//!
//! https://vimhelp.org/textprop.txt.html

use serde::{Serialize, Deserialize};

/// Text Property (Base)
#[derive(Serialize, Deserialize)]
pub struct TextProperty {
    id: i32,
    r#type: String,
}

/// Text Property Type
pub struct PropertyType {
    highlight: Option<String>,
    combine: Option<bool>,
    priority: Option<i32>,
    start_include: Option<bool>,
    end_include: Option<bool>,
}

/// Vim Function
pub fn prop_type_add(name: String, props: PropertyType) {
    todo!();
}

// This represents a text property in Vim.
// {'id': 0, 'col': 12, 'type_bufnr': 0, 'end': 1, 'type': 'number', 'length': 3, 'start': 1}
