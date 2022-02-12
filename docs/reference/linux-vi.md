# Linux - `vi` command

> Tags `#linux #bash #shell #vi #vim`

## Shortcuts

### Cursor navigation

| Shortcut               | Action                                          |
| ---------------------- | ----------------------------------------------- |
| **_Character_**        |                                                 |
| `h` or `←`             | Cursor left                                     |
| `j` or `↓`             | Cursor down                                     |
| `k` or `↑`             | Cursor up                                       |
| `l` or `→`             | Cursor right                                    |
| **_Text_**             |                                                 |
| `w`, `b`, `e`          | Next/Previous/End word                          |
| `W`, `B`, `E`          | Next/Previous/End blank delimited word          |
| **_Line_**             |                                                 |
| `0`, `$`               | Start/End of line                               |
| `^`                    | First char of line                              |
| `+`, `-`               | First char of next/previous line                |
| `H`                    | Move to top of screen                           |
| `M`                    | Move to middle of screen                        |
| `L`                    | Move to bottom of screen                        |
| n`H`, n`L`             | *n*th line from top/bottom of screen            |
| **_Scrolling_**        |                                                 |
| `Ctrl-F`, `Ctrl-B`     | Scroll forward/backworkd one screen             |
| `Ctrl-D`, `Ctrl-U`     | Scroll forward/backworkd half screen            |
| `Ctrl-E`, `Ctrl-Y`     | Scroll forward/backworkd one line               |
| `z`(enter), `z.`, `z-` | Scroll current line to top/middle/bottom        |
| **_Search_**           |                                                 |
| `/`pattern             | Search forward for pattern                      |
| `?`pattern             | Search backwoards for pattern                   |
| `n`, `N`               | Go to next/previous match                       |
| `f`x, `F`x             | Search current-line forward/backword for char x |
| `;`, `,`               | Repeat current-line search forward/backword     |
| `:set ic / noic`       | Set case-sensitive on/off                       |
| **_Line Number_**      |                                                 |
| `Ctrl-G`               | Display current line number                     |
| _n_`G`, `:`_n_         | Move to *n*th line                              |
| `1G` or `gg`           | Move to first line of file                      |
| `G`                    | Move to last line of file                       |
| **_Marking Position_** |                                                 |
| `m`x                   | Mark current position as x                      |
| `` ` ``x               | Move cursor to x                                |
| ` `` `                 | Return to previous mark                         |
| `'`x                   | Move to line containing mark x                  |
| `''`                   | Return to line of previous mark                 |

### Editing commands

| Shortcut             | Action                                                                          |
| -------------------- | ------------------------------------------------------------------------------- |
| **_Insert_**         |                                                                                 |
| `i`, `a`             | Insert text before/after cursor                                                 |
| `I`, `A`             | Insert text at begining/end of current line                                     |
| `o`, `O`             | Insert text below/above current line                                            |
| **_Change_**         |                                                                                 |
| `r`                  | Replace with the next typed char                                                |
| `~`                  | Change char between uppercase/lowercase                                         |
| `c`_m_               | Change text block defined by movement command _m_<br>Ex: `cw` changes next word |
| `cc`                 | Change current line                                                             |
| `C`                  | Change to end of line                                                           |
| `R`                  | Type over characters                                                            |
| `s`                  | Delete character and continue typeing                                           |
| `S`                  | Delete current line and continue typeing                                        |
| **_Delete, Move_**   |                                                                                 |
| `x`                  | Delete char (Del)                                                               |
| `X`                  | Delete back (Backspace)                                                         |
| `d`_m_               | Delete text block defined by movement command _m_<br>Ex: `dw` deletes next word |
| `dd`                 | Delete current line                                                             |
| `D`                  | Delete to end of line                                                           |
| `p`, `P`             | Put deleted text before/after cursor                                            |
| **_Yank (copy)_**    |                                                                                 |
| `y`_m_               | Copy text block defined by movement command _m_<br>Ex: `yw` yanks next word     |
| `yy`, `Y`            | Copy current line                                                               |
| `"`_a_`yy`           | Copy current line into buffer named _a_                                         |
| `p`, `P`             | Put yanked text before/after cursor                                             |
| `"`_a_`P`            | Put text from buffer _a_ after cursor                                           |
| **_Other Commands_** |                                                                                 |
| `.`                  | Repeat last edit command                                                        |
| `u`                  | Undo last edit                                                                  |
| `U`                  | Undo changes to current line                                                    |
| `J`                  | Join two lines                                                                  |
| `Ctrl-L`, `Ctrl-R`   | Redraw screen                                                                   |

### File commands

| Shortcut          | Action                          |
| ----------------- | ------------------------------- |
| `ZZ`, `:x`, `:wq` | Save file and quit              |
| `:q`              | Quit                            |
| `:q!`             | Quit, discarding any changes    |
| `:e`              | reload file                     |
| `:e!`             | discard changes and reload file |
| `:set autoread`   | enable auto read                |

### Editor commands

| Shortcut                 | Action                  |
| ------------------------ | ----------------------- |
| `:set number / nonumber` | Turn on/off line number |
| `:set wrap / nowrap`     | break line on/off       |

## Reference

> [Vi Editor Cheat Sheet (PDF)](https://www.cse.scu.edu/~yfang/coen11/vi-CheatSheet.pdf)
