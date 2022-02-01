# Post References

This is a package of React components to create citations for your blog posts.
It works best with MDX and static site generators.
The runtime processing will be eliminated.

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

const refs = {
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
}


Lorem lipsum... <Cite id="sicp" />

More text <Cite id="tex" /> here...

<Bibliography data={refs} />
```

In static-site generators such as Gatsby and Next.js you can define a template:

```jsx
import { Bibliography, Cite, CiteContextProvider } from "@pilvit/post-references";

export const Template = () => {
    return (
        <CiteContextProvider locale="en">
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

By default, it adds the `cite-link` class to `Cite` component and `bibliography to `Bibliography for custom styles.
You can also create a _higher-order-component_ to supply your custom class.
