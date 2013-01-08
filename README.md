bash-script
===========

Mixed bash scripts. These do not come with any kind of disclaimer, though I'd like to hear if they're useful and if you've sorted out any of the various bugs that are there. They're my own personal collection, for tasks that I have use of.

## Installation (May be Ubuntu only)#
1. Ensure that your home has the `bin`-folder in it's $PATH
2. Copy the bash script(s) wanted over to that folder
3. `$ chmod 777 <name of script>` to make it executable

## Specific scripts #

### gedit-dir #
Used to open all files (non-recursively) in a specified folder in gedit. Called using `gedit-dir <glob>`, for instance `/home/melindrea/*`

### yeoman-qs & yeoman-build #
Requires yeoman (duh), as well as the repository [Gitignore](https://github.com/github/gitignore) stored in a Dropbox (yeoman-qs). The build assumes a few things, in particular that there is a js task which in my case concats the development scripts, as I don't like CoffeeScript.

Yeoman-qs creates a quickstart yeoman project and needs the argument of a folder to be created as the root of the project, ex `yeoman-qs /home/melindrea/projects/my-project`. It also creates a .gitignore file in that folder, creates a git repository with the initial commit and changes the owner to www-data, as well as adding writing rights to the group.

Yeoman-build runs a few commands before `yeoman build` and then cleans up files that shouldn't be in the dist, like Sass-files and the components folder.
