---
layout: post
redirect_from:
  - /2026/12/15/do-backlinks-matter-for-ai-search/
title: "Do Backlinks Matter for AI Search? What the Evidence Says"
description: What studies show about backlinks, brand mentions, and AI citations, where the evidence runs out, and what a young site with few links can do.
date: 2026-12-15
last_modified: 2026-12-15
author: tim_dailey
category: GEO
tags: [backlinks, GEO, AI citations, brand mentions, link building]
takeaways:
  - Backlinks matter for AI search mostly indirectly. They help pages rank and get indexed, and the research we found shows a weaker link between backlinks and AI visibility than between brand mentions and AI visibility.
  - The evidence is correlational and comes mostly from vendor studies. None of it proves that links, or mentions, cause citations.
  - A young site with few links should still do the basics, and should go after mentions and listings on the sites AI tools already cite, not only links.
faq:
  - q: Do backlinks matter for AI search visibility?
    a: They matter, but less directly than for classic SEO and with less certainty. In an Ahrefs study of 75,000 brands, the number of backlinks had a correlation of 0.218 with brand visibility in AI Overviews, compared with 0.664 for branded web mentions. Correlation does not show cause.
  - q: Are brand mentions more important than backlinks for AI?
    a: In that Ahrefs data, mentions correlated more strongly than backlinks. Ahrefs itself cautions that correlation is not causation, and that well-known brands tend to have both more mentions and more links.
  - q: Do I need high domain authority to be cited by AI tools?
    a: We found no source showing that a particular domain authority is required. Domain Rating had a 0.326 correlation with AI Overview brand visibility in the Ahrefs study, which is moderate to weak. Low authority makes things harder, but it does not make citation impossible.
  - q: Can Google rankings predict AI citations?
    a: Partly. A Writesonic analysis of more than 1 million AI Overviews estimated a 33.07% chance that the top-ranked page is cited. Ahrefs found that only about 12% of links cited by ChatGPT, Gemini, and Copilot appear in Google's top 10 for the same prompt, and 28.6% for Perplexity.
  - q: What should a new site do about backlinks?
    a: Make sure pages are indexed, then look for places where your category is already discussed and cited, such as directories, review sites, publications, and communities. Earn links and mentions there with useful, original material. Avoid buying links.
  - q: Are unlinked mentions worth chasing?
    a: They appear to be. In the Ahrefs data, unlinked brand web mentions were the strongest factor measured. You can encourage them by being useful where your category is discussed and by publishing material other people want to cite.
---

Backlinks matter for AI search, but mostly indirectly, and less than many people assume. In the research we found, brand mentions across the web line up with AI visibility more strongly than backlink counts do. None of it proves cause. For a young site with few links, the practical answer is to do the basics and to pursue mentions on the sites AI tools already cite, not only links.

We are a young site ourselves, so we have a stake in this question. We will say what the evidence supports and where it runs out.

## What the studies show

