## Access the Repo Locally
Open VS Code -> select File -> Open Folder -> C:/webs/seanart/

## Get the latest code
Select from menu -> Terminal -> New Terminal -> enter command: `git pull`

Note: If it doesn't work in one terminal you can use the drop down arrow to select a different type. I recommend using Bash.

## Update Content
On left side of VS Code click the page Icon (File Explorer). Upload your photos under `/static/images`.
Next include the filename and path into the respective content file ie:`family-portraits.md`
Refer to existing examples.

In the terminal, run these commands:

`hugo` and then use `hugo serve -D` to run a local server and see changes in real time.

## Sending Updates to Remote (github)
In the Terminal, enter these commands:
`hugo`
`git add .`
`git commit -m "your commit message(short)"`
`git push`

If you run into an error on pushing, just google the exact error and enter the command you find on StackOverflow.

