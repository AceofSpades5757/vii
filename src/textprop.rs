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
//!
//! ```
//! use vii::textprop::{
//!     TextProperty,
//!     PropertyType,
//! };
//! use vii::textprop::PropertyTypeBuilder;
//!
//! // Create New Property
//!
//! let prop = TextProperty { id: 0, r#type: "number".to_string() };
//!
//! // Create New Property Type
//!
//! let prop_type = PropertyTypeBuilder::default().highlight("Constant".to_string()).build();
//! ```

use std::str::FromStr;

use serde::{Deserialize, Serialize};

type HighlightGroup = String;

/// Text Property (Base)
#[derive(Serialize, Deserialize)]
pub struct TextProperty {
    pub id: i32,
    pub r#type: String,
}

/// Text Property Type
#[derive(Default, Serialize, Deserialize)]
pub struct PropertyType {
    highlight: Option<HighlightGroup>,
    combine: Option<bool>,
    priority: Option<i32>,
    start_include: Option<bool>,
    end_include: Option<bool>,
}

/// Parse JSON
impl FromStr for PropertyType {
    type Err = serde_json::Error;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        serde_json::from_str(s)
    }
}

#[derive(Default)]
pub struct PropertyTypeBuilder {
    highlight: Option<HighlightGroup>,
    combine: Option<bool>,
    priority: Option<i32>,
    start_include: Option<bool>,
    end_include: Option<bool>,
}

impl PropertyTypeBuilder {
    pub fn build(self) -> PropertyType {
        PropertyType {
            highlight: self.highlight,
            combine: self.combine,
            priority: self.priority,
            start_include: self.start_include,
            end_include: self.end_include,
        }
    }
}

impl PropertyTypeBuilder {
    pub fn highlight(mut self, highlight: HighlightGroup) -> Self {
        self.highlight = Some(highlight);
        self
    }
    pub fn combine(mut self, combine: bool) -> Self {
        self.combine = Some(combine);
        self
    }
    pub fn priority(mut self, priority: i32) -> Self {
        self.priority = Some(priority);
        self
    }
    pub fn start_include(mut self, start_include: bool) -> Self {
        self.start_include = Some(start_include);
        self
    }
    pub fn end_include(mut self, end_include: bool) -> Self {
        self.end_include = Some(end_include);
        self
    }
}

#[allow(unused_imports)]
mod tests {
    use super::*;

    #[test]
    fn test_property_type() {
        let pt = PropertyType {
            highlight: Some("Constant".to_string()),
            combine: Some(true),
            priority: Some(-10),
            start_include: Some(true),
            end_include: Some(true),
        };
        assert_eq!(pt.highlight, Some("Constant".to_string()));
        assert_eq!(pt.combine, Some(true));
        assert_eq!(pt.priority, Some(-10));
        assert_eq!(pt.start_include, Some(true));
        assert_eq!(pt.end_include, Some(true));
    }
    #[test]
    fn test_property_type_empty() {
        let pt: PropertyType = Default::default();
        assert_eq!(pt.highlight, None);
        assert_eq!(pt.combine, None);
        assert_eq!(pt.priority, None);
        assert_eq!(pt.start_include, None);
        assert_eq!(pt.end_include, None);
    }
    #[test]
    fn test_property_type_builder() {
        let pt = PropertyTypeBuilder::default()
            .highlight("Constant".to_string())
            .build();
        assert_eq!(pt.highlight, Some("Constant".to_string()));
    }
}
