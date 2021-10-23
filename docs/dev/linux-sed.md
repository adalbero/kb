# Linux sed command
`#linux #sed`

### Extract range of lines from a file
```bash
sed -n '16224,16482 p' orig-data-file > new-file
```
- `-n` - supress input echo
- `p` - print