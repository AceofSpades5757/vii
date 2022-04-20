#[cfg(test)]
mod tests {

    use vii::DataType;

    #[test]
    fn test_package() {

        let d = DataType::String("Hello".to_string());

        assert_eq!(d.to_string(), "\"Hello\"");

    }
}
