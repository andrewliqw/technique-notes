# Andrew Li's technique notes

This git repository is used to record technical skills I used in my projects.
Some skills are implemented by myself, some skills are implemented by others from
internet.

**Details are important.**  In the short term, just grasping your familiar
 programming language to start
your project. With the accumulation of long-term experience of different projects,
you can choose the best suitable tools for your project if you know the details. Furthermore, innovation
is based on the understanding the advantage and disadvantage of the tools.

## How to view these technique notes

Note: You have to install 'docker' first to view these technique notes.

```
$ docker pull andrewliqw/technique-notes

$ docker run -p8080:8080 --rm andrewliqw/technique-notes
```

Then, go to your favorate browser, enter http://localhost:8080/.

If you want to generate your own docker image, here is the commands:

```
$ git clone https://github.com/andrewliqw/technique-notes.git
$ cd technique-notes
$ npm install
$ bash ./docker_image.sh
```

```
src
  |--tempaltes
       |--bootstrap
       |--css
       |--docker
       |--javascript
       |--jquery
       |--macos
       |--nodejs
       |--programming_paradigm
       |--vscode
```

HTML files are used to present these technical skills. However, Python/Django
Template Language (DTL) is used to generate these HTML files. By means of the 
inheritance and block override in DTL, it is easier to DIRECTLY include a HTML
file into another HTML file. Moreover, a running server is not needed to generate
these HTML files, a simple python script (gen.py) is used.

Django framework must be installed first:

$ python3 -m pip install django

After install Django, using the following shell command to generate HTML file:

$ python3 gen.py src/templates/index_t.html > src/index.html

Note: index.html is generated just for convenience, **src/templates** directory
is the main source code.
