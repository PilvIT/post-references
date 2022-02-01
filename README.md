# Post References

This is a package of React components to create citations for your blog posts.
It works best with MDX and static site generators.
The runtime processing will be eliminated.

## Motivation

Many blog posts use links to their references, but this doesn't work with well scientific literature or books.
Another approach is to use `<cite>` HTML built-in tag.

An example of a post written in MDX

```
---
title: Example Post
---

const bib = {
    sicp: {
        type: "book",
        title: "Structure and Interpretation of Computer Programs",
        author: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman"],
        year: 1985,
    },
    tex: {
        type: "web",
        title: "TeX",
        link: "https://en.wikipedia.org/wiki/TeX"
    }
}


Lorem lipsum... <Cite data={bib.sicp} />

More text <Cite data={bib.tex} /> here...

For multiple citations <Cite data={[ bib.sicp, bib.tex ]} />

<Bibliography bibliography={bib} />
```