| Study | What it found | Caveat |
|---|---|---|
| [Ahrefs, 75,000 brands (May 2025)](https://ahrefs.com/blog/ai-overview-brand-correlation/) | Correlation with brand visibility in AI Overviews: branded web mentions 0.664, branded anchors 0.527, branded search volume 0.392, Domain Rating 0.326, number of backlinks 0.218. | Correlation, not cause. The sample was filtered to higher-authority domains (DR above 40). Ahrefs sells SEO tools. |
| [Ahrefs, 15,000 prompts (August 2025)](https://ahrefs.com/blog/ai-search-overlap/) | On average, about 12% of links cited by ChatGPT, Gemini, and Copilot appear in Google's top 10 for the same prompt. For Perplexity it was 28.6%. | ChatGPT data was collected in early July 2025 and may have changed. |
| [Writesonic, 1M+ AI Overviews (2025)](https://writesonic.com/blog/ai-citations-from-serp-results-study) | Estimated a 33.07% chance that the page ranking first in Google is cited in an AI Overview, falling to 13.04% at position ten. | The write-up does not fully describe its method. Treat as directional. |

Read together, these suggest three things. Links are not irrelevant, since backlinks and Domain Rating both show positive correlations. They are not the strongest signal either, since mentions show much higher ones. And ranking well in Google is neither necessary nor sufficient, since most cited links on some platforms are not in the top 10.

## Why links can matter indirectly

Even where AI tools don't weigh links directly, links can matter on the way in.

- **Indexing and discovery.** Google says a page must be indexed and eligible to show a snippet to appear in its AI features, and that its guidance includes making content easy to find through links ([Google Search Central](https://developers.google.com/search/docs/appearance/ai-features)). Links from other sites help crawlers find a page.
- **Rankings feed retrieval.** For tools that draw on search results, a page that ranks is more likely to be retrieved. The overlap data above shows this is only part of the picture.
- **Links come with mentions.** A page that earns a link usually also gets a mention, a description, and context on another site. That text is what an AI tool can read.

We can't separate these effects with the data available, and we haven't seen a study that does.

## Links, mentions, and citations are three different things

- A **backlink** is a hyperlink from another site to yours.
- A **brand mention** is your name appearing on another site, with or without a link.
- An **AI citation** is an AI tool naming you or linking to your page in an answer. [What an AI citation is]({{ '/glossary/what-is-an-ai-citation/' | relative_url }}) covers the distinction between a mention and a sourced citation.

A lot of loose talk treats these as the same. They overlap, but a mention without a link can still be what an AI tool reads, and a link without context says little.

## Retrieval vs. training

Where an answer comes from changes how links matter. If an answer is built from live retrieval, as in Perplexity, whose crawler PerplexityBot exists to surface and link websites in its search results ([Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)), then pages that are crawled and findable matter. If an answer comes from what a model learned in training, then what mattered was what was widely published before training. For that, widespread mentions are plausible, although we can't point to a study that isolates it. [Where ChatGPT gets its information]({{ '/blog/where-does-chatgpt-get-its-information/' | relative_url }}) explains the difference.

## What a young site can do

Here is our own situation. Fix My AI Rank is a young domain. A check with Ubersuggest in October 2026 put our domain authority at 9, with only a handful of external links, around seven. We aren't citing that as a result. It is the starting point we're working from, and it's why we're careful about what we claim.

What we think is sensible for a site like ours, and probably yours:

1. **Get your pages indexed.** Use Search Console to check indexing, link new pages from existing ones, and fix pages that are crawled but not indexed. Without this, nothing else counts.
2. **Find where your category is already cited.** Run your buyer questions and log the domains AI tools link to. Our [step-by-step method for finding cited sources]({{ '/blog/find-which-sources-chatgpt-perplexity-cite/' | relative_url }}) has a worksheet.
3. **Get listed and described accurately there.** Directories, review sites, and reference sources are common cited domains. A complete, consistent profile is an [entity signal]({{ '/glossary/entity-signals/' | relative_url }}) that AI tools can verify.
4. **Publish material other people want to cite.** Specific, sourced, well-organized pages earn links and mentions in a way that generic posts don't. A maintained page of verified numbers, like our [AI search statistics]({{ '/blog/ai-search-statistics/' | relative_url }}), is built for this, though we can't promise it will work.
5. **Ask, with something useful.** Writers who cover your category often welcome a relevant source. Send a short, specific note, and don't ask for a link in return for nothing.
6. **Avoid shortcuts.** Buying links or running link schemes can harm your search rankings, and there's no evidence it helps AI visibility.

## What we don't know

- Whether any of these correlations are causal.
- Whether the relationships hold for newer models and features, since the studies above are from 2025 and the platforms change.
- Whether a young, low-authority site can close the gap with mentions alone. We are testing this on ourselves and have no result to report.

If you want to see where your own gaps are before spending on links, the [free AI Visibility Report]({{ '/#report-form' | relative_url }}) checks entity signals, schema, and content gaps against competitors. For how this fits the wider picture, see [GEO vs. SEO vs. AEO]({{ '/blog/geo-vs-seo-difference/' | relative_url }}).

## Related Reading

- [GEO vs. SEO vs. AEO: What's the Difference and Do You Need Both?]({{ '/blog/geo-vs-seo-difference/' | relative_url }})
- [What Are Entity Signals?]({{ '/glossary/entity-signals/' | relative_url }})
- [AI Search Statistics (2026)]({{ '/blog/ai-search-statistics/' | relative_url }})
