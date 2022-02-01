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

const refs = {
    sicp: {
        type: "book",
        title: "Structure and Interpretation of Computer Programs",
        authors: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman"],
        year: 1985,
    },
    tex: {
        type: "web",
        title: "TeX",
        authors: ["Wikipedia"],
        link: "https://en.wikipedia.org/wiki/TeX"
    }
}


Lorem lipsum... <Cite data={refs.sicp} />

More text <Cite data={refs.tex} /> here...

For multiple citations <Cite data={[ bib.sicp, bib.tex ]} />

<References bibliography={refs} />
```

Remember to wrap your Post template inside `CiteContextProvider`.

## Roadmap

- [ ] Support IEEE citation style
- [ ] Support APA citation style
- [ ] Web Component version
