Object.assign(window.search, {
  doc_urls: [
    "introduction.html#introduction",
    "installation.html#installation",
    "installation.html#features",
    "quickstart.html#quickstart",
    "quickstart.html#plugin",
    "data_types.html#data-types",
    "text_properties.html#text-properties",
    "channels.html#channels",
    "examples.html#examples",
    "plugin_simple.html#simple-plugin",
  ],
  index: {
    documentStore: {
      docInfo: {
        0: { body: 0, breadcrumbs: 2, title: 1 },
        1: { body: 12, breadcrumbs: 2, title: 1 },
        2: { body: 11, breadcrumbs: 2, title: 1 },
        3: { body: 8, breadcrumbs: 2, title: 1 },
        4: { body: 158, breadcrumbs: 2, title: 1 },
        5: { body: 30, breadcrumbs: 4, title: 2 },
        6: { body: 33, breadcrumbs: 4, title: 2 },
        7: { body: 55, breadcrumbs: 2, title: 1 },
        8: { body: 0, breadcrumbs: 2, title: 1 },
        9: { body: 0, breadcrumbs: 5, title: 2 },
      },
      docs: {
        0: {
          body: "",
          breadcrumbs: "Introduction » Introduction",
          id: "0",
          title: "Introduction",
        },
        1: {
          body: 'Add this line to your dependencies section of your Cargo.toml file. vii = "0.0" Current interface is highly unstable.',
          breadcrumbs: "Installation » Installation",
          id: "1",
          title: "Installation",
        },
        2: {
          body: "Default comes with a lot of useful features, but there are a lot of features available, to increase the quality of your program.",
          breadcrumbs: "Installation » Features",
          id: "2",
          title: "Features",
        },
        3: {
          body: "If possible, use the examples directly from the documentation as they are more clear and tested.",
          breadcrumbs: "Quickstart » Quickstart",
          id: "3",
          title: "Quickstart",
        },
        4: {
          body: 'Note: Server plugins, or persistent plugins are not yet implemented. Note: FiletypePlugin, for a Vim filetype plugin, is not yet implemented. Creating a Vim plugin using Rust. Can be installed and run using the Vim plugin rust-plug. Acts almost just like a Vim plugin would. It runs on startup, running it\'s code. Exceptions include adding pythonx code, the autoload directory, but it can still create functions, commands, global variables, and read from Vim itself. Uses PluginConfig struct to add configuration support. Uses Plugin trait to create a plugin. get_config - Get the configuration struct. plugin - The plugin, the important information. Here\'s an example, taken from rust-plug proof of concept . # Cargo.toml\n[package]\nname = "rust-plug-poc"\nversion = "0.1.0"\nedition = "2021" # See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html [dependencies]\nvii = "0.0" // src/main.rs\nuse std::env;\nuse std::net::TcpStream; use vii::plugin::Plugin;\nuse vii::plugin::PluginConfig; struct MyPlugin{ ip: String, port: String,\n} /// Make your struct, MyPlugin, into a Plugin ready for Vim.\nimpl Plugin for MyPlugin { fn get_config(&self) -> PluginConfig { PluginConfig::new("127.0.0.1".to_string(), "8765".to_string()) } fn plugin(&mut self, _stream: &mut TcpStream) -> Result<(), String> { Ok(()) }\n} fn main() { // Environment Variable, to communicate with rust-plug let port = env::var("VII_PLUGIN_PORT").unwrap(); let mut plugin = MyPlugin { ip: "127.0.0.1".to_string(), port, }; // Run your plugin. // // Here you can run your plugin as many times as you\'d like, create multiple plugins, etc. plugin.run();\n}',
          breadcrumbs: "Quickstart » Plugin",
          id: "4",
          title: "Plugin",
        },
        5: {
          body: 'Working with Vim data types. See documentation for supported data types. use vii::DataType; // Using a Vim data type\nlet vim_float = DataType::Float(3.14);\n// Serializing for transmission to Vim\nlet serialized_float = vim_float.to_string(); // "3.14" let vim_string = DataType::String("Hello World!".to_string());\nlet serialized_string = vim_string.to_string(); // "\\"Hello World!\\""',
          breadcrumbs: "Data Types » Data Types",
          id: "5",
          title: "Data Types",
        },
        6: {
          body: 'Working with Vim text properties (see :help textprop.txt in Vim). Note: This is a low-level API. use vii::textprop::{ TextProperty, PropertyType,\n};\nuse vii::textprop::PropertyTypeBuilder; // Create New Property let prop = TextProperty { id: 0, r#type: "number".to_string() }; // Create New Property Type let prop_type = PropertyTypeBuilder::default().highlight("Constant".to_string()).build();',
          breadcrumbs: "Text Properties » Text Properties",
          id: "6",
          title: "Text Properties",
        },
        7: {
          body: 'Working with Vim channels (see :help channel.txt in Vim). Note: This is a low-level API. The eventual, high-level API should look like let expr = Expr::from("line(\'$\')");. use vii::channel::{ ChannelCommand, Call, Expression,\n}; // Number of Lines in Current Buffer\n// ["expr","line(\'$\')"]\nlet expression = ChannelCommand::Expr( Expression { expression: "line(\'$\')".to_string(), }, None,\n); // Number of Lines in Current Buffer\n// ["call", "line", ["$"]]\nlet call = ChannelCommand::Call( Call { function: "line".to_string(), args: vec![DataType::String("$")], }, None,\n); println!("{}", expression.to_string());\n// ["expr","line(\'$\')"]\nprintln!("{}", call.to_string());\n// ["call", "line", ["$"]]',
          breadcrumbs: "Channels » Channels",
          id: "7",
          title: "Channels",
        },
        8: {
          body: "",
          breadcrumbs: "Examples » Examples",
          id: "8",
          title: "Examples",
        },
        9: {
          body: "",
          breadcrumbs: "Examples » Simple Plugin » Simple Plugin",
          id: "9",
          title: "Simple Plugin",
        },
      },
      length: 10,
      save: true,
    },
    fields: ["title", "body", "breadcrumbs"],
    index: {
      body: {
        root: {
          0: {
            ".": {
              0: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
              1: {
                ".": {
                  0: { df: 1, docs: { 4: { tf: 1.0 } } },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            df: 1,
            docs: { 6: { tf: 1.0 } },
          },
          1: {
            2: {
              7: {
                ".": {
                  0: {
                    ".": {
                      0: {
                        ".": {
                          1: {
                            '"': {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 4: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          2: {
            0: {
              2: { 1: { df: 1, docs: { 4: { tf: 1.0 } } }, df: 0, docs: {} },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          3: {
            ".": {
              1: { 4: { df: 1, docs: { 5: { tf: 1.0 } } }, df: 0, docs: {} },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          8: {
            7: {
              6: {
                5: {
                  '"': {
                    ".": {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        o: {
                          _: {
                            df: 0,
                            docs: {},
                            s: {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                r: { df: 1, docs: { 4: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          _: {
            df: 0,
            docs: {},
            s: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
          },
          a: {
            c: { df: 0, docs: {}, t: { df: 1, docs: { 4: { tf: 1.0 } } } },
            d: {
              d: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
              df: 1,
              docs: { 4: { tf: 1.0 } },
            },
            df: 0,
            docs: {},
            p: {
              df: 0,
              docs: {},
              i: {
                df: 2,
                docs: { 6: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
              },
            },
            r: { df: 0, docs: {}, g: { df: 1, docs: { 7: { tf: 1.0 } } } },
            u: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    o: {
                      a: {
                        d: { df: 1, docs: { 4: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
            },
            v: {
              a: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, l: { df: 1, docs: { 2: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
            },
          },
          b: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                f: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 7: { tf: 1.4142135623730951 } } },
                  },
                },
              },
            },
          },
          c: {
            a: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  ".": {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      o: {
                        _: {
                          df: 0,
                          docs: {},
                          s: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              r: { df: 1, docs: { 7: { tf: 1.0 } } },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                  df: 1,
                  docs: { 7: { tf: 2.23606797749979 } },
                },
              },
              r: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  o: {
                    ".": {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          m: {
                            df: 0,
                            docs: {},
                            l: {
                              df: 2,
                              docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } },
                            },
                          },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            df: 0,
            docs: {},
            h: {
              a: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      l: {
                        ".": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            x: {
                              df: 0,
                              docs: {},
                              t: { df: 1, docs: { 7: { tf: 1.0 } } },
                            },
                          },
                        },
                        c: {
                          df: 0,
                          docs: {},
                          o: {
                            df: 0,
                            docs: {},
                            m: {
                              df: 0,
                              docs: {},
                              m: {
                                a: {
                                  df: 0,
                                  docs: {},
                                  n: {
                                    d: {
                                      ":": {
                                        ":": {
                                          c: {
                                            a: {
                                              df: 0,
                                              docs: {},
                                              l: {
                                                df: 1,
                                                docs: { 7: { tf: 1.0 } },
                                              },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                          e: {
                                            df: 0,
                                            docs: {},
                                            x: {
                                              df: 0,
                                              docs: {},
                                              p: {
                                                df: 0,
                                                docs: {},
                                                r: {
                                                  df: 1,
                                                  docs: { 7: { tf: 1.0 } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                      df: 1,
                                      docs: { 7: { tf: 1.0 } },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                            },
                          },
                        },
                        df: 1,
                        docs: { 7: { tf: 1.4142135623730951 } },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            l: {
              df: 0,
              docs: {},
              e: {
                a: { df: 0, docs: {}, r: { df: 1, docs: { 3: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            o: {
              d: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
              },
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 2: { tf: 1.0 } } },
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 4: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
              n: {
                c: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                f: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    g: {
                      df: 0,
                      docs: {},
                      u: {
                        df: 0,
                        docs: {},
                        r: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                      },
                    },
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              e: {
                a: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 2,
                    docs: { 4: { tf: 2.0 }, 6: { tf: 1.4142135623730951 } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            u: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 2,
                        docs: { 1: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
                      },
                    },
                  },
                },
              },
            },
          },
          d: {
            a: {
              df: 0,
              docs: {},
              t: {
                a: {
                  df: 1,
                  docs: { 5: { tf: 2.0 } },
                  t: {
                    df: 0,
                    docs: {},
                    y: {
                      df: 0,
                      docs: {},
                      p: {
                        df: 0,
                        docs: {},
                        e: {
                          ":": {
                            ":": {
                              df: 0,
                              docs: {},
                              f: {
                                df: 0,
                                docs: {},
                                l: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    a: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        "(": {
                                          3: {
                                            ".": {
                                              1: {
                                                4: {
                                                  df: 1,
                                                  docs: { 5: { tf: 1.0 } },
                                                },
                                                df: 0,
                                                docs: {},
                                              },
                                              df: 0,
                                              docs: {},
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              s: {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  r: {
                                    df: 0,
                                    docs: {},
                                    i: {
                                      df: 0,
                                      docs: {},
                                      n: {
                                        df: 0,
                                        docs: {},
                                        g: {
                                          "(": {
                                            '"': {
                                              df: 0,
                                              docs: {},
                                              h: {
                                                df: 0,
                                                docs: {},
                                                e: {
                                                  df: 0,
                                                  docs: {},
                                                  l: {
                                                    df: 0,
                                                    docs: {},
                                                    l: {
                                                      df: 0,
                                                      docs: {},
                                                      o: {
                                                        df: 1,
                                                        docs: {
                                                          5: { tf: 1.0 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              f: {
                a: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  n: {
                    d: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                e: {
                  c: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        i: { df: 1, docs: { 3: { tf: 1.0 } } },
                      },
                      o: {
                        df: 0,
                        docs: {},
                        r: {
                          df: 0,
                          docs: {},
                          i: { df: 1, docs: { 4: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            o: {
              c: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  m: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        t: { df: 2, docs: { 3: { tf: 1.0 }, 5: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
          },
          df: 0,
          docs: {},
          e: {
            d: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, t: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              v: {
                ":": {
                  ":": {
                    df: 0,
                    docs: {},
                    v: {
                      a: {
                        df: 0,
                        docs: {},
                        r: {
                          "(": {
                            '"': {
                              df: 0,
                              docs: {},
                              v: {
                                df: 0,
                                docs: {},
                                i: {
                                  df: 0,
                                  docs: {},
                                  i: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      p: {
                                        df: 0,
                                        docs: {},
                                        l: {
                                          df: 0,
                                          docs: {},
                                          u: {
                                            df: 0,
                                            docs: {},
                                            g: {
                                              df: 0,
                                              docs: {},
                                              i: {
                                                df: 0,
                                                docs: {},
                                                n: {
                                                  _: {
                                                    df: 0,
                                                    docs: {},
                                                    p: {
                                                      df: 0,
                                                      docs: {},
                                                      o: {
                                                        df: 0,
                                                        docs: {},
                                                        r: {
                                                          df: 0,
                                                          docs: {},
                                                          t: {
                                                            '"': {
                                                              ")": {
                                                                ".": {
                                                                  df: 0,
                                                                  docs: {},
                                                                  u: {
                                                                    df: 0,
                                                                    docs: {},
                                                                    n: {
                                                                      df: 0,
                                                                      docs: {},
                                                                      w: {
                                                                        df: 0,
                                                                        docs: {},
                                                                        r: {
                                                                          a: {
                                                                            df: 0,
                                                                            docs: {},
                                                                            p: {
                                                                              df: 1,
                                                                              docs: {
                                                                                4: {
                                                                                  tf: 1.0,
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                          df: 0,
                                                                          docs: {},
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                                df: 0,
                                                                docs: {},
                                                              },
                                                              df: 0,
                                                              docs: {},
                                                            },
                                                            df: 0,
                                                            docs: {},
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  df: 0,
                                                  docs: {},
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            t: { c: { df: 1, docs: { 4: { tf: 1.0 } } }, df: 0, docs: {} },
            v: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    u: { df: 1, docs: { 7: { tf: 1.0 } } },
                  },
                },
              },
            },
            x: {
              a: {
                df: 0,
                docs: {},
                m: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 3,
                      docs: { 3: { tf: 1.0 }, 4: { tf: 1.0 }, 8: { tf: 1.0 } },
                    },
                  },
                },
              },
              c: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                r: {
                  '"': {
                    ",": {
                      '"': {
                        df: 0,
                        docs: {},
                        l: {
                          df: 0,
                          docs: {},
                          i: {
                            df: 0,
                            docs: {},
                            n: {
                              df: 1,
                              docs: { 7: { tf: 1.4142135623730951 } },
                            },
                          },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  ":": {
                    ":": {
                      df: 0,
                      docs: {},
                      f: {
                        df: 0,
                        docs: {},
                        r: {
                          df: 0,
                          docs: {},
                          o: {
                            df: 0,
                            docs: {},
                            m: {
                              "(": {
                                '"': {
                                  df: 0,
                                  docs: {},
                                  l: {
                                    df: 0,
                                    docs: {},
                                    i: {
                                      df: 0,
                                      docs: {},
                                      n: { df: 1, docs: { 7: { tf: 1.0 } } },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 1,
                  docs: { 7: { tf: 1.0 } },
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: {
                        df: 1,
                        docs: { 7: { tf: 2.0 } },
                        i: {
                          df: 0,
                          docs: {},
                          o: {
                            df: 0,
                            docs: {},
                            n: {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 7: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          f: {
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 2: { tf: 1.7320508075688772 } } },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            i: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                e: {
                  df: 1,
                  docs: { 1: { tf: 1.0 } },
                  t: {
                    df: 0,
                    docs: {},
                    y: {
                      df: 0,
                      docs: {},
                      p: {
                        df: 1,
                        docs: { 4: { tf: 1.0 } },
                        e: {
                          df: 0,
                          docs: {},
                          p: {
                            df: 0,
                            docs: {},
                            l: {
                              df: 0,
                              docs: {},
                              u: {
                                df: 0,
                                docs: {},
                                g: {
                                  df: 0,
                                  docs: {},
                                  i: {
                                    df: 0,
                                    docs: {},
                                    n: { df: 1, docs: { 4: { tf: 1.0 } } },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            n: { df: 1, docs: { 4: { tf: 1.7320508075688772 } } },
            u: {
              df: 0,
              docs: {},
              n: {
                c: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      o: {
                        df: 0,
                        docs: {},
                        n: { df: 2, docs: { 4: { tf: 1.0 }, 7: { tf: 1.0 } } },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          g: {
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              t: {
                _: {
                  c: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        f: {
                          df: 0,
                          docs: {},
                          i: {
                            df: 0,
                            docs: {},
                            g: {
                              "(": {
                                "&": {
                                  df: 0,
                                  docs: {},
                                  s: {
                                    df: 0,
                                    docs: {},
                                    e: {
                                      df: 0,
                                      docs: {},
                                      l: {
                                        df: 0,
                                        docs: {},
                                        f: { df: 1, docs: { 4: { tf: 1.0 } } },
                                      },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 1,
                              docs: { 4: { tf: 1.0 } },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
            },
            l: {
              df: 0,
              docs: {},
              o: {
                b: {
                  a: {
                    df: 0,
                    docs: {},
                    l: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
            },
          },
          h: {
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, o: { df: 1, docs: { 5: { tf: 1.0 } } } },
                p: { df: 2, docs: { 6: { tf: 1.0 }, 7: { tf: 1.0 } } },
              },
              r: {
                df: 0,
                docs: {},
                e: {
                  "'": { df: 1, docs: { 4: { tf: 1.0 } } },
                  df: 1,
                  docs: { 4: { tf: 1.0 } },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                h: {
                  df: 1,
                  docs: { 7: { tf: 1.0 } },
                  l: {
                    df: 0,
                    docs: {},
                    i: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                },
              },
            },
            t: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  s: {
                    ":": {
                      "/": {
                        "/": {
                          d: {
                            df: 0,
                            docs: {},
                            o: {
                              c: {
                                ".": {
                                  df: 0,
                                  docs: {},
                                  r: {
                                    df: 0,
                                    docs: {},
                                    u: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: { df: 1, docs: { 4: { tf: 1.0 } } },
                                      },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
          },
          i: {
            d: { df: 1, docs: { 6: { tf: 1.0 } } },
            df: 0,
            docs: {},
            m: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                l: {
                  df: 1,
                  docs: { 4: { tf: 1.0 } },
                  e: {
                    df: 0,
                    docs: {},
                    m: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        n: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                        },
                      },
                    },
                  },
                },
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
            n: {
              c: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  u: {
                    d: { df: 1, docs: { 4: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    a: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    m: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    l: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    f: {
                      a: {
                        c: { df: 1, docs: { 1: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
                r: {
                  df: 0,
                  docs: {},
                  o: {
                    d: {
                      df: 0,
                      docs: {},
                      u: {
                        c: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 0: { tf: 1.0 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            p: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
            t: {
              "'": { df: 1, docs: { 4: { tf: 1.0 } } },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    f: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          k: {
            df: 0,
            docs: {},
            e: { df: 0, docs: {}, y: { df: 1, docs: { 4: { tf: 1.0 } } } },
          },
          l: {
            a: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  ".": {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      r: {
                        df: 0,
                        docs: {},
                        g: {
                          "/": {
                            c: {
                              a: {
                                df: 0,
                                docs: {},
                                r: {
                                  df: 0,
                                  docs: {},
                                  g: {
                                    df: 0,
                                    docs: {},
                                    o: {
                                      "/": {
                                        df: 0,
                                        docs: {},
                                        r: {
                                          df: 0,
                                          docs: {},
                                          e: {
                                            df: 0,
                                            docs: {},
                                            f: {
                                              df: 0,
                                              docs: {},
                                              e: {
                                                df: 0,
                                                docs: {},
                                                r: {
                                                  df: 0,
                                                  docs: {},
                                                  e: {
                                                    df: 0,
                                                    docs: {},
                                                    n: {
                                                      c: {
                                                        df: 0,
                                                        docs: {},
                                                        e: {
                                                          "/": {
                                                            df: 0,
                                                            docs: {},
                                                            m: {
                                                              a: {
                                                                df: 0,
                                                                docs: {},
                                                                n: {
                                                                  df: 0,
                                                                  docs: {},
                                                                  i: {
                                                                    df: 0,
                                                                    docs: {},
                                                                    f: {
                                                                      df: 0,
                                                                      docs: {},
                                                                      e: {
                                                                        df: 0,
                                                                        docs: {},
                                                                        s: {
                                                                          df: 0,
                                                                          docs: {},
                                                                          t: {
                                                                            ".": {
                                                                              df: 0,
                                                                              docs: {},
                                                                              h: {
                                                                                df: 0,
                                                                                docs: {},
                                                                                t: {
                                                                                  df: 0,
                                                                                  docs: {},
                                                                                  m: {
                                                                                    df: 0,
                                                                                    docs: {},
                                                                                    l: {
                                                                                      df: 1,
                                                                                      docs: {
                                                                                        4: {
                                                                                          tf: 1.0,
                                                                                        },
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                            df: 0,
                                                                            docs: {},
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              df: 0,
                                                              docs: {},
                                                            },
                                                          },
                                                          df: 0,
                                                          docs: {},
                                                        },
                                                      },
                                                      df: 0,
                                                      docs: {},
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              v: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 2,
                    docs: { 6: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                e: {
                  '"': {
                    ".": {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        o: {
                          _: {
                            df: 0,
                            docs: {},
                            s: {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                r: { df: 1, docs: { 7: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  "(": {
                    "'": {
                      $: {
                        "'": {
                          ")": {
                            '"': {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 7: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 2,
                  docs: { 1: { tf: 1.0 }, 7: { tf: 2.0 } },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              o: { df: 0, docs: {}, k: { df: 1, docs: { 7: { tf: 1.0 } } } },
              t: { df: 1, docs: { 2: { tf: 1.4142135623730951 } } },
              w: { df: 2, docs: { 6: { tf: 1.0 }, 7: { tf: 1.0 } } },
            },
          },
          m: {
            a: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, n: { df: 1, docs: { 4: { tf: 1.0 } } } },
              k: { df: 0, docs: {}, e: { df: 1, docs: { 4: { tf: 1.0 } } } },
              n: { df: 0, docs: {}, i: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 3: { tf: 1.0 }, 4: { tf: 1.0 } } },
              },
            },
            u: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              t: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
            },
            y: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    g: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        n: { df: 1, docs: { 4: { tf: 2.0 } } },
                      },
                    },
                  },
                },
              },
            },
          },
          n: {
            a: {
              df: 0,
              docs: {},
              m: { df: 0, docs: {}, e: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              w: { df: 1, docs: { 6: { tf: 1.4142135623730951 } } },
            },
            o: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 7: { tf: 1.4142135623730951 } } },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 3,
                  docs: {
                    4: { tf: 1.4142135623730951 },
                    6: { tf: 1.0 },
                    7: { tf: 1.0 },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              m: {
                b: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      '"': {
                        ".": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            o: {
                              _: {
                                df: 0,
                                docs: {},
                                s: {
                                  df: 0,
                                  docs: {},
                                  t: {
                                    df: 0,
                                    docs: {},
                                    r: { df: 1, docs: { 6: { tf: 1.0 } } },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 1,
                      docs: { 7: { tf: 1.4142135623730951 } },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          o: { df: 0, docs: {}, k: { df: 1, docs: { 4: { tf: 1.0 } } } },
          p: {
            a: {
              c: {
                df: 0,
                docs: {},
                k: {
                  a: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            l: {
              df: 0,
              docs: {},
              u: {
                df: 0,
                docs: {},
                g: {
                  df: 1,
                  docs: { 4: { tf: 2.0 } },
                  i: {
                    df: 0,
                    docs: {},
                    n: {
                      "(": {
                        "&": {
                          df: 0,
                          docs: {},
                          m: {
                            df: 0,
                            docs: {},
                            u: {
                              df: 0,
                              docs: {},
                              t: { df: 1, docs: { 4: { tf: 1.0 } } },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                      ".": {
                        df: 0,
                        docs: {},
                        r: {
                          df: 0,
                          docs: {},
                          u: {
                            df: 0,
                            docs: {},
                            n: { df: 1, docs: { 4: { tf: 1.0 } } },
                          },
                        },
                      },
                      c: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          n: {
                            df: 0,
                            docs: {},
                            f: {
                              df: 0,
                              docs: {},
                              i: {
                                df: 0,
                                docs: {},
                                g: {
                                  ":": {
                                    ":": {
                                      df: 0,
                                      docs: {},
                                      n: {
                                        df: 0,
                                        docs: {},
                                        e: {
                                          df: 0,
                                          docs: {},
                                          w: {
                                            "(": {
                                              '"': {
                                                1: {
                                                  2: {
                                                    7: {
                                                      ".": {
                                                        0: {
                                                          ".": {
                                                            0: {
                                                              ".": {
                                                                1: {
                                                                  '"': {
                                                                    ".": {
                                                                      df: 0,
                                                                      docs: {},
                                                                      t: {
                                                                        df: 0,
                                                                        docs: {},
                                                                        o: {
                                                                          _: {
                                                                            df: 0,
                                                                            docs: {},
                                                                            s: {
                                                                              df: 0,
                                                                              docs: {},
                                                                              t: {
                                                                                df: 0,
                                                                                docs: {},
                                                                                r: {
                                                                                  df: 1,
                                                                                  docs: {
                                                                                    4: {
                                                                                      tf: 1.0,
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                          df: 0,
                                                                          docs: {},
                                                                        },
                                                                      },
                                                                    },
                                                                    df: 0,
                                                                    docs: {},
                                                                  },
                                                                  df: 0,
                                                                  docs: {},
                                                                },
                                                                df: 0,
                                                                docs: {},
                                                              },
                                                              df: 0,
                                                              docs: {},
                                                            },
                                                            df: 0,
                                                            docs: {},
                                                          },
                                                          df: 0,
                                                          docs: {},
                                                        },
                                                        df: 0,
                                                        docs: {},
                                                      },
                                                      df: 0,
                                                      docs: {},
                                                    },
                                                    df: 0,
                                                    docs: {},
                                                  },
                                                  df: 0,
                                                  docs: {},
                                                },
                                                df: 0,
                                                docs: {},
                                              },
                                              df: 0,
                                              docs: {},
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                  df: 1,
                                  docs: { 4: { tf: 1.4142135623730951 } },
                                },
                              },
                            },
                          },
                        },
                      },
                      df: 2,
                      docs: { 4: { tf: 4.123105625617661 }, 9: { tf: 1.0 } },
                    },
                  },
                },
              },
            },
            o: {
              c: { df: 1, docs: { 4: { tf: 1.0 } } },
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                t: { df: 1, docs: { 4: { tf: 1.7320508075688772 } } },
              },
              s: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 3: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 7: { tf: 1.4142135623730951 } } },
                    },
                  },
                },
              },
              o: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  r: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                o: { df: 0, docs: {}, f: { df: 1, docs: { 4: { tf: 1.0 } } } },
                p: {
                  _: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      y: {
                        df: 0,
                        docs: {},
                        p: { df: 1, docs: { 6: { tf: 1.0 } } },
                      },
                    },
                  },
                  df: 1,
                  docs: { 6: { tf: 1.0 } },
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        i: { df: 1, docs: { 6: { tf: 2.0 } } },
                        y: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            y: {
                              df: 0,
                              docs: {},
                              p: {
                                df: 1,
                                docs: { 6: { tf: 1.0 } },
                                e: {
                                  b: {
                                    df: 0,
                                    docs: {},
                                    u: {
                                      df: 0,
                                      docs: {},
                                      i: {
                                        df: 0,
                                        docs: {},
                                        l: {
                                          d: {
                                            df: 0,
                                            docs: {},
                                            e: {
                                              df: 0,
                                              docs: {},
                                              r: {
                                                ":": {
                                                  ":": {
                                                    d: {
                                                      df: 0,
                                                      docs: {},
                                                      e: {
                                                        df: 0,
                                                        docs: {},
                                                        f: {
                                                          a: {
                                                            df: 0,
                                                            docs: {},
                                                            u: {
                                                              df: 0,
                                                              docs: {},
                                                              l: {
                                                                df: 0,
                                                                docs: {},
                                                                t: {
                                                                  "(": {
                                                                    ")": {
                                                                      ".": {
                                                                        df: 0,
                                                                        docs: {},
                                                                        h: {
                                                                          df: 0,
                                                                          docs: {},
                                                                          i: {
                                                                            df: 0,
                                                                            docs: {},
                                                                            g: {
                                                                              df: 0,
                                                                              docs: {},
                                                                              h: {
                                                                                df: 0,
                                                                                docs: {},
                                                                                l: {
                                                                                  df: 0,
                                                                                  docs: {},
                                                                                  i: {
                                                                                    df: 0,
                                                                                    docs: {},
                                                                                    g: {
                                                                                      df: 0,
                                                                                      docs: {},
                                                                                      h: {
                                                                                        df: 0,
                                                                                        docs: {},
                                                                                        t: {
                                                                                          "(": {
                                                                                            '"': {
                                                                                              c: {
                                                                                                df: 0,
                                                                                                docs: {},
                                                                                                o: {
                                                                                                  df: 0,
                                                                                                  docs: {},
                                                                                                  n: {
                                                                                                    df: 0,
                                                                                                    docs: {},
                                                                                                    s: {
                                                                                                      df: 0,
                                                                                                      docs: {},
                                                                                                      t: {
                                                                                                        a: {
                                                                                                          df: 0,
                                                                                                          docs: {},
                                                                                                          n: {
                                                                                                            df: 0,
                                                                                                            docs: {},
                                                                                                            t: {
                                                                                                              '"': {
                                                                                                                ".": {
                                                                                                                  df: 0,
                                                                                                                  docs: {},
                                                                                                                  t: {
                                                                                                                    df: 0,
                                                                                                                    docs: {},
                                                                                                                    o: {
                                                                                                                      _: {
                                                                                                                        df: 0,
                                                                                                                        docs: {},
                                                                                                                        s: {
                                                                                                                          df: 0,
                                                                                                                          docs: {},
                                                                                                                          t: {
                                                                                                                            df: 0,
                                                                                                                            docs: {},
                                                                                                                            r: {
                                                                                                                              df: 0,
                                                                                                                              docs: {},
                                                                                                                              i: {
                                                                                                                                df: 0,
                                                                                                                                docs: {},
                                                                                                                                n: {
                                                                                                                                  df: 0,
                                                                                                                                  docs: {},
                                                                                                                                  g: {
                                                                                                                                    "(": {
                                                                                                                                      ")": {
                                                                                                                                        ")": {
                                                                                                                                          ".": {
                                                                                                                                            b: {
                                                                                                                                              df: 0,
                                                                                                                                              docs: {},
                                                                                                                                              u: {
                                                                                                                                                df: 0,
                                                                                                                                                docs: {},
                                                                                                                                                i: {
                                                                                                                                                  df: 0,
                                                                                                                                                  docs: {},
                                                                                                                                                  l: {
                                                                                                                                                    d: {
                                                                                                                                                      df: 1,
                                                                                                                                                      docs: {
                                                                                                                                                        6: {
                                                                                                                                                          tf: 1.0,
                                                                                                                                                        },
                                                                                                                                                      },
                                                                                                                                                    },
                                                                                                                                                    df: 0,
                                                                                                                                                    docs: {},
                                                                                                                                                  },
                                                                                                                                                },
                                                                                                                                              },
                                                                                                                                            },
                                                                                                                                            df: 0,
                                                                                                                                            docs: {},
                                                                                                                                          },
                                                                                                                                          df: 0,
                                                                                                                                          docs: {},
                                                                                                                                        },
                                                                                                                                        df: 0,
                                                                                                                                        docs: {},
                                                                                                                                      },
                                                                                                                                      df: 0,
                                                                                                                                      docs: {},
                                                                                                                                    },
                                                                                                                                    df: 0,
                                                                                                                                    docs: {},
                                                                                                                                  },
                                                                                                                                },
                                                                                                                              },
                                                                                                                            },
                                                                                                                          },
                                                                                                                        },
                                                                                                                      },
                                                                                                                      df: 0,
                                                                                                                      docs: {},
                                                                                                                    },
                                                                                                                  },
                                                                                                                },
                                                                                                                df: 0,
                                                                                                                docs: {},
                                                                                                              },
                                                                                                              df: 0,
                                                                                                              docs: {},
                                                                                                            },
                                                                                                          },
                                                                                                        },
                                                                                                        df: 0,
                                                                                                        docs: {},
                                                                                                      },
                                                                                                    },
                                                                                                  },
                                                                                                },
                                                                                              },
                                                                                              df: 0,
                                                                                              docs: {},
                                                                                            },
                                                                                            df: 0,
                                                                                            docs: {},
                                                                                          },
                                                                                          df: 0,
                                                                                          docs: {},
                                                                                        },
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                        },
                                                                      },
                                                                      df: 0,
                                                                      docs: {},
                                                                    },
                                                                    df: 0,
                                                                    docs: {},
                                                                  },
                                                                  df: 0,
                                                                  docs: {},
                                                                },
                                                              },
                                                            },
                                                          },
                                                          df: 0,
                                                          docs: {},
                                                        },
                                                      },
                                                    },
                                                    df: 0,
                                                    docs: {},
                                                  },
                                                  df: 0,
                                                  docs: {},
                                                },
                                                df: 0,
                                                docs: {},
                                              },
                                            },
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            y: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                h: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      x: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          q: {
            df: 0,
            docs: {},
            u: {
              a: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      i: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              i: {
                c: {
                  df: 0,
                  docs: {},
                  k: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: {
                        a: {
                          df: 0,
                          docs: {},
                          r: {
                            df: 0,
                            docs: {},
                            t: { df: 1, docs: { 3: { tf: 1.0 } } },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          r: {
            "#": {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                y: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    e: { df: 1, docs: { 6: { tf: 1.0 } } },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                d: {
                  df: 1,
                  docs: { 4: { tf: 1.0 } },
                  i: { df: 1, docs: { 4: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              n: { df: 1, docs: { 4: { tf: 2.23606797749979 } } },
              s: {
                df: 0,
                docs: {},
                t: { df: 1, docs: { 4: { tf: 2.23606797749979 } } },
              },
            },
          },
          s: {
            df: 0,
            docs: {},
            e: {
              c: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              e: {
                df: 4,
                docs: {
                  4: { tf: 1.0 },
                  5: { tf: 1.0 },
                  6: { tf: 1.0 },
                  7: { tf: 1.0 },
                },
              },
              l: { df: 0, docs: {}, f: { df: 1, docs: { 4: { tf: 1.0 } } } },
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 1,
                      docs: { 5: { tf: 1.0 } },
                      i: {
                        df: 0,
                        docs: {},
                        z: {
                          df: 0,
                          docs: {},
                          e: {
                            d: {
                              _: {
                                df: 0,
                                docs: {},
                                f: {
                                  df: 0,
                                  docs: {},
                                  l: {
                                    df: 0,
                                    docs: {},
                                    o: {
                                      a: {
                                        df: 0,
                                        docs: {},
                                        t: { df: 1, docs: { 5: { tf: 1.0 } } },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                  },
                                },
                                s: {
                                  df: 0,
                                  docs: {},
                                  t: {
                                    df: 0,
                                    docs: {},
                                    r: { df: 1, docs: { 5: { tf: 1.0 } } },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                v: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                p: { df: 0, docs: {}, l: { df: 1, docs: { 9: { tf: 1.0 } } } },
              },
            },
            r: {
              c: {
                "/": {
                  df: 0,
                  docs: {},
                  m: {
                    a: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        n: {
                          ".": {
                            df: 0,
                            docs: {},
                            r: { df: 1, docs: { 4: { tf: 1.0 } } },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            t: {
              a: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              d: {
                ":": {
                  ":": {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        v: { df: 1, docs: { 4: { tf: 1.0 } } },
                      },
                    },
                    n: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        t: {
                          ":": {
                            ":": {
                              df: 0,
                              docs: {},
                              t: {
                                c: {
                                  df: 0,
                                  docs: {},
                                  p: {
                                    df: 0,
                                    docs: {},
                                    s: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        df: 0,
                                        docs: {},
                                        r: {
                                          df: 0,
                                          docs: {},
                                          e: {
                                            a: {
                                              df: 0,
                                              docs: {},
                                              m: {
                                                df: 1,
                                                docs: { 4: { tf: 1.0 } },
                                              },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, l: { df: 1, docs: { 4: { tf: 1.0 } } } },
              },
              r: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 4: { tf: 1.7320508075688772 } } },
                  },
                },
                u: {
                  c: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 2.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 4: { tf: 1.0 }, 5: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          t: {
            a: {
              df: 0,
              docs: {},
              k: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, n: { df: 1, docs: { 4: { tf: 1.0 } } } },
              },
            },
            c: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      e: {
                        a: {
                          df: 0,
                          docs: {},
                          m: { df: 1, docs: { 4: { tf: 1.0 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              s: { df: 0, docs: {}, t: { df: 1, docs: { 3: { tf: 1.0 } } } },
              x: {
                df: 0,
                docs: {},
                t: {
                  df: 1,
                  docs: { 6: { tf: 1.4142135623730951 } },
                  p: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      o: {
                        df: 0,
                        docs: {},
                        p: {
                          ".": {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              x: {
                                df: 0,
                                docs: {},
                                t: { df: 1, docs: { 6: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                          e: {
                            df: 0,
                            docs: {},
                            r: {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                i: {
                                  df: 1,
                                  docs: { 6: { tf: 1.4142135623730951 } },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              m: { df: 0, docs: {}, e: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            r: {
              a: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, t: { df: 1, docs: { 4: { tf: 1.0 } } } },
                n: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    m: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        s: {
                          df: 0,
                          docs: {},
                          s: { df: 1, docs: { 5: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            y: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 5: { tf: 2.0 }, 6: { tf: 1.0 } } },
              },
            },
          },
          u: {
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            s: {
              df: 6,
              docs: {
                2: { tf: 1.0 },
                3: { tf: 1.0 },
                4: { tf: 2.8284271247461903 },
                5: { tf: 1.4142135623730951 },
                6: { tf: 1.4142135623730951 },
                7: { tf: 1.0 },
              },
            },
          },
          v: {
            a: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              c: {
                "!": {
                  "[": {
                    d: {
                      a: {
                        df: 0,
                        docs: {},
                        t: {
                          a: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              y: {
                                df: 0,
                                docs: {},
                                p: {
                                  df: 0,
                                  docs: {},
                                  e: {
                                    ":": {
                                      ":": {
                                        df: 0,
                                        docs: {},
                                        s: {
                                          df: 0,
                                          docs: {},
                                          t: {
                                            df: 0,
                                            docs: {},
                                            r: {
                                              df: 1,
                                              docs: { 7: { tf: 1.0 } },
                                            },
                                          },
                                        },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              i: {
                ":": {
                  ":": {
                    c: {
                      df: 0,
                      docs: {},
                      h: {
                        a: {
                          df: 0,
                          docs: {},
                          n: {
                            df: 0,
                            docs: {},
                            n: {
                              df: 0,
                              docs: {},
                              e: {
                                df: 0,
                                docs: {},
                                l: { df: 1, docs: { 7: { tf: 1.0 } } },
                              },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    d: {
                      a: {
                        df: 0,
                        docs: {},
                        t: {
                          a: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              y: {
                                df: 0,
                                docs: {},
                                p: { df: 1, docs: { 5: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        u: {
                          df: 0,
                          docs: {},
                          g: {
                            df: 0,
                            docs: {},
                            i: {
                              df: 0,
                              docs: {},
                              n: {
                                ":": {
                                  ":": {
                                    df: 0,
                                    docs: {},
                                    p: {
                                      df: 0,
                                      docs: {},
                                      l: {
                                        df: 0,
                                        docs: {},
                                        u: {
                                          df: 0,
                                          docs: {},
                                          g: {
                                            df: 0,
                                            docs: {},
                                            i: {
                                              df: 0,
                                              docs: {},
                                              n: {
                                                c: {
                                                  df: 0,
                                                  docs: {},
                                                  o: {
                                                    df: 0,
                                                    docs: {},
                                                    n: {
                                                      df: 0,
                                                      docs: {},
                                                      f: {
                                                        df: 0,
                                                        docs: {},
                                                        i: {
                                                          df: 0,
                                                          docs: {},
                                                          g: {
                                                            df: 1,
                                                            docs: {
                                                              4: { tf: 1.0 },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                df: 1,
                                                docs: { 4: { tf: 1.0 } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                            },
                          },
                        },
                      },
                    },
                    t: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        x: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            p: {
                              df: 0,
                              docs: {},
                              r: {
                                df: 0,
                                docs: {},
                                o: {
                                  df: 0,
                                  docs: {},
                                  p: {
                                    ":": {
                                      ":": {
                                        df: 0,
                                        docs: {},
                                        p: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 0,
                                            docs: {},
                                            o: {
                                              df: 0,
                                              docs: {},
                                              p: {
                                                df: 0,
                                                docs: {},
                                                e: {
                                                  df: 0,
                                                  docs: {},
                                                  r: {
                                                    df: 0,
                                                    docs: {},
                                                    t: {
                                                      df: 0,
                                                      docs: {},
                                                      y: {
                                                        df: 0,
                                                        docs: {},
                                                        t: {
                                                          df: 0,
                                                          docs: {},
                                                          y: {
                                                            df: 0,
                                                            docs: {},
                                                            p: {
                                                              df: 0,
                                                              docs: {},
                                                              e: {
                                                                b: {
                                                                  df: 0,
                                                                  docs: {},
                                                                  u: {
                                                                    df: 0,
                                                                    docs: {},
                                                                    i: {
                                                                      df: 0,
                                                                      docs: {},
                                                                      l: {
                                                                        d: {
                                                                          df: 1,
                                                                          docs: {
                                                                            6: {
                                                                              tf: 1.0,
                                                                            },
                                                                          },
                                                                        },
                                                                        df: 0,
                                                                        docs: {},
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                                df: 0,
                                                                docs: {},
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                    df: 1,
                                    docs: { 6: { tf: 1.0 } },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 2,
                docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } },
              },
              m: {
                _: {
                  df: 0,
                  docs: {},
                  f: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 0,
                      docs: {},
                      o: {
                        a: {
                          df: 0,
                          docs: {},
                          t: {
                            ".": {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                o: {
                                  _: {
                                    df: 0,
                                    docs: {},
                                    s: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        df: 0,
                                        docs: {},
                                        r: { df: 1, docs: { 5: { tf: 1.0 } } },
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                              },
                            },
                            df: 1,
                            docs: { 5: { tf: 1.0 } },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                  s: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      r: {
                        df: 1,
                        docs: { 5: { tf: 1.0 } },
                        i: {
                          df: 0,
                          docs: {},
                          n: {
                            df: 0,
                            docs: {},
                            g: {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 5: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                df: 4,
                docs: {
                  4: { tf: 2.449489742783178 },
                  5: { tf: 1.7320508075688772 },
                  6: { tf: 1.4142135623730951 },
                  7: { tf: 1.4142135623730951 },
                },
              },
            },
          },
          w: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                k: {
                  df: 3,
                  docs: { 5: { tf: 1.0 }, 6: { tf: 1.0 }, 7: { tf: 1.0 } },
                },
                l: {
                  d: {
                    "!": {
                      '"': {
                        ".": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            o: {
                              _: {
                                df: 0,
                                docs: {},
                                s: {
                                  df: 0,
                                  docs: {},
                                  t: {
                                    df: 0,
                                    docs: {},
                                    r: { df: 1, docs: { 5: { tf: 1.0 } } },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 1,
                    docs: { 5: { tf: 1.0 } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
          },
          y: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              u: {
                "'": {
                  d: { df: 1, docs: { 4: { tf: 1.0 } } },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
            },
          },
        },
      },
      breadcrumbs: {
        root: {
          0: {
            ".": {
              0: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
              1: {
                ".": {
                  0: { df: 1, docs: { 4: { tf: 1.0 } } },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            df: 1,
            docs: { 6: { tf: 1.0 } },
          },
          1: {
            2: {
              7: {
                ".": {
                  0: {
                    ".": {
                      0: {
                        ".": {
                          1: {
                            '"': {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 4: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          2: {
            0: {
              2: { 1: { df: 1, docs: { 4: { tf: 1.0 } } }, df: 0, docs: {} },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          3: {
            ".": {
              1: { 4: { df: 1, docs: { 5: { tf: 1.0 } } }, df: 0, docs: {} },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          8: {
            7: {
              6: {
                5: {
                  '"': {
                    ".": {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        o: {
                          _: {
                            df: 0,
                            docs: {},
                            s: {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                r: { df: 1, docs: { 4: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
          },
          _: {
            df: 0,
            docs: {},
            s: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
          },
          a: {
            c: { df: 0, docs: {}, t: { df: 1, docs: { 4: { tf: 1.0 } } } },
            d: {
              d: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
              df: 1,
              docs: { 4: { tf: 1.0 } },
            },
            df: 0,
            docs: {},
            p: {
              df: 0,
              docs: {},
              i: {
                df: 2,
                docs: { 6: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
              },
            },
            r: { df: 0, docs: {}, g: { df: 1, docs: { 7: { tf: 1.0 } } } },
            u: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    o: {
                      a: {
                        d: { df: 1, docs: { 4: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
              },
            },
            v: {
              a: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, l: { df: 1, docs: { 2: { tf: 1.0 } } } },
              },
              df: 0,
              docs: {},
            },
          },
          b: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                f: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 7: { tf: 1.4142135623730951 } } },
                  },
                },
              },
            },
          },
          c: {
            a: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: {
                  ".": {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      o: {
                        _: {
                          df: 0,
                          docs: {},
                          s: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              r: { df: 1, docs: { 7: { tf: 1.0 } } },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                  df: 1,
                  docs: { 7: { tf: 2.23606797749979 } },
                },
              },
              r: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  o: {
                    ".": {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          m: {
                            df: 0,
                            docs: {},
                            l: {
                              df: 2,
                              docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } },
                            },
                          },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            df: 0,
            docs: {},
            h: {
              a: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      l: {
                        ".": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            x: {
                              df: 0,
                              docs: {},
                              t: { df: 1, docs: { 7: { tf: 1.0 } } },
                            },
                          },
                        },
                        c: {
                          df: 0,
                          docs: {},
                          o: {
                            df: 0,
                            docs: {},
                            m: {
                              df: 0,
                              docs: {},
                              m: {
                                a: {
                                  df: 0,
                                  docs: {},
                                  n: {
                                    d: {
                                      ":": {
                                        ":": {
                                          c: {
                                            a: {
                                              df: 0,
                                              docs: {},
                                              l: {
                                                df: 1,
                                                docs: { 7: { tf: 1.0 } },
                                              },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                          e: {
                                            df: 0,
                                            docs: {},
                                            x: {
                                              df: 0,
                                              docs: {},
                                              p: {
                                                df: 0,
                                                docs: {},
                                                r: {
                                                  df: 1,
                                                  docs: { 7: { tf: 1.0 } },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                      df: 1,
                                      docs: { 7: { tf: 1.0 } },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                            },
                          },
                        },
                        df: 1,
                        docs: { 7: { tf: 2.0 } },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            l: {
              df: 0,
              docs: {},
              e: {
                a: { df: 0, docs: {}, r: { df: 1, docs: { 3: { tf: 1.0 } } } },
                df: 0,
                docs: {},
              },
            },
            o: {
              d: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
              },
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 2: { tf: 1.0 } } },
                m: {
                  a: {
                    df: 0,
                    docs: {},
                    n: {
                      d: { df: 1, docs: { 4: { tf: 1.0 } } },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    n: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
              n: {
                c: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                f: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    g: {
                      df: 0,
                      docs: {},
                      u: {
                        df: 0,
                        docs: {},
                        r: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                      },
                    },
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              e: {
                a: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 2,
                    docs: { 4: { tf: 2.0 }, 6: { tf: 1.4142135623730951 } },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            u: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 2,
                        docs: { 1: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
                      },
                    },
                  },
                },
              },
            },
          },
          d: {
            a: {
              df: 0,
              docs: {},
              t: {
                a: {
                  df: 1,
                  docs: { 5: { tf: 2.449489742783178 } },
                  t: {
                    df: 0,
                    docs: {},
                    y: {
                      df: 0,
                      docs: {},
                      p: {
                        df: 0,
                        docs: {},
                        e: {
                          ":": {
                            ":": {
                              df: 0,
                              docs: {},
                              f: {
                                df: 0,
                                docs: {},
                                l: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    a: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        "(": {
                                          3: {
                                            ".": {
                                              1: {
                                                4: {
                                                  df: 1,
                                                  docs: { 5: { tf: 1.0 } },
                                                },
                                                df: 0,
                                                docs: {},
                                              },
                                              df: 0,
                                              docs: {},
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                        df: 0,
                                        docs: {},
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              s: {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  r: {
                                    df: 0,
                                    docs: {},
                                    i: {
                                      df: 0,
                                      docs: {},
                                      n: {
                                        df: 0,
                                        docs: {},
                                        g: {
                                          "(": {
                                            '"': {
                                              df: 0,
                                              docs: {},
                                              h: {
                                                df: 0,
                                                docs: {},
                                                e: {
                                                  df: 0,
                                                  docs: {},
                                                  l: {
                                                    df: 0,
                                                    docs: {},
                                                    l: {
                                                      df: 0,
                                                      docs: {},
                                                      o: {
                                                        df: 1,
                                                        docs: {
                                                          5: { tf: 1.0 },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              f: {
                a: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              p: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  n: {
                    d: { df: 2, docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                e: {
                  c: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        i: { df: 1, docs: { 3: { tf: 1.0 } } },
                      },
                      o: {
                        df: 0,
                        docs: {},
                        r: {
                          df: 0,
                          docs: {},
                          i: { df: 1, docs: { 4: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            o: {
              c: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  m: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        t: { df: 2, docs: { 3: { tf: 1.0 }, 5: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
          },
          df: 0,
          docs: {},
          e: {
            d: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, t: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              v: {
                ":": {
                  ":": {
                    df: 0,
                    docs: {},
                    v: {
                      a: {
                        df: 0,
                        docs: {},
                        r: {
                          "(": {
                            '"': {
                              df: 0,
                              docs: {},
                              v: {
                                df: 0,
                                docs: {},
                                i: {
                                  df: 0,
                                  docs: {},
                                  i: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      p: {
                                        df: 0,
                                        docs: {},
                                        l: {
                                          df: 0,
                                          docs: {},
                                          u: {
                                            df: 0,
                                            docs: {},
                                            g: {
                                              df: 0,
                                              docs: {},
                                              i: {
                                                df: 0,
                                                docs: {},
                                                n: {
                                                  _: {
                                                    df: 0,
                                                    docs: {},
                                                    p: {
                                                      df: 0,
                                                      docs: {},
                                                      o: {
                                                        df: 0,
                                                        docs: {},
                                                        r: {
                                                          df: 0,
                                                          docs: {},
                                                          t: {
                                                            '"': {
                                                              ")": {
                                                                ".": {
                                                                  df: 0,
                                                                  docs: {},
                                                                  u: {
                                                                    df: 0,
                                                                    docs: {},
                                                                    n: {
                                                                      df: 0,
                                                                      docs: {},
                                                                      w: {
                                                                        df: 0,
                                                                        docs: {},
                                                                        r: {
                                                                          a: {
                                                                            df: 0,
                                                                            docs: {},
                                                                            p: {
                                                                              df: 1,
                                                                              docs: {
                                                                                4: {
                                                                                  tf: 1.0,
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                          df: 0,
                                                                          docs: {},
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                                df: 0,
                                                                docs: {},
                                                              },
                                                              df: 0,
                                                              docs: {},
                                                            },
                                                            df: 0,
                                                            docs: {},
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  df: 0,
                                                  docs: {},
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            t: { c: { df: 1, docs: { 4: { tf: 1.0 } } }, df: 0, docs: {} },
            v: {
              df: 0,
              docs: {},
              e: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    u: { df: 1, docs: { 7: { tf: 1.0 } } },
                  },
                },
              },
            },
            x: {
              a: {
                df: 0,
                docs: {},
                m: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 4,
                      docs: {
                        3: { tf: 1.0 },
                        4: { tf: 1.0 },
                        8: { tf: 1.7320508075688772 },
                        9: { tf: 1.0 },
                      },
                    },
                  },
                },
              },
              c: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                r: {
                  '"': {
                    ",": {
                      '"': {
                        df: 0,
                        docs: {},
                        l: {
                          df: 0,
                          docs: {},
                          i: {
                            df: 0,
                            docs: {},
                            n: {
                              df: 1,
                              docs: { 7: { tf: 1.4142135623730951 } },
                            },
                          },
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  ":": {
                    ":": {
                      df: 0,
                      docs: {},
                      f: {
                        df: 0,
                        docs: {},
                        r: {
                          df: 0,
                          docs: {},
                          o: {
                            df: 0,
                            docs: {},
                            m: {
                              "(": {
                                '"': {
                                  df: 0,
                                  docs: {},
                                  l: {
                                    df: 0,
                                    docs: {},
                                    i: {
                                      df: 0,
                                      docs: {},
                                      n: { df: 1, docs: { 7: { tf: 1.0 } } },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 1,
                  docs: { 7: { tf: 1.0 } },
                  e: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      s: {
                        df: 1,
                        docs: { 7: { tf: 2.0 } },
                        i: {
                          df: 0,
                          docs: {},
                          o: {
                            df: 0,
                            docs: {},
                            n: {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 7: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          f: {
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 2: { tf: 2.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            i: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                e: {
                  df: 1,
                  docs: { 1: { tf: 1.0 } },
                  t: {
                    df: 0,
                    docs: {},
                    y: {
                      df: 0,
                      docs: {},
                      p: {
                        df: 1,
                        docs: { 4: { tf: 1.0 } },
                        e: {
                          df: 0,
                          docs: {},
                          p: {
                            df: 0,
                            docs: {},
                            l: {
                              df: 0,
                              docs: {},
                              u: {
                                df: 0,
                                docs: {},
                                g: {
                                  df: 0,
                                  docs: {},
                                  i: {
                                    df: 0,
                                    docs: {},
                                    n: { df: 1, docs: { 4: { tf: 1.0 } } },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            n: { df: 1, docs: { 4: { tf: 1.7320508075688772 } } },
            u: {
              df: 0,
              docs: {},
              n: {
                c: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    i: {
                      df: 0,
                      docs: {},
                      o: {
                        df: 0,
                        docs: {},
                        n: { df: 2, docs: { 4: { tf: 1.0 }, 7: { tf: 1.0 } } },
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          g: {
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              t: {
                _: {
                  c: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        f: {
                          df: 0,
                          docs: {},
                          i: {
                            df: 0,
                            docs: {},
                            g: {
                              "(": {
                                "&": {
                                  df: 0,
                                  docs: {},
                                  s: {
                                    df: 0,
                                    docs: {},
                                    e: {
                                      df: 0,
                                      docs: {},
                                      l: {
                                        df: 0,
                                        docs: {},
                                        f: { df: 1, docs: { 4: { tf: 1.0 } } },
                                      },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 1,
                              docs: { 4: { tf: 1.0 } },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
            },
            l: {
              df: 0,
              docs: {},
              o: {
                b: {
                  a: {
                    df: 0,
                    docs: {},
                    l: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
            },
          },
          h: {
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, o: { df: 1, docs: { 5: { tf: 1.0 } } } },
                p: { df: 2, docs: { 6: { tf: 1.0 }, 7: { tf: 1.0 } } },
              },
              r: {
                df: 0,
                docs: {},
                e: {
                  "'": { df: 1, docs: { 4: { tf: 1.0 } } },
                  df: 1,
                  docs: { 4: { tf: 1.0 } },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              g: {
                df: 0,
                docs: {},
                h: {
                  df: 1,
                  docs: { 7: { tf: 1.0 } },
                  l: {
                    df: 0,
                    docs: {},
                    i: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                },
              },
            },
            t: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  s: {
                    ":": {
                      "/": {
                        "/": {
                          d: {
                            df: 0,
                            docs: {},
                            o: {
                              c: {
                                ".": {
                                  df: 0,
                                  docs: {},
                                  r: {
                                    df: 0,
                                    docs: {},
                                    u: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: { df: 1, docs: { 4: { tf: 1.0 } } },
                                      },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
          },
          i: {
            d: { df: 1, docs: { 6: { tf: 1.0 } } },
            df: 0,
            docs: {},
            m: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                l: {
                  df: 1,
                  docs: { 4: { tf: 1.0 } },
                  e: {
                    df: 0,
                    docs: {},
                    m: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        n: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                        },
                      },
                    },
                  },
                },
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
            n: {
              c: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  u: {
                    d: { df: 1, docs: { 4: { tf: 1.0 } } },
                    df: 0,
                    docs: {},
                  },
                },
                r: {
                  df: 0,
                  docs: {},
                  e: {
                    a: {
                      df: 0,
                      docs: {},
                      s: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
              df: 0,
              docs: {},
              f: {
                df: 0,
                docs: {},
                o: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    m: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 3,
                      docs: {
                        1: { tf: 1.7320508075688772 },
                        2: { tf: 1.0 },
                        4: { tf: 1.0 },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  r: {
                    df: 0,
                    docs: {},
                    f: {
                      a: {
                        c: { df: 1, docs: { 1: { tf: 1.0 } } },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                  },
                },
                r: {
                  df: 0,
                  docs: {},
                  o: {
                    d: {
                      df: 0,
                      docs: {},
                      u: {
                        c: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 0: { tf: 1.7320508075688772 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            p: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
            t: {
              "'": { df: 1, docs: { 4: { tf: 1.0 } } },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    f: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
          },
          k: {
            df: 0,
            docs: {},
            e: { df: 0, docs: {}, y: { df: 1, docs: { 4: { tf: 1.0 } } } },
          },
          l: {
            a: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                g: {
                  ".": {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      r: {
                        df: 0,
                        docs: {},
                        g: {
                          "/": {
                            c: {
                              a: {
                                df: 0,
                                docs: {},
                                r: {
                                  df: 0,
                                  docs: {},
                                  g: {
                                    df: 0,
                                    docs: {},
                                    o: {
                                      "/": {
                                        df: 0,
                                        docs: {},
                                        r: {
                                          df: 0,
                                          docs: {},
                                          e: {
                                            df: 0,
                                            docs: {},
                                            f: {
                                              df: 0,
                                              docs: {},
                                              e: {
                                                df: 0,
                                                docs: {},
                                                r: {
                                                  df: 0,
                                                  docs: {},
                                                  e: {
                                                    df: 0,
                                                    docs: {},
                                                    n: {
                                                      c: {
                                                        df: 0,
                                                        docs: {},
                                                        e: {
                                                          "/": {
                                                            df: 0,
                                                            docs: {},
                                                            m: {
                                                              a: {
                                                                df: 0,
                                                                docs: {},
                                                                n: {
                                                                  df: 0,
                                                                  docs: {},
                                                                  i: {
                                                                    df: 0,
                                                                    docs: {},
                                                                    f: {
                                                                      df: 0,
                                                                      docs: {},
                                                                      e: {
                                                                        df: 0,
                                                                        docs: {},
                                                                        s: {
                                                                          df: 0,
                                                                          docs: {},
                                                                          t: {
                                                                            ".": {
                                                                              df: 0,
                                                                              docs: {},
                                                                              h: {
                                                                                df: 0,
                                                                                docs: {},
                                                                                t: {
                                                                                  df: 0,
                                                                                  docs: {},
                                                                                  m: {
                                                                                    df: 0,
                                                                                    docs: {},
                                                                                    l: {
                                                                                      df: 1,
                                                                                      docs: {
                                                                                        4: {
                                                                                          tf: 1.0,
                                                                                        },
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                            df: 0,
                                                                            docs: {},
                                                                          },
                                                                        },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              df: 0,
                                                              docs: {},
                                                            },
                                                          },
                                                          df: 0,
                                                          docs: {},
                                                        },
                                                      },
                                                      df: 0,
                                                      docs: {},
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              v: {
                df: 0,
                docs: {},
                e: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 2,
                    docs: { 6: { tf: 1.0 }, 7: { tf: 1.4142135623730951 } },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                e: {
                  '"': {
                    ".": {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        o: {
                          _: {
                            df: 0,
                            docs: {},
                            s: {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                r: { df: 1, docs: { 7: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                  "(": {
                    "'": {
                      $: {
                        "'": {
                          ")": {
                            '"': {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 7: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 2,
                  docs: { 1: { tf: 1.0 }, 7: { tf: 2.0 } },
                },
              },
            },
            o: {
              df: 0,
              docs: {},
              o: { df: 0, docs: {}, k: { df: 1, docs: { 7: { tf: 1.0 } } } },
              t: { df: 1, docs: { 2: { tf: 1.4142135623730951 } } },
              w: { df: 2, docs: { 6: { tf: 1.0 }, 7: { tf: 1.0 } } },
            },
          },
          m: {
            a: {
              df: 0,
              docs: {},
              i: { df: 0, docs: {}, n: { df: 1, docs: { 4: { tf: 1.0 } } } },
              k: { df: 0, docs: {}, e: { df: 1, docs: { 4: { tf: 1.0 } } } },
              n: { df: 0, docs: {}, i: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                e: { df: 2, docs: { 3: { tf: 1.0 }, 4: { tf: 1.0 } } },
              },
            },
            u: {
              df: 0,
              docs: {},
              l: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              t: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
            },
            y: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    g: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        n: { df: 1, docs: { 4: { tf: 2.0 } } },
                      },
                    },
                  },
                },
              },
            },
          },
          n: {
            a: {
              df: 0,
              docs: {},
              m: { df: 0, docs: {}, e: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              w: { df: 1, docs: { 6: { tf: 1.4142135623730951 } } },
            },
            o: {
              df: 0,
              docs: {},
              n: {
                df: 0,
                docs: {},
                e: { df: 1, docs: { 7: { tf: 1.4142135623730951 } } },
              },
              t: {
                df: 0,
                docs: {},
                e: {
                  df: 3,
                  docs: {
                    4: { tf: 1.4142135623730951 },
                    6: { tf: 1.0 },
                    7: { tf: 1.0 },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              m: {
                b: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      '"': {
                        ".": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            o: {
                              _: {
                                df: 0,
                                docs: {},
                                s: {
                                  df: 0,
                                  docs: {},
                                  t: {
                                    df: 0,
                                    docs: {},
                                    r: { df: 1, docs: { 6: { tf: 1.0 } } },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 1,
                      docs: { 7: { tf: 1.4142135623730951 } },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          o: { df: 0, docs: {}, k: { df: 1, docs: { 4: { tf: 1.0 } } } },
          p: {
            a: {
              c: {
                df: 0,
                docs: {},
                k: {
                  a: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              df: 0,
              docs: {},
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            l: {
              df: 0,
              docs: {},
              u: {
                df: 0,
                docs: {},
                g: {
                  df: 1,
                  docs: { 4: { tf: 2.0 } },
                  i: {
                    df: 0,
                    docs: {},
                    n: {
                      "(": {
                        "&": {
                          df: 0,
                          docs: {},
                          m: {
                            df: 0,
                            docs: {},
                            u: {
                              df: 0,
                              docs: {},
                              t: { df: 1, docs: { 4: { tf: 1.0 } } },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                      ".": {
                        df: 0,
                        docs: {},
                        r: {
                          df: 0,
                          docs: {},
                          u: {
                            df: 0,
                            docs: {},
                            n: { df: 1, docs: { 4: { tf: 1.0 } } },
                          },
                        },
                      },
                      c: {
                        df: 0,
                        docs: {},
                        o: {
                          df: 0,
                          docs: {},
                          n: {
                            df: 0,
                            docs: {},
                            f: {
                              df: 0,
                              docs: {},
                              i: {
                                df: 0,
                                docs: {},
                                g: {
                                  ":": {
                                    ":": {
                                      df: 0,
                                      docs: {},
                                      n: {
                                        df: 0,
                                        docs: {},
                                        e: {
                                          df: 0,
                                          docs: {},
                                          w: {
                                            "(": {
                                              '"': {
                                                1: {
                                                  2: {
                                                    7: {
                                                      ".": {
                                                        0: {
                                                          ".": {
                                                            0: {
                                                              ".": {
                                                                1: {
                                                                  '"': {
                                                                    ".": {
                                                                      df: 0,
                                                                      docs: {},
                                                                      t: {
                                                                        df: 0,
                                                                        docs: {},
                                                                        o: {
                                                                          _: {
                                                                            df: 0,
                                                                            docs: {},
                                                                            s: {
                                                                              df: 0,
                                                                              docs: {},
                                                                              t: {
                                                                                df: 0,
                                                                                docs: {},
                                                                                r: {
                                                                                  df: 1,
                                                                                  docs: {
                                                                                    4: {
                                                                                      tf: 1.0,
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                          df: 0,
                                                                          docs: {},
                                                                        },
                                                                      },
                                                                    },
                                                                    df: 0,
                                                                    docs: {},
                                                                  },
                                                                  df: 0,
                                                                  docs: {},
                                                                },
                                                                df: 0,
                                                                docs: {},
                                                              },
                                                              df: 0,
                                                              docs: {},
                                                            },
                                                            df: 0,
                                                            docs: {},
                                                          },
                                                          df: 0,
                                                          docs: {},
                                                        },
                                                        df: 0,
                                                        docs: {},
                                                      },
                                                      df: 0,
                                                      docs: {},
                                                    },
                                                    df: 0,
                                                    docs: {},
                                                  },
                                                  df: 0,
                                                  docs: {},
                                                },
                                                df: 0,
                                                docs: {},
                                              },
                                              df: 0,
                                              docs: {},
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                  df: 1,
                                  docs: { 4: { tf: 1.4142135623730951 } },
                                },
                              },
                            },
                          },
                        },
                      },
                      df: 2,
                      docs: {
                        4: { tf: 4.242640687119285 },
                        9: { tf: 1.7320508075688772 },
                      },
                    },
                  },
                },
              },
            },
            o: {
              c: { df: 1, docs: { 4: { tf: 1.0 } } },
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                t: { df: 1, docs: { 4: { tf: 1.7320508075688772 } } },
              },
              s: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 3: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 7: { tf: 1.4142135623730951 } } },
                    },
                  },
                },
              },
              o: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  r: {
                    a: {
                      df: 0,
                      docs: {},
                      m: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                o: { df: 0, docs: {}, f: { df: 1, docs: { 4: { tf: 1.0 } } } },
                p: {
                  _: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      y: {
                        df: 0,
                        docs: {},
                        p: { df: 1, docs: { 6: { tf: 1.0 } } },
                      },
                    },
                  },
                  df: 1,
                  docs: { 6: { tf: 1.0 } },
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        i: { df: 1, docs: { 6: { tf: 2.449489742783178 } } },
                        y: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            y: {
                              df: 0,
                              docs: {},
                              p: {
                                df: 1,
                                docs: { 6: { tf: 1.0 } },
                                e: {
                                  b: {
                                    df: 0,
                                    docs: {},
                                    u: {
                                      df: 0,
                                      docs: {},
                                      i: {
                                        df: 0,
                                        docs: {},
                                        l: {
                                          d: {
                                            df: 0,
                                            docs: {},
                                            e: {
                                              df: 0,
                                              docs: {},
                                              r: {
                                                ":": {
                                                  ":": {
                                                    d: {
                                                      df: 0,
                                                      docs: {},
                                                      e: {
                                                        df: 0,
                                                        docs: {},
                                                        f: {
                                                          a: {
                                                            df: 0,
                                                            docs: {},
                                                            u: {
                                                              df: 0,
                                                              docs: {},
                                                              l: {
                                                                df: 0,
                                                                docs: {},
                                                                t: {
                                                                  "(": {
                                                                    ")": {
                                                                      ".": {
                                                                        df: 0,
                                                                        docs: {},
                                                                        h: {
                                                                          df: 0,
                                                                          docs: {},
                                                                          i: {
                                                                            df: 0,
                                                                            docs: {},
                                                                            g: {
                                                                              df: 0,
                                                                              docs: {},
                                                                              h: {
                                                                                df: 0,
                                                                                docs: {},
                                                                                l: {
                                                                                  df: 0,
                                                                                  docs: {},
                                                                                  i: {
                                                                                    df: 0,
                                                                                    docs: {},
                                                                                    g: {
                                                                                      df: 0,
                                                                                      docs: {},
                                                                                      h: {
                                                                                        df: 0,
                                                                                        docs: {},
                                                                                        t: {
                                                                                          "(": {
                                                                                            '"': {
                                                                                              c: {
                                                                                                df: 0,
                                                                                                docs: {},
                                                                                                o: {
                                                                                                  df: 0,
                                                                                                  docs: {},
                                                                                                  n: {
                                                                                                    df: 0,
                                                                                                    docs: {},
                                                                                                    s: {
                                                                                                      df: 0,
                                                                                                      docs: {},
                                                                                                      t: {
                                                                                                        a: {
                                                                                                          df: 0,
                                                                                                          docs: {},
                                                                                                          n: {
                                                                                                            df: 0,
                                                                                                            docs: {},
                                                                                                            t: {
                                                                                                              '"': {
                                                                                                                ".": {
                                                                                                                  df: 0,
                                                                                                                  docs: {},
                                                                                                                  t: {
                                                                                                                    df: 0,
                                                                                                                    docs: {},
                                                                                                                    o: {
                                                                                                                      _: {
                                                                                                                        df: 0,
                                                                                                                        docs: {},
                                                                                                                        s: {
                                                                                                                          df: 0,
                                                                                                                          docs: {},
                                                                                                                          t: {
                                                                                                                            df: 0,
                                                                                                                            docs: {},
                                                                                                                            r: {
                                                                                                                              df: 0,
                                                                                                                              docs: {},
                                                                                                                              i: {
                                                                                                                                df: 0,
                                                                                                                                docs: {},
                                                                                                                                n: {
                                                                                                                                  df: 0,
                                                                                                                                  docs: {},
                                                                                                                                  g: {
                                                                                                                                    "(": {
                                                                                                                                      ")": {
                                                                                                                                        ")": {
                                                                                                                                          ".": {
                                                                                                                                            b: {
                                                                                                                                              df: 0,
                                                                                                                                              docs: {},
                                                                                                                                              u: {
                                                                                                                                                df: 0,
                                                                                                                                                docs: {},
                                                                                                                                                i: {
                                                                                                                                                  df: 0,
                                                                                                                                                  docs: {},
                                                                                                                                                  l: {
                                                                                                                                                    d: {
                                                                                                                                                      df: 1,
                                                                                                                                                      docs: {
                                                                                                                                                        6: {
                                                                                                                                                          tf: 1.0,
                                                                                                                                                        },
                                                                                                                                                      },
                                                                                                                                                    },
                                                                                                                                                    df: 0,
                                                                                                                                                    docs: {},
                                                                                                                                                  },
                                                                                                                                                },
                                                                                                                                              },
                                                                                                                                            },
                                                                                                                                            df: 0,
                                                                                                                                            docs: {},
                                                                                                                                          },
                                                                                                                                          df: 0,
                                                                                                                                          docs: {},
                                                                                                                                        },
                                                                                                                                        df: 0,
                                                                                                                                        docs: {},
                                                                                                                                      },
                                                                                                                                      df: 0,
                                                                                                                                      docs: {},
                                                                                                                                    },
                                                                                                                                    df: 0,
                                                                                                                                    docs: {},
                                                                                                                                  },
                                                                                                                                },
                                                                                                                              },
                                                                                                                            },
                                                                                                                          },
                                                                                                                        },
                                                                                                                      },
                                                                                                                      df: 0,
                                                                                                                      docs: {},
                                                                                                                    },
                                                                                                                  },
                                                                                                                },
                                                                                                                df: 0,
                                                                                                                docs: {},
                                                                                                              },
                                                                                                              df: 0,
                                                                                                              docs: {},
                                                                                                            },
                                                                                                          },
                                                                                                        },
                                                                                                        df: 0,
                                                                                                        docs: {},
                                                                                                      },
                                                                                                    },
                                                                                                  },
                                                                                                },
                                                                                              },
                                                                                              df: 0,
                                                                                              docs: {},
                                                                                            },
                                                                                            df: 0,
                                                                                            docs: {},
                                                                                          },
                                                                                          df: 0,
                                                                                          docs: {},
                                                                                        },
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                },
                                                                              },
                                                                            },
                                                                          },
                                                                        },
                                                                      },
                                                                      df: 0,
                                                                      docs: {},
                                                                    },
                                                                    df: 0,
                                                                    docs: {},
                                                                  },
                                                                  df: 0,
                                                                  docs: {},
                                                                },
                                                              },
                                                            },
                                                          },
                                                          df: 0,
                                                          docs: {},
                                                        },
                                                      },
                                                    },
                                                    df: 0,
                                                    docs: {},
                                                  },
                                                  df: 0,
                                                  docs: {},
                                                },
                                                df: 0,
                                                docs: {},
                                              },
                                            },
                                          },
                                          df: 0,
                                          docs: {},
                                        },
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            y: {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                h: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    n: {
                      df: 0,
                      docs: {},
                      x: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          q: {
            df: 0,
            docs: {},
            u: {
              a: {
                df: 0,
                docs: {},
                l: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      i: { df: 1, docs: { 2: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              i: {
                c: {
                  df: 0,
                  docs: {},
                  k: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: {
                        a: {
                          df: 0,
                          docs: {},
                          r: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 2,
                              docs: {
                                3: { tf: 1.7320508075688772 },
                                4: { tf: 1.0 },
                              },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          r: {
            "#": {
              df: 0,
              docs: {},
              t: {
                df: 0,
                docs: {},
                y: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    e: { df: 1, docs: { 6: { tf: 1.0 } } },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              a: {
                d: {
                  df: 1,
                  docs: { 4: { tf: 1.0 } },
                  i: { df: 1, docs: { 4: { tf: 1.0 } } },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                u: {
                  df: 0,
                  docs: {},
                  l: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              n: { df: 1, docs: { 4: { tf: 2.23606797749979 } } },
              s: {
                df: 0,
                docs: {},
                t: { df: 1, docs: { 4: { tf: 2.23606797749979 } } },
              },
            },
          },
          s: {
            df: 0,
            docs: {},
            e: {
              c: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
              e: {
                df: 4,
                docs: {
                  4: { tf: 1.0 },
                  5: { tf: 1.0 },
                  6: { tf: 1.0 },
                  7: { tf: 1.0 },
                },
              },
              l: { df: 0, docs: {}, f: { df: 1, docs: { 4: { tf: 1.0 } } } },
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 1,
                      docs: { 5: { tf: 1.0 } },
                      i: {
                        df: 0,
                        docs: {},
                        z: {
                          df: 0,
                          docs: {},
                          e: {
                            d: {
                              _: {
                                df: 0,
                                docs: {},
                                f: {
                                  df: 0,
                                  docs: {},
                                  l: {
                                    df: 0,
                                    docs: {},
                                    o: {
                                      a: {
                                        df: 0,
                                        docs: {},
                                        t: { df: 1, docs: { 5: { tf: 1.0 } } },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                  },
                                },
                                s: {
                                  df: 0,
                                  docs: {},
                                  t: {
                                    df: 0,
                                    docs: {},
                                    r: { df: 1, docs: { 5: { tf: 1.0 } } },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                            df: 0,
                            docs: {},
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                v: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 4: { tf: 1.0 } } },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  l: { df: 1, docs: { 9: { tf: 1.7320508075688772 } } },
                },
              },
            },
            r: {
              c: {
                "/": {
                  df: 0,
                  docs: {},
                  m: {
                    a: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        n: {
                          ".": {
                            df: 0,
                            docs: {},
                            r: { df: 1, docs: { 4: { tf: 1.0 } } },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
            },
            t: {
              a: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    u: {
                      df: 0,
                      docs: {},
                      p: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
              d: {
                ":": {
                  ":": {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      n: {
                        df: 0,
                        docs: {},
                        v: { df: 1, docs: { 4: { tf: 1.0 } } },
                      },
                    },
                    n: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        t: {
                          ":": {
                            ":": {
                              df: 0,
                              docs: {},
                              t: {
                                c: {
                                  df: 0,
                                  docs: {},
                                  p: {
                                    df: 0,
                                    docs: {},
                                    s: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        df: 0,
                                        docs: {},
                                        r: {
                                          df: 0,
                                          docs: {},
                                          e: {
                                            a: {
                                              df: 0,
                                              docs: {},
                                              m: {
                                                df: 1,
                                                docs: { 4: { tf: 1.0 } },
                                              },
                                            },
                                            df: 0,
                                            docs: {},
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                df: 0,
                                docs: {},
                              },
                            },
                            df: 0,
                            docs: {},
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              i: {
                df: 0,
                docs: {},
                l: { df: 0, docs: {}, l: { df: 1, docs: { 4: { tf: 1.0 } } } },
              },
              r: {
                df: 0,
                docs: {},
                i: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    g: { df: 1, docs: { 4: { tf: 1.7320508075688772 } } },
                  },
                },
                u: {
                  c: {
                    df: 0,
                    docs: {},
                    t: { df: 1, docs: { 4: { tf: 2.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            u: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  o: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      t: { df: 2, docs: { 4: { tf: 1.0 }, 5: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
          },
          t: {
            a: {
              df: 0,
              docs: {},
              k: {
                df: 0,
                docs: {},
                e: { df: 0, docs: {}, n: { df: 1, docs: { 4: { tf: 1.0 } } } },
              },
            },
            c: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  t: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      e: {
                        a: {
                          df: 0,
                          docs: {},
                          m: { df: 1, docs: { 4: { tf: 1.0 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              s: { df: 0, docs: {}, t: { df: 1, docs: { 3: { tf: 1.0 } } } },
              x: {
                df: 0,
                docs: {},
                t: {
                  df: 1,
                  docs: { 6: { tf: 2.0 } },
                  p: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      o: {
                        df: 0,
                        docs: {},
                        p: {
                          ".": {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              x: {
                                df: 0,
                                docs: {},
                                t: { df: 1, docs: { 6: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                          e: {
                            df: 0,
                            docs: {},
                            r: {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                i: {
                                  df: 1,
                                  docs: { 6: { tf: 1.4142135623730951 } },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              m: { df: 0, docs: {}, e: { df: 1, docs: { 4: { tf: 1.0 } } } },
            },
            r: {
              a: {
                df: 0,
                docs: {},
                i: { df: 0, docs: {}, t: { df: 1, docs: { 4: { tf: 1.0 } } } },
                n: {
                  df: 0,
                  docs: {},
                  s: {
                    df: 0,
                    docs: {},
                    m: {
                      df: 0,
                      docs: {},
                      i: {
                        df: 0,
                        docs: {},
                        s: {
                          df: 0,
                          docs: {},
                          s: { df: 1, docs: { 5: { tf: 1.0 } } },
                        },
                      },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
            y: {
              df: 0,
              docs: {},
              p: {
                df: 0,
                docs: {},
                e: {
                  df: 2,
                  docs: { 5: { tf: 2.449489742783178 }, 6: { tf: 1.0 } },
                },
              },
            },
          },
          u: {
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 1: { tf: 1.0 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            s: {
              df: 6,
              docs: {
                2: { tf: 1.0 },
                3: { tf: 1.0 },
                4: { tf: 2.8284271247461903 },
                5: { tf: 1.4142135623730951 },
                6: { tf: 1.4142135623730951 },
                7: { tf: 1.0 },
              },
            },
          },
          v: {
            a: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                i: {
                  a: {
                    b: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 4: { tf: 1.4142135623730951 } } },
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
            df: 0,
            docs: {},
            e: {
              c: {
                "!": {
                  "[": {
                    d: {
                      a: {
                        df: 0,
                        docs: {},
                        t: {
                          a: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              y: {
                                df: 0,
                                docs: {},
                                p: {
                                  df: 0,
                                  docs: {},
                                  e: {
                                    ":": {
                                      ":": {
                                        df: 0,
                                        docs: {},
                                        s: {
                                          df: 0,
                                          docs: {},
                                          t: {
                                            df: 0,
                                            docs: {},
                                            r: {
                                              df: 1,
                                              docs: { 7: { tf: 1.0 } },
                                            },
                                          },
                                        },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                  },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                s: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    o: {
                      df: 0,
                      docs: {},
                      n: { df: 1, docs: { 4: { tf: 1.0 } } },
                    },
                  },
                },
              },
            },
            i: {
              df: 0,
              docs: {},
              i: {
                ":": {
                  ":": {
                    c: {
                      df: 0,
                      docs: {},
                      h: {
                        a: {
                          df: 0,
                          docs: {},
                          n: {
                            df: 0,
                            docs: {},
                            n: {
                              df: 0,
                              docs: {},
                              e: {
                                df: 0,
                                docs: {},
                                l: { df: 1, docs: { 7: { tf: 1.0 } } },
                              },
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    d: {
                      a: {
                        df: 0,
                        docs: {},
                        t: {
                          a: {
                            df: 0,
                            docs: {},
                            t: {
                              df: 0,
                              docs: {},
                              y: {
                                df: 0,
                                docs: {},
                                p: { df: 1, docs: { 5: { tf: 1.0 } } },
                              },
                            },
                          },
                          df: 0,
                          docs: {},
                        },
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 0,
                    docs: {},
                    p: {
                      df: 0,
                      docs: {},
                      l: {
                        df: 0,
                        docs: {},
                        u: {
                          df: 0,
                          docs: {},
                          g: {
                            df: 0,
                            docs: {},
                            i: {
                              df: 0,
                              docs: {},
                              n: {
                                ":": {
                                  ":": {
                                    df: 0,
                                    docs: {},
                                    p: {
                                      df: 0,
                                      docs: {},
                                      l: {
                                        df: 0,
                                        docs: {},
                                        u: {
                                          df: 0,
                                          docs: {},
                                          g: {
                                            df: 0,
                                            docs: {},
                                            i: {
                                              df: 0,
                                              docs: {},
                                              n: {
                                                c: {
                                                  df: 0,
                                                  docs: {},
                                                  o: {
                                                    df: 0,
                                                    docs: {},
                                                    n: {
                                                      df: 0,
                                                      docs: {},
                                                      f: {
                                                        df: 0,
                                                        docs: {},
                                                        i: {
                                                          df: 0,
                                                          docs: {},
                                                          g: {
                                                            df: 1,
                                                            docs: {
                                                              4: { tf: 1.0 },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                df: 1,
                                                docs: { 4: { tf: 1.0 } },
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                                df: 0,
                                docs: {},
                              },
                            },
                          },
                        },
                      },
                    },
                    t: {
                      df: 0,
                      docs: {},
                      e: {
                        df: 0,
                        docs: {},
                        x: {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            p: {
                              df: 0,
                              docs: {},
                              r: {
                                df: 0,
                                docs: {},
                                o: {
                                  df: 0,
                                  docs: {},
                                  p: {
                                    ":": {
                                      ":": {
                                        df: 0,
                                        docs: {},
                                        p: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 0,
                                            docs: {},
                                            o: {
                                              df: 0,
                                              docs: {},
                                              p: {
                                                df: 0,
                                                docs: {},
                                                e: {
                                                  df: 0,
                                                  docs: {},
                                                  r: {
                                                    df: 0,
                                                    docs: {},
                                                    t: {
                                                      df: 0,
                                                      docs: {},
                                                      y: {
                                                        df: 0,
                                                        docs: {},
                                                        t: {
                                                          df: 0,
                                                          docs: {},
                                                          y: {
                                                            df: 0,
                                                            docs: {},
                                                            p: {
                                                              df: 0,
                                                              docs: {},
                                                              e: {
                                                                b: {
                                                                  df: 0,
                                                                  docs: {},
                                                                  u: {
                                                                    df: 0,
                                                                    docs: {},
                                                                    i: {
                                                                      df: 0,
                                                                      docs: {},
                                                                      l: {
                                                                        d: {
                                                                          df: 1,
                                                                          docs: {
                                                                            6: {
                                                                              tf: 1.0,
                                                                            },
                                                                          },
                                                                        },
                                                                        df: 0,
                                                                        docs: {},
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                                df: 0,
                                                                docs: {},
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      df: 0,
                                      docs: {},
                                    },
                                    df: 1,
                                    docs: { 6: { tf: 1.0 } },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  df: 0,
                  docs: {},
                },
                df: 2,
                docs: { 1: { tf: 1.0 }, 4: { tf: 1.0 } },
              },
              m: {
                _: {
                  df: 0,
                  docs: {},
                  f: {
                    df: 0,
                    docs: {},
                    l: {
                      df: 0,
                      docs: {},
                      o: {
                        a: {
                          df: 0,
                          docs: {},
                          t: {
                            ".": {
                              df: 0,
                              docs: {},
                              t: {
                                df: 0,
                                docs: {},
                                o: {
                                  _: {
                                    df: 0,
                                    docs: {},
                                    s: {
                                      df: 0,
                                      docs: {},
                                      t: {
                                        df: 0,
                                        docs: {},
                                        r: { df: 1, docs: { 5: { tf: 1.0 } } },
                                      },
                                    },
                                  },
                                  df: 0,
                                  docs: {},
                                },
                              },
                            },
                            df: 1,
                            docs: { 5: { tf: 1.0 } },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                  s: {
                    df: 0,
                    docs: {},
                    t: {
                      df: 0,
                      docs: {},
                      r: {
                        df: 1,
                        docs: { 5: { tf: 1.0 } },
                        i: {
                          df: 0,
                          docs: {},
                          n: {
                            df: 0,
                            docs: {},
                            g: {
                              ".": {
                                df: 0,
                                docs: {},
                                t: {
                                  df: 0,
                                  docs: {},
                                  o: {
                                    _: {
                                      df: 0,
                                      docs: {},
                                      s: {
                                        df: 0,
                                        docs: {},
                                        t: {
                                          df: 0,
                                          docs: {},
                                          r: {
                                            df: 1,
                                            docs: { 5: { tf: 1.0 } },
                                          },
                                        },
                                      },
                                    },
                                    df: 0,
                                    docs: {},
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                      },
                    },
                  },
                },
                df: 4,
                docs: {
                  4: { tf: 2.449489742783178 },
                  5: { tf: 1.7320508075688772 },
                  6: { tf: 1.4142135623730951 },
                  7: { tf: 1.4142135623730951 },
                },
              },
            },
          },
          w: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              r: {
                df: 0,
                docs: {},
                k: {
                  df: 3,
                  docs: { 5: { tf: 1.0 }, 6: { tf: 1.0 }, 7: { tf: 1.0 } },
                },
                l: {
                  d: {
                    "!": {
                      '"': {
                        ".": {
                          df: 0,
                          docs: {},
                          t: {
                            df: 0,
                            docs: {},
                            o: {
                              _: {
                                df: 0,
                                docs: {},
                                s: {
                                  df: 0,
                                  docs: {},
                                  t: {
                                    df: 0,
                                    docs: {},
                                    r: { df: 1, docs: { 5: { tf: 1.0 } } },
                                  },
                                },
                              },
                              df: 0,
                              docs: {},
                            },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                      df: 0,
                      docs: {},
                    },
                    df: 1,
                    docs: { 5: { tf: 1.0 } },
                  },
                  df: 0,
                  docs: {},
                },
              },
            },
          },
          y: {
            df: 0,
            docs: {},
            o: {
              df: 0,
              docs: {},
              u: {
                "'": {
                  d: { df: 1, docs: { 4: { tf: 1.0 } } },
                  df: 0,
                  docs: {},
                },
                df: 0,
                docs: {},
              },
            },
          },
        },
      },
      title: {
        root: {
          c: {
            df: 0,
            docs: {},
            h: {
              a: {
                df: 0,
                docs: {},
                n: {
                  df: 0,
                  docs: {},
                  n: {
                    df: 0,
                    docs: {},
                    e: {
                      df: 0,
                      docs: {},
                      l: { df: 1, docs: { 7: { tf: 1.0 } } },
                    },
                  },
                },
              },
              df: 0,
              docs: {},
            },
          },
          d: {
            a: {
              df: 0,
              docs: {},
              t: { a: { df: 1, docs: { 5: { tf: 1.0 } } }, df: 0, docs: {} },
            },
            df: 0,
            docs: {},
          },
          df: 0,
          docs: {},
          e: {
            df: 0,
            docs: {},
            x: {
              a: {
                df: 0,
                docs: {},
                m: {
                  df: 0,
                  docs: {},
                  p: {
                    df: 0,
                    docs: {},
                    l: { df: 1, docs: { 8: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
            },
          },
          f: {
            df: 0,
            docs: {},
            e: {
              a: {
                df: 0,
                docs: {},
                t: {
                  df: 0,
                  docs: {},
                  u: {
                    df: 0,
                    docs: {},
                    r: { df: 1, docs: { 2: { tf: 1.0 } } },
                  },
                },
              },
              df: 0,
              docs: {},
            },
          },
          i: {
            df: 0,
            docs: {},
            n: {
              df: 0,
              docs: {},
              s: {
                df: 0,
                docs: {},
                t: {
                  a: {
                    df: 0,
                    docs: {},
                    l: { df: 1, docs: { 1: { tf: 1.0 } } },
                  },
                  df: 0,
                  docs: {},
                },
              },
              t: {
                df: 0,
                docs: {},
                r: {
                  df: 0,
                  docs: {},
                  o: {
                    d: {
                      df: 0,
                      docs: {},
                      u: {
                        c: {
                          df: 0,
                          docs: {},
                          t: { df: 1, docs: { 0: { tf: 1.0 } } },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                    df: 0,
                    docs: {},
                  },
                },
              },
            },
          },
          p: {
            df: 0,
            docs: {},
            l: {
              df: 0,
              docs: {},
              u: {
                df: 0,
                docs: {},
                g: {
                  df: 0,
                  docs: {},
                  i: {
                    df: 0,
                    docs: {},
                    n: { df: 2, docs: { 4: { tf: 1.0 }, 9: { tf: 1.0 } } },
                  },
                },
              },
            },
            r: {
              df: 0,
              docs: {},
              o: {
                df: 0,
                docs: {},
                p: {
                  df: 0,
                  docs: {},
                  e: {
                    df: 0,
                    docs: {},
                    r: {
                      df: 0,
                      docs: {},
                      t: {
                        df: 0,
                        docs: {},
                        i: { df: 1, docs: { 6: { tf: 1.0 } } },
                      },
                    },
                  },
                },
              },
            },
          },
          q: {
            df: 0,
            docs: {},
            u: {
              df: 0,
              docs: {},
              i: {
                c: {
                  df: 0,
                  docs: {},
                  k: {
                    df: 0,
                    docs: {},
                    s: {
                      df: 0,
                      docs: {},
                      t: {
                        a: {
                          df: 0,
                          docs: {},
                          r: {
                            df: 0,
                            docs: {},
                            t: { df: 1, docs: { 3: { tf: 1.0 } } },
                          },
                        },
                        df: 0,
                        docs: {},
                      },
                    },
                  },
                },
                df: 0,
                docs: {},
              },
            },
          },
          s: {
            df: 0,
            docs: {},
            i: {
              df: 0,
              docs: {},
              m: {
                df: 0,
                docs: {},
                p: { df: 0, docs: {}, l: { df: 1, docs: { 9: { tf: 1.0 } } } },
              },
            },
          },
          t: {
            df: 0,
            docs: {},
            e: {
              df: 0,
              docs: {},
              x: { df: 0, docs: {}, t: { df: 1, docs: { 6: { tf: 1.0 } } } },
            },
            y: {
              df: 0,
              docs: {},
              p: { df: 0, docs: {}, e: { df: 1, docs: { 5: { tf: 1.0 } } } },
            },
          },
        },
      },
    },
    lang: "English",
    pipeline: ["trimmer", "stopWordFilter", "stemmer"],
    ref: "id",
    version: "0.9.5",
  },
  results_options: { limit_results: 30, teaser_word_count: 30 },
  search_options: {
    bool: "OR",
    expand: true,
    fields: {
      body: { boost: 1 },
      breadcrumbs: { boost: 1 },
      title: { boost: 2 },
    },
  },
});
