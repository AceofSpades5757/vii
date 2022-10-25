Project use go-task task/build system.

Can install using `go install github.com/go-task/task/v3/cmd/task@latest`.

# Testing

`go test`

Unittests are in the same file, next to the units they are testing (bottom). Integration tests are in `/tests/`.

# Book

Uses `mdbook` CLI.

`cargo install mdbook`

Serve (for dev): `task book`

Build (for publication): `task book-build`
