# Post References

This is a package of React components to create citations for your blog posts.
It works best with MDX and static site generators.

```
npm -i @pilvit/post-references
```

## Motivation

Many blog posts use links to their references, but this doesn't work with well scientific literature or books.
Another approach is to use `<cite>` HTML built-in tag.

In our approach you can define citation style can it renders the bibliography.
The default style doesn't follow any and is just plain "Authors. Year. _title_."

An example of a post written in MDX

```
---
title: Example Post
---

Lorem lipsum... <Cite id="sicp" pages={[1, 30]} />

More text <Cite id="tex" /> here...

<Bibliography data={{
    sicp: {
        type: "book",
        title: "Structure and Interpretation of Computer Programs",
        authors: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman"],
        year: 1985,
        publisher: "MIT Press"
    },
    tex: {
        type: "web",
        title: "TeX",
        authors: ["Wikipedia"],
        link: "https://en.wikipedia.org/wiki/TeX"
    }
}}/>
```

In static-site generators such as Gatsby and Next.js you can define a template:

```jsx
import {Bibliography, Cite, CiteContextProvider} from "@pilvit/post-references";
import {DefaultRenderer} from "@pilvit/post-references/renderers/DefaultRenderer";

export const Template = () => {
    return (
        <CiteContextProvider BibItemRenderer={DefaultItemRenderer}>
            <MDXProvider components={{
                Cite,
                Bibliography
            }}>
                {/* You content or MDXRenderer. */}
            </MDXProvider>
        </CiteContextProvider>
    )
}
```

By default, it adds the `cite-link` class to `Cite` component and `bibliography` to `Bibliography` for custom styles.
You can also create a _higher-order-component_ to supply your custom class.

## Writing bibliography

### Article

There are many kind of scientific articles such as _conference_ and _journal_ articles.

```json5
{
    type: "article",
    title: "Literate Programming",
    authors: ["Donald E. Knuth"],
    year: 1984,
    journal: {
        name: "The Computer Journal",
        issue: 2,
        volume: 27,
        pages: [97, 111],
    },
    doi: "https://doi.org/10.1093/comjnl/27.2.97",
}
```

### Book

```json5
{
    type: "book",
    title: "Structure and Interpretation of Computer Programs",
    authors: [
        "Harold Abelson",
        "Gerald Jay Sussman",
        "Julie Sussman"
    ],
    year: 1985,
    publisher: "MIT Press"
}
```

### Websites

```json5
{
    type: "web",
    title: "TeX",
    authors: ["Wikipedia"],
    link: "https://en.wikipedia.org/wiki/TeX"
}
```


## Citation Styles

There exists many academic citation styles such as [IEEE](https://ieeeauthorcenter.ieee.org/wp-content/uploads/IEEE-Reference-Guide.pdf).
Different disciplines use different ones.

### Default

The default style doesn't expect a scientific convention to be used,
so a plain variation of [ACM](https://www.acm.org/publications/authors/reference-formatting) is used.

| Type    | Bibliography                                                                                                    | Citation   |
|---------|-----------------------------------------------------------------------------------------------------------------|------------|
| Article | [1] John Doe. 2021. The Example Article. _The Journal_, Volume 1, Issue 3, Pages 1–10. DOI: https://doi.org/... | [1]        |
| Book    | [2] Jane Doe. 2022. _Example Book_. Publisher.                                                                  | [2, p. 20] |
| Web     | [3] Wikipedia. Node.js. https://en.wikipedia.org/wiki/John_Doe.                                                 | [3]        |

### Custom

You can choose any style to render by passing the renderers to `<CiteContextProvider BibItemRenderer={ACMItemRenderer}/>`.
