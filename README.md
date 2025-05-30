# Lessons

Full stack application development lessons for beginners.

## Development

Run `bin/dev` to start server on `localhost:3000`.

## Writing Lessons

Lessons can be written in markdown or html.

### Lesson Header

Lessons should include YAML frontmatter with the following structure:

```html
---
layout: default
title: Lesson Title
subheading: Lesson description
repo_url: https://github.com/username/repo  # Optional - for loading from GitHub
table_of_contents: true  # Optional - defaults to true
---
```

### Interactive Code Blocks

We leverage [Kramdown](https://kramdown.gettalong.org/) syntax for rendering interactive code blocks.

Interactive code blocks use the following format:

```html
<div>Hello world</div>
```
{: .language-html .live-code }

You can add [inline attributes](https://kramdown.gettalong.org/syntax.html#inline-attribute-lists) to make codeblocks interactive.

- `.live-code` renders the [monaco code editor](https://github.com/microsoft/monaco-editor)
- `.language-*` tells the live code editor which language to use
