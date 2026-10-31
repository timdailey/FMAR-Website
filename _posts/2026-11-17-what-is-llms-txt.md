---
layout: post
redirect_from:
  - /2026/11/17/what-is-llms-txt/
title: "llms.txt: What It Is, Whether It Works, and How to Create One"
description: What an llms.txt file is, what Google and the available studies say about whether it affects AI visibility, and how to write one in under an hour if you decide to.
date: 2026-11-17
last_modified: 2026-11-17
author: tim_dailey
category: GEO
tags: [llms.txt, GEO, AI crawlers, technical SEO, AI visibility]
takeaways:
  - llms.txt is a proposed plain-text Markdown file at your site root that gives AI tools a short, curated map of your most useful pages. It is a proposal, not an official web standard.
  - The evidence that it improves AI citations is weak. A study of nearly 300,000 domains found no correlation, and Google's John Mueller has called it purely speculative.
  - It costs little to create, so it is a reasonable optional experiment. Fix crawlability, indexing, and content first.
faq:
  - q: What is an llms.txt file?
    a: An llms.txt file is a Markdown file, proposed in September 2024 by Jeremy Howard, that sits at a site's root and gives language models a short, curated guide to the site. It has a title, a short summary, and lists of links to the most useful pages with brief notes about each.
  - q: Does llms.txt help you get cited by ChatGPT or Google?
    a: The available evidence says it is not shown to. An SE Ranking analysis of nearly 300,000 domains found no correlation between having the file and being cited by AI models, and Google's John Mueller has described it as purely speculative. We did not find an official statement of support from OpenAI or Anthropic.
  - q: Is llms.txt the same as robots.txt?
    a: No. robots.txt tells crawlers what they may or may not access. llms.txt is a content guide that points an AI tool to useful pages. It does not block or allow anything.
  - q: Where do you put the llms.txt file?
    a: At the site root, for example example.com/llms.txt. The proposal also allows the file at a subpath, such as a docs section, where it covers the URLs beneath it.
  - q: Do I need llms.txt to appear in Google AI Overviews?
    a: No. Google's documentation says no new machine-readable files, AI text files, or special markup are needed. A page must be indexed and eligible to show a snippet.
  - q: Should I create an llms.txt file anyway?
    a: It is a low-cost experiment, and it can be a useful summary of your site for AI agents that do read it. Do it after the basics, such as allowing crawlers, getting key pages indexed, and keeping your entity information consistent. Do not expect a measurable change.
---

An llms.txt file is a plain-text Markdown file at the root of your website that gives AI tools a short, curated list of your most useful pages. It is a proposal, not a standard, and the evidence that it improves how often AI tools cite you is weak. It is cheap to make, so it is a fair optional experiment, but it should come after the technical basics.

This guide covers what the file is, what is and isn't known about whether it works, and how to write one. We also use one ourselves, and we will show you how it is structured.

## What is llms.txt?

