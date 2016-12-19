import argparse
import os
import sys

from django.template import Engine, Context

parser = argparse.ArgumentParser(description="Generate html files from templates")
parser.add_argument("template_file",
    metavar="template-file",
    # nargs="+",
    help="template file"
)
parser.add_argument("level",
    type=int,
    help="level of static directory relative to template file"
)
args = parser.parse_args()

if args.level == 0:
    static_url = "."
elif args.level > 0:
    static_url = "../" * args.level
else:
    raise ValueError("level should be >= 0")

context = Context({"STATIC_URL": os.path.join(static_url, "static", "")})

django_engine = Engine(
    # dirs = ["templates"],
    dirs = ["/"],
)

args.template_file = os.path.abspath(args.template_file)

template_instance = django_engine.get_template(args.template_file) 
print(template_instance.render(context))