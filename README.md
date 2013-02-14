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
Requires yeoman (duh), as well as the repository [Gitignore](https://github.com/github/gitignore) stored in a Dropbox (yeoman-qs). The build assumes a few things, in particular that there is a js task which in my case concats the development scripts, as I don't like CoffeeScript. Yeoman-qs should eventually be replaced with a generator.

Yeoman-qs creates a quickstart yeoman project and needs the argument of a folder to be created as the root of the project at the minimum, ex `yeoman-qs /home/melindrea/projects/my-project`. It also creates a .gitignore file in that folder and creates a git repository with the initial commit, as well as changing around the jquery and modernizr folders (moving scripts/vendor => vendor/js)

Yeoman-build runs a few commands before `yeoman build` and then cleans up files that shouldn't be in the dist, like Sass-files and the components folder.

### www-permissions #
Sets the permissions (recursively) of the particular folder to www-data:www-data and sets the rights for the group to write. 

### gedit-plugin #
Copies a gedit plugin using the standard format from a specified folder to the gedit/plugins folder under $home

### csscomb & update-csscomb #
Runs [CSScomb](https://github.com/miripiruni/CSScomb) and updates it (duh)

### mk-package-json #
Help script for yeoman-qs, overwrites the default package.json with one that has a bit more information. Needs a name, has optional arguments of author and path.

### find-string #
Wrapper around `grep -Hril "<string-to-find>"` either in the current directory, or in a directory sent through the second parameter

### normalize #
Goes into the ~/Dropbox/repositories/normalize.css repository and updates it, and then copies the normalize.css file into <optional path>/_normalize.scss to prepare it for being used in a Sassy project. If the <optional path> doesn't exist, it doesn't make it, though.

# License #
Copyright (c) 2013, Marie Hogebrandt <iam@mariehogebrandt.se>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

