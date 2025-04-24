---
layout: lesson
title: HTML & CSS
subheading: Get your first taste of HTML & CSS coding with our crash course.
---

## Just text

The web is, mostly, a bunch of text.

```html
You can learn about the world at Wikipedia.
```

<!-- {: .repl #one title="It's all text" points="1"} -->

Most of the incredible value of the internet is based in making it easy to distribute and access information, instantaneously and across any distance.

## Not just text — _hyper_ text

```html
You can learn about the world at <a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
```

<!-- {: .repl #two title="Hyper-text!" points="1"} -->

With hyperlinks, we can make it easy for our users to **navigate** from URL to URL. This is what makes plain ol' text into **hyper text** (the H and the T in HTML).

<aside>
  <p>"Hyperlinks" are also known as "links", a.k.a. "anchors", a.k.a. `a` tags.</p>
</aside>

Hypertext documents linked to one another is what makes the Web a web! All web sites and web apps are based on this fundamental idea.

## Anatomy of an HTML element

In the below example, the entire **syntax** (or "grammar") of the HTML language can be seen:

```html
<a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>
```

* `<a>` is called the **opening tag**.
* `</a>` is called the **closing tag**.
* Everything between the opening tag and closing tag is called the **content**.
  * In this case, `Wikipedia`.
* Within the opening tag (but never the closing tag), there might be **attributes**.
  * In this case, there are two attributes:
    * `href="https://www.wikipedia.org/"`
    * `target="_blank"`.
  * Each attribute is comprised of a **name**, then a `=`, then a **value**.
    * In this case, `href` and `target` are the names of the two attributes.
    * `"https://www.wikipedia.org/"` and `"_blank"` are their values, respectively.
    * Values should always be within a pair of quotes (`" "`).
    * We typically don't include spaces around the `=` that connects an attribute's name and value.
  * Within an opening tag, we typically use one space to separate attributes.

Collectively, all of that is called one **element**.

There are more elements that we need to learn about — mainly, `<span>`, `<img>`, and `<form>`. We'll get to those, and a few others, soon.

But all elements have the same structure as the above example — opening tag, closing tag, content, attributes. That's it for the syntax of HTML!

Consider this HTML:

```html
<a href="https://www.google.com/">Link</a>
```

<!-- * Within that example, the `href` and the `"https://www.google.com/"` are known, respectively, as...
* an "element".
  * Not quite. Re-read above.
* an "opening tag" and a "closing tag"; collectively, an "element".
  * Not quite. Re-read above.
* a "name" and a "value"; collectively, an "attribute".
  * Yes!
* an "attribute" and its "content".
  * Close! But, not quite. Re-read above.
{: .choose_best #html_structure title="HTML structure" points="1" answer="3" } -->

## A very special attribute: _style_

There's a very special attribute we can use to change how an element looks — `style`:

```html
You can learn about the world at <a style="color: red" href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
```

<!-- {: .repl #style_1 title="The style attribute" points="1"} -->

By adding the attribute `style="color: red"`, we have changed the color of the link.

Within the value of the `style` attribute, we can write **CSS** (Cascading Style Sheets) — a whole different language with its own syntax, designed specifically for visual styling.

In this CSS:

```
color: red
```

* `color` is called the **property**.
  * CSS offers over 100 properties that you can modify to customize the look and feel of elements. We'll focus on just a handful.
* `red` is the **value**.
  * For a given property, there is usually a set list of valid values that you're allowed to choose from. In this case, we're allowed to use the word `red`. There are also many other ways to specify a color, which we'll look at soon.
* The property must be separated from the value by a colon (`:`).
* Together, this is one **declaration**.

You can have multiple declarations within the same `style` attribute, but you must separate them with a semicolon (`;`):

```html
You can learn about the world at <a style="color: red; font-size: 50px" href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
```

<!-- {: .repl #style_2 title="Multiple declarations" points="1"} -->

As you can see, the `font-size` property is how we can change how big text is. In this example, we're using the `px` unit to indicate that we want the text to be 50 pixels tall. There are many other units to specify dimensions, which we'll look at soon.

<!-- * What is each property and value pair called in CSS?
* declaration
  * That's right!
* any
  * Not quite.
{: .free_text #declaration title="CSS property: value" points="1" answer="1" } -->

## Adding structure with _span_

What if we want to change the look of some of the text that's _not_ within an `<a>` tag? What would we add the `style` attribute to? For example, what if we wanted the text "learn about the world" to be italic?

In order to give ourselves a hook to hang CSS on, we can wrap the content in a `<span>` element:

```html
You can <span>learn about the world</span> at <a style="color: red; font-size: 50px" href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
```

<!-- {: .repl #span_1 title="The span element" points="1"} -->

At first, it looks like nothing changed. And it didn't. But now that we have an element, we can add a `style` attribute to it:

```html
You can <span style="font-style: italic">learn about the world</span> at <a style="color: red; font-size: 50px" href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
```

<!-- {: .repl #span_2 title="Styled span" points="1"} -->

As you can see, the `font-style` property is how we choose between normal and italic text.

Unlike the special `<a>` element, which is purposely built for navigation, `<span>` elements are not clickable. You can try adding an `href=""` attribute to it, but try all you might, it won't take you anywhere when you click on it.

Instead, `<span>` is used to add _structure_ to our content so that we can then style and position bits of it as needed.

<!-- * `span` and `a` are both...
* HTML attributes.
  * Not quite. Re-read above.
* CSS declarations.
  * Not quite. Re-read above.
* HTML values.
  * Not quite. Re-read above.
* HTML elements.
  * Yes!
{: .choose_best #span_and_a title="<span> and <a>" points="1" answer="4" } -->

## The _img_ element

There's a very special element that allows us to embed images right into our documents: `<img>`.

First, the image we want to embed needs to already be on the internet, and have its own URL. We'll talk about how to do that soon, but for now we can use this image that's hosted by Wikipedia at the following URL:

[https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png](https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png)

Next, given a URL like this, we can use it as the value for the `src` attribute of an `<img>` element to embed it in our page:

```html
You can <span>learn about the world</span> at <a style="color: red; font-size: 50px" href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/263px-Wikipedia-logo-v2.svg.png">
```

<!-- {: .repl #first_image title="First image" points="1"} -->

## The HTML family tree

Elements can contain other elements:

```html
<span style="color: red">This is the parent element, and <a style="font-weight: bold">this is the child element.</a> Over here I'm back in the parent element.</span>
```

<!-- {: .repl #parent_child title="Family tree" points="1"} -->

* The outer element is known as the "parent element". The inner element is known as the "child element".
* One parent element can have multiple children.
  * If so, the other children of your parent are called your sibling elements (as in a human family tree).
* Your children and all of their children, and children's children, etc, are called your "descendant elements".
* Your parent, parent's parent, etc, are called your "ancestor elements".

---

<!-- * In HTML speak, "descendants" of element A are...
* All of the elements nested within element A, regardless of how deep.
  * Yes!
* The elements nested one level deep inside element A.
  * Not quite. Re-read above.
* All of the HTML elements on a page.
  * Not quite. Re-read above.
* The outermost HTML element.
  * Not quite. Re-read above.
{: .choose_best #descendants_are title="Descendants are..." points="1" answer="1" } -->

## All whitespace collapses to a single space

```html
You        can

      learn                               about the

world at

<a href="https://www.wikipedia.org/" target="_blank">Wikipedia</a>.
```

<!-- {: .repl #whitespace title="HTML whitespace" points="1"} -->

Notice that, despite all the spaces and new lines I added to the code, the code is **interpreted** and rendered by the browser the same as the previous examples — the whole sentence is on the same line.

This means that we can't use whitespace and new lines to position content around the page where we want it, the way that we might in a word processor like Microsoft Word.

<aside>
Tools where the input you create and the output the tool renders are supposed to be the same are called What You See Is What You Get, or WYSIWYG, pronounced "wizeewig". Word processors and Photoshop are examples of WYSIWYG tools.
</aside>

So, then: how can we position content around the page, rather than all on the same line? For example, what if I wanted the two spans below to be on their own lines?

```html
<span>You can learn about the world at Wikipedia.</span>

<span>Another good place to learn is Khan Academy.</span>
```

<!-- {: .repl #wall_of_text title="Wall of text" points="1"} -->

Right now, they run into each other and form a wall of text. What's the solution?

## Layout systems

To position content wherever we wish, we need to choose and use one of the many layout systems that HTML provides:

* Flow
* Flexbox
* Positioned, Grid, and a few others; but we're going to focus on the above two for now.

## In the beginning, there was Flow

The very first layout system offered by HTML was called **flow layout**. For a long time, it was the _only_ layout system.

In flow layout, the browser lays out elements as if it was typesetting a paper book or a magazine.

<aside>
It makes sense that flow was the first and only layout for a long time, since the earliest use of the web was for scientists to share research papers.
</aside>

Words, images, and other **inline** items are placed side by side horizontally.

Paragraphs, headings, and other **blocks** are placed above and below one another vertically.

<img alt="typesetting" class="img-fluid" src="https://res.cloudinary.com/dmxgp9oq2/image/upload/v1687373236/typesetting_hfhnil.gif">

So: in flow layout, if we don't want all of our content to be on the same line, we need to create some elements that act as **block** elements. By default, `<span>`, `<a>`, and `<img>` elements all act as **inline** elements.

How can we make an element act as a block instead of inline? With the `display: block` CSS declaration:

```html
<span style="display: block">You can learn about the world at Wikipedia.</span>

<span style="display: block">Another good place to learn is Khan Academy.</span>
```

<!-- {: .repl #display_block title="display: block" points="1"} -->

Voila! The two spans are now blocks, so they take up the full width of the page, and are stacked vertically on top of one another.

## The _div_ element

We're going to need a _lot_ of block level elements. It would be a pain to have to add `style="display: block"` to `<span>`s over and over and over every time we wanted a block element; so, HTML provides a shortcut — the `<div>` element:

```html
<div>You can learn about the world at Wikipedia.</div>

<div>Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #first_div title="First div" points="1"} -->

A `<div>` is just a `<span>` with `display: block` already set. We'll end up using `<div>`s even more than `<span>`s to add structure to our HTML documents, because in the modern web apps we need a _lot_ of blocks.

Phew, that's going to save us a lot of typing!

<!-- * Select all that are true:
* Flow is an HTML element.
  * Not quite.
* Flow is a layout system.
  * Yes!
* Inline elements are placed side by side horizontally, and blocks are placed one below the other vertically.
  * Yes!
* Inline elements are placed one below another vertically, and blocks are placed side by side horizontally.
  * Not quite.
* By default, "span" acts as a block element
  * Not quite.
* A `div` is essentially just a `span` with the attribute `style="display: block"`
  * Yes!
{: .choose_all #flow_quiz title="Flow quiz" points="3" answer="[2,3,6]" } -->

## Drawing borders around elements

A very handy set of CSS properties lets us draw borders around elements. Borders are essential for almost every design, but they're also really nice when learning & debugging, because it makes it easier to see where each element is and how much space it is taking up.

First, `border-style`:

```html
<div style="border-style: dotted;">You can learn about the world at Wikipedia.</div>

<div style="border-style: dotted;">Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #border_style title="border-style" points="1"} -->

You can also try the values `solid`, `dashed`, or `double`. (The default value of `border-style` for an element is `none`.)

The default color for borders is whatever `color` the text of that element is set to. We can customize that with the `border-color` property:

```html
<div style="border-style: dotted; border-color: blue;">You can learn about the world at Wikipedia.</div>

<div style="border-style: dotted; border-color: blue;">Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #border_color title="border-color" points="1"} -->

The default width of a border is 1px. We can customize that with the `border-width` property:

```html
<div style="border-style: dotted; border-color: blue; border-width: 10px">You can learn about the world at Wikipedia.</div>

<div style="border-style: dotted; border-color: blue; border-width: 10px">Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #border_width title="border-width" points="1"} -->

There's a handy shortcut for specifying style, color, and width all at once — the `border` property:

```html
<div style="border: dotted blue 10px">You can learn about the world at Wikipedia.</div>

<div style="border: dotted blue 10px">Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #border_shortcut title="border shortcut" points="1"} -->

If you want to, you can set the border for each side individually, with the `border-top`, `border-right`, `border-bottom`, and `border-left` properties:

```html
<div style="border-top: solid blue 10px; border-right: solid red 10px; border-bottom: solid green 10px; border-left: none">You can learn about the world at Wikipedia.</div>
```

<!-- {: .repl #border_sides title="border sides" points="1"} -->

### Rounding corners with _border-radius_

You can round the corners of an element using the `border-radius` property:

```html
<div style="border: solid blue 10px; border-radius: 20px">You can learn about the world at Wikipedia.</div>
```

<!-- {: .repl #border_radius title="border radius" points="1"} -->

## _text-align_

We can control the alignment of text within a parent with the `text-align` property:

```html
<div style="border: thin red solid; text-align: center">You can learn about the world at Wikipedia.</div>

<div style="border: thin red solid; text-align: right">Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #text-align title="text-align" points="1"} -->

## The box model

For elements that are `display: block`, we can set a few useful properties:

* `width`: How much space we want the content of the element to take up.
* `padding`: How much space we want _outside_ the content of the element, but _inside_ the border.
* `border`: How much space we want the border to take up.
* `margin`: How much space we want _outside_ the border of the element (between it and its neighbors).

![](https://res.cloudinary.com/dmxgp9oq2/image/upload/v1687385113/Screen_Shot_2023-06-21_at_5.05.02_PM_frg6ku.png)

For example:

```html
<div style="width: 200px; padding: 10px; border: solid red 20px; margin: 30px">You can learn about the world at Wikipedia.</div>

<div style="width: 200px; padding: 30px; border: solid blue 10px; margin: 20px">Another good place to learn is Khan Academy.</div>
```

<!-- {: .repl #box_model title="Box model" points="1"} -->

You can also individually set `padding-top`, `padding-bottom`, `padding-left`, `padding-right`, `margin-top`, `margin-bottom`, `margin-left`, and `margin-right`.

<!-- * In the box model, the "margin" is the...
* space the content takes up.
  * Not quite. Re-read above.
* space outside the border.
  * Yes!
* space outside the content but inside the border.
  * Not quite. Re-read above.
{: .choose_best #margin_is title="margin is..." points="1" answer="2" } -->

## CSS style rules

We're often going to want to apply the same set of styles to multiple elements in our HTML document; sometimes to _hundreds_ of elements. It's a big pain to have to repeat the same, long `style="..."` attribute on lots of elements.

CSS provides a better way: **style rules**. First, we need a `<style>` element in our document. Then, within that element, we can write style rules. For example:

```html
<style>
  /* div {
    width: 200px;
    padding: 20px;
    border: solid red 5px;
    margin: 30px;
  }  */
</style>

<div>You can learn about the world at Wikipedia.</div>

<div>Another good place to learn is Khan Academy.</div>

<span style="display: block">I'm a span, unlike the above two blocks, which are divs.</span>
```

<!-- {: .repl #style_element title="style element" points="1"} -->

In the style rule:

```css
/* div {
  width: 200px;
  padding: 20px;
  border: solid red 5px;
  margin: 30px;
}  */
```

* `div` is called the **selector**.
  * This particular selector is saying to target all of the `<div>` elements in the document. This is why the border is not being applied to the third block in the document; it's a `<span>`, not a `<div>`.
* After the selector is a set of curly brackets (`{ }`).
* Within the curly brackets, we can have a set of declarations, separated by semicolons; just as we could within a `style=""` attribute.
* Everything within the `{ }` is called the **declaration block**.
* The whole thing all together is called a **style rule**.

Nice! Now we can apply a set of declarations to hundreds or thousands of elements easily!

<!-- * Within the style rule above, what is the `div` part called?
* selector
  * That's right!
* declaration
  * Not quite.
* value
  * Not quite.
{: .choose_best #css_selector title="div within style" points="1" answer="1" } -->

<!-- * Which elements will the style rule above apply to?
* It selects the first `div` element in the entire HTML document.
  * Not quite. Re-read above.
* It selects the first `div` element in the HTML document that comes _after_ the style rule.
  * Not quite. Re-read above.
* It selects all of the `div` elements that come _after_ the style rule.
  * Is there a better answer here?
* It selects all of the `div` elements in the entire HTML document.
  * Yes!
{: .choose_best #div_selector_does title="The div does..." points="1" answer="4" } -->

## CSS selectors

The two main types of selectors we're going to focus on for now are **tag-type** selectors and **class-level** selectors.

In the same example, what if we wanted to make text in the second `div` red, but leave the first `div` alone?

```html
<style>
  /* div {
    width: 200px;
    padding: 20px;
    border: solid red 5px;
    margin: 30px;
  }  */
</style>

<div>You can learn about the world at Wikipedia.</div>

<div>Another good place to learn is Khan Academy.</div>

<span style="display: block">I'm a span, unlike the above two blocks, which are divs.</span>
```

Since `div` is a tag-type selector, if we add `color: red` to the declaration block, it will apply to _all_ `<div>` elements in the document:

```html
<style>
  /* div {
    width: 200px;
    padding: 20px;
    border: solid red 5px;
    margin: 30px;

    color: red;
  }  */
</style>

<div>You can learn about the world at Wikipedia.</div>

<div>Another good place to learn is Khan Academy.</div>

<span style="display: block">I'm a span, unlike the above two blocks, which are divs.</span>
```

<!-- {: .repl #tag_selector_too_broad title="Tag selector too broad" points="1"} -->

We could achieve the more precise targeting we want by dropping back down to an inline `style=""` attribute:

```html
<style>
  /* div {
    width: 200px;
    padding: 20px;
    border: solid red 5px;
    margin: 30px;
  }  */
</style>

<div>You can learn about the world at Wikipedia.</div>

<div style="color: red">Another good place to learn is Khan Academy.</div>

<span style="display: block">I'm a span, unlike the above two blocks, which are divs.</span>
```

<!-- {: .repl #inline_style title="Add inline style" points="1"} -->

This does what we want, but we've lost the nice ability to affect hundreds or thousands of elements at once with a style rule.

What's the solution? A **class-level selector**:

```html
<style>
  /* div {
    width: 200px;
    padding: 20px;
    border: solid red 5px;
    margin: 30px;
  }
 
  .danger {
    color: red
  } */
</style>

<div>You can learn about the world at Wikipedia.</div>

<div class="danger">Another good place to learn is Khan Academy.</div>

<span class="danger" style="display: block">I'm a span, unlike the above two blocks, which are divs.</span>
```

<!-- {: .repl #class_selector title="Class selector" points="1"} -->

In the above example:

* `.danger` is a class-level selector because we started it with a `.`
* To any element we want to apply the style rule to, we must add a `class="danger"` attribute.
  * Notice there's no `.` when _applying_ a class, only when writing the selector.
* We can now specifically target individual `<div>`s rather than styling them all at once. We can also use the class for other types of elements, like the `<span>` at the bottom.

For 99% of our CSS work, we will be defining class-level style rules and then applying them to our HTML elements using the `class=""` attribute; rather than using inline `style=""` attributes, or tag-type selectors.

<!-- * Select all that are true:
* A single tag selector could apply to all `span` elements.
  * Yes!
* We define classes by writing `style=""` inside an HTML element opening tag.
  * Not quite. We use `class=""`.
* A class selector allows us to target any elements where the `class=""` attribute matches.
  * Yes!
* This is the correct way to add a class to an HTML element: `class=".danger"`
  * Not quite. The `.` only goes in the CSS selector, not in the HTML attribute.
* The same class selector cannot apply to different types of HTML elements.
  * Not quite. Look at the example above.
{: .choose_all #selector_quiz title="Selector quiz" points="2" answer="[1,3]" } -->

## Flexbox layout

As the web matured, people started using it for more than just sharing research papers. It became a platform for stores, photo albums, games, and a million other things — _apps_.

The typesetting-like flow layout system struggled to support all these varied use cases. For example, putting three chunks of text side by side horizontally was not easy in flow mode, which is very much optimized for "inline words, block paragraphs".

So, eventually CSS added a few other layout systems. The one we'll use most while building our apps is called **flexbox**.

As discussed above, the default system that an element uses to position its children is flow. Examine this example:

```html
<style>
  .parent {
    border: dotted blue 1px;
  }

  .child {
    width: 50px;
    padding: 20px;
    border: solid red 5px;
  }
</style>

<div class="parent">
  <div class="child">A</div>

  <div class="child">B</div>

  <div class="child">C</div>
</div>
```

<!-- {: .repl #flexbox_1 title="Flexbox, 1" points="1"} -->

The three inner `div`s have the class `child`, so they have a border, etc. They are still vertically stacked on top of each other even though they are narrow, because they are blocks and the parent element uses flow to lay them out.

If we want to change the parent's layout mode to flexbox, we use the `display: flex` property:

```html
<style>
  .parent {
    border: dotted blue 1px;

    display: flex;
  }

  .child {
    width: 50px;
    padding: 20px;
    border: solid red 5px;
  }
</style>

<div class="parent">
  <div class="child">A</div>

  <div class="child">B</div>

  <div class="child">C</div>
</div>
```

<!-- {: .repl #flexbox_2 title="Flexbox, 2" points="1"} -->

Boom! All of a sudden, within the parent element, we're in a whole new world. Within an element that is `display: flex`, "block" and "inline" don't really mean anything anymore. Those terms are relevant for typesetting, but flexbox is for more dynamic, responsive, app-type layouts.

Importantly, `display: flex` only affects how _immediate children_ are positioned within the parent element. The position of the parent element itself, and anything outside the parent element, is unaffacted by setting `display: flex` on the parent element.

By default, `flex-direction` is `row` (horizontal). You can also set `flex-direction` to be `column`, in which case children will be laid out vertically (similar to block layout). We mostly use flexbox layout when we want to break out of flow layout to achieve horizontal positioning, so for now we'll focus on `row`; but we'll use both directions eventually.

## _justify-content_ and _align-items_

Now that the children element are being laid out with flexbox, we have a few new properties available to us on the parent. Most importantly: `justify-content` and `align-items`.

### _justify-content_

When `flex-direction` is `row`, the `justify-content` property determines how any leftover horizontal space within the parent is used. There are five values we can set:

<!-- source: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ -->
![Values for justify-content property](https://css-tricks.com/wp-content/uploads/2018/10/justify-content.svg)

* `flex-start`: Place the children on the left side of the parent, and any leftover space on the right. (This is the default value.)
* `flex-end`: Place the children on the right side of the parent, and any leftover space on the left.
* `center`: Place the children in the middle of the parent, and any leftover space evenly split across the left and right.
* `space-between`: Split leftover space evenly between the children — no space on the left or right.
* `space-around`: Split leftover space evenly between _and_ to the left and right of the children.

```html
<style>
  .parent {
    border: dotted blue 1px;
    display: flex;

    justify-content: space-between;
  }

  .child {
    width: 50px;
    padding: 20px;
    border: solid red 5px;
  }
</style>

<div class="parent">
  <div class="child">A</div>

  <div class="child">B</div>

  <div class="child">C</div>
</div>
```

<!-- {: .repl #justify-content title="justify-content" points="1"} -->

Try out all five values for `justify-content` in the runnable code block above.

### _align-items_

When `flex-direction` is `row`, the `align-items` property determines how children are placed vertically within the parent. There are five values we can set:

<!-- source: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ -->
![Values for align-items property](https://css-tricks.com/wp-content/uploads/2018/10/align-items.svg)

* `stretch`: Makes children as tall as the parent, so that there is no leftover vertical space. (This is the default value.)
* `center`: Places children in the middle of the parent, and any leftover space evenly split across the top and bottom.
* `flex-start`: Place the children at the top of the parent, and any leftover space on the bottom.
* `flex-end`: Place the children at the bottom of the parent, and any leftover space on the top.
* `baseline`: Place the children such that the bottom of the text within them is lined up along the center of the parent, regardless of their `font-size`. Useful for things like navbars.

```html
<style>
  .parent {
    border: dotted blue 1px;
    display: flex;
    justify-content: space-between;

    height: 250px;
    align-items: flex-end;
  }

  .child {
    width: 50px;
    padding: 20px;
    border: solid red 5px;
  }
</style>

<div class="parent">
  <div class="child">A</div>

  <div class="child">B</div>

  <div class="child">C</div>
</div>
```

<!-- {: .repl #align-items title="align-items" points="1"} -->

Try out the values for `align-items` in the runnable code block above.

## Flexbox froggy

That's all you need to know about flexbox for the moment, but if and when you run into a situation where you want to know how to do more, here is an interactive game you can play through to become a flexbox expert:

[Flexbox Froggy](https://flexboxfroggy.com/)

You don't have to play through it right now, but keep it in mind.

## That's all, for now

This concludes my ultra-minimal review of HTML & CSS. I hope it helped fill in a few gaps.

Next, we'll take the knowledge we've gained from these crash courses and graduate to building a real, deployed website using professional tools.