Jeremy Howard proposed llms.txt in September 2024. The idea is that language models have limited context windows and websites are messy, so a short Markdown file can give an AI tool a clean entry point to the content that matters. The [llms.txt proposal](https://llmstxt.org/) describes it as a way to give agents a concise, curated map of a site, with detail behind links they can fetch on demand.

The proposal says use is expected mainly at inference time, meaning when someone asks a question, rather than for model training.

## What goes in an llms.txt file?

The proposal defines this structure, in order:

1. An H1 with the name of the site or project. This is the only required element.
2. A blockquote with a short summary.
3. Optional paragraphs or lists of detail, without headings.
4. Optional H2 sections that hold lists of links. Each item is a Markdown link, optionally followed by a colon and a note.
5. By convention, an H2 section named "Optional" for secondary links that an agent can skip when it needs less context.

The proposal also suggests that pages can have clean Markdown versions available at the same URL with `.md` added, and describes link tags for discovery. Those parts are optional and add work, so most sites start without them.

## llms.txt vs. robots.txt vs. sitemap.xml

| File | Job | Who reads it |
|---|---|---|
| robots.txt | Says which crawlers may access which paths | Search and AI crawlers, before crawling |
| sitemap.xml | Lists all the URLs you want indexed | Search engines |
| llms.txt | Offers a short, curated guide to your best content | Proposed for AI tools and agents at question time |

The proposal itself positions llms.txt as a complement: sitemaps list everything, and robots.txt governs access. llms.txt is a selective summary. It cannot block anything, and it does not replace the other two. If you want to control which AI crawlers can reach your site, that is a robots.txt job, and the AI crawlers publish their own names and rules (for example, [OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots)).

## Does llms.txt work?

This is the question that matters, and the answer is that nobody has shown that it does.

- **Google says it is not needed.** Google's guidance on AI features states that you do not need new machine-readable files, AI text files, or special markup to appear in AI Overviews and AI Mode. See [Google Search Central: AI features](https://developers.google.com/search/docs/appearance/ai-features). In a June 2026 report, Google's John Mueller called llms.txt ["purely speculative for now"](https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/), noting that none of the AI systems appear to use it.
- **The large study found no effect.** An [SE Ranking analysis](https://seranking.com/blog/llms-txt/) published October 15, 2026 looked at nearly 300,000 domains. About 10.13% had an llms.txt file. The authors found no correlation between having the file and how often a domain was cited by AI models. SE Ranking is an SEO tool vendor, and the authors note that their results are specific to the model and dataset they tested.
- **We found no official support from OpenAI or Anthropic.** We did not find a statement from either company saying their products read the file. That is an absence in what we found, not proof that nobody uses it.

So the honest summary is: it may help some AI agents that choose to read it, and there is no demonstrated benefit to citations. Anyone who tells you it is a proven ranking factor is going beyond the evidence.

## How to create an llms.txt file

1. **Choose 10 to 30 pages.** Pick the pages you most want an AI tool to understand: your product or service pages, your best definitions and guides, pricing, and any documentation.
2. **Write the H1 and the summary.** Use your company name and one or two plain sentences about what you do and for whom. Keep the wording consistent with your site and your external profiles.
3. **Group the links under H2 headings.** Use headings that match how a reader would think about the site, such as Products, Guides, and Company.
4. **Add a short note to each link.** One sentence on what the page covers is enough.
5. **Put an Optional section at the end** for pages that are useful but not essential.
6. **Save it as `llms.txt` at the site root.** On a Jekyll site like ours, that means a file at the top level of the repository.
7. **Check that it loads.** Open `yourdomain.com/llms.txt` in a browser and confirm it returns plain text, not a 404 or an HTML page.
8. **Keep it current.** Update it when you publish or retire important pages, otherwise it points to dead links.

A minimal example:

```
# Example Co

> Example Co makes scheduling software for dental practices.

## Product
- [Scheduling software](https://example.com/product/): Overview, features, and pricing.

## Guides
- [How to reduce no-shows](https://example.com/blog/reduce-no-shows/): A practical guide for front-desk teams.

## Optional
- [Press kit](https://example.com/press/): Logos and company facts.
```

## Our own file as an example

We publish one at [fixmyairank.com/llms.txt](https://fixmyairank.com/llms.txt). It follows the structure above: an H1 with the company name, a blockquote summary of what we do, a short paragraph about who runs the site, and then H2 sections for the report, the glossary, the blog, and the company page. Each entry is a link with a one-line note.

We keep it in step with the site. When we merged overlapping pages earlier this year, we removed the retired URLs and updated the titles. We include it for completeness and as a low-cost experiment. We are not claiming it has produced a measurable result.

## Common mistakes

- **Listing every page.** The point is to be selective. A sitemap already lists everything.
- **Leaving dead or redirected links.** If you merge or retire pages, update the file.
- **Contradicting your site.** The company description should match your homepage and profiles.
- **Treating it as a block list.** It cannot stop AI tools from using your content. Use robots.txt for access control.
- **Expecting a lift.** Nothing in the evidence supports promising one.

## How to tell whether it matters for you

Check your server or CDN logs for requests to `/llms.txt` and see which user agents make them. If nothing reads the file, you have your answer for now. Then watch your AI-referral traffic and run a fixed set of buyer questions each month, as described in [how to track your brand's AI visibility]({{ '/blog/how-to-track-ai-visibility/' | relative_url }}). Any change in citations is likely to come from other work, so log what you change and when.

## What to do before llms.txt

If AI tools cannot reach or understand your site, a summary file will not fix it. Start with the basics in [how to optimize for AI search]({{ '/blog/how-to-optimize-for-ai-search/' | relative_url }}): allow the crawlers you want, get key pages indexed, and keep your [entity signals]({{ '/glossary/entity-signals/' | relative_url }}) and [schema markup]({{ '/glossary/schema-markup/' | relative_url }}) consistent. If you want a baseline first, [why your website isn't showing up in AI answers]({{ '/blog/why-website-not-showing-in-ai-answers/' | relative_url }}) is the audit.

## Related Reading

- [AI Search Optimization Guide: A Step-by-Step Roadmap for 2026]({{ '/blog/how-to-optimize-for-ai-search/' | relative_url }})
- [What Is Answer Engine Optimization (AEO)?]({{ '/glossary/answer-engine-optimization/' | relative_url }})
- [Why Your Website Isn't Showing Up in AI Answers (and How to Audit It)]({{ '/blog/why-website-not-showing-in-ai-answers/' | relative_url }})
