# technique-notes

**Details are important.**  In the short term, just grasping your familiar
 programming language to start
your project. With the accumulation of long-term experience of different projects,
you can choose the best suitable tools for your project if you know the details. Furthermore, innovation
is based on the understanding the advantage and disadvantage of the tools.

This git repository is used to record technical skills I used in my projects.
Some skills are implemented by myself, some skills are implemented by others from
internet.

HTML files are used to present these technical skills. However, Python/Django
Template Language (DTL) is used to generate these HTML files. By means of the 
inheritance and block override in DTL, it is easier to DIRECTLY include a HTML
file into another HTML file. Moreover, a running server is not needed to generate
these HTML files, a simple python script (gen.py) is used.

Django framework must be installed first:

$ python3 -m pip install django

After install Django, using the following shell command to generate HTML file:

$ python3 gen.py src/templates/index.html > src/index.html
