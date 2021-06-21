# Git Tips & Tricks

`#git #github`

## Reset Password on Windows

```shell
git config --system --unset credential.helper
git config --global --unset credential.helper
git config --global credential.helper manager
```

Then try again `git pull` and `git push`.
