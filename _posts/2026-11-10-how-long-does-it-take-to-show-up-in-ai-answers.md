---
layout: post
redirect_from:
  - /2026/11/10/how-long-does-it-take-to-show-up-in-ai-answers/
title: "How Long Does It Take to Show Up in AI Answers? A Realistic Timeline"
description: A realistic timeline for how long fixes take to appear in ChatGPT, Perplexity, and Google AI answers, with what the platforms' own documentation says and what is only our estimate.
date: 2026-11-10
last_modified: 2026-11-10
author: tim_dailey
category: GEO
tags: [GEO, AI visibility, timeline, indexing, AI citations]
takeaways:
  - There is no guaranteed timeline. Crawl and index changes can take days to weeks, while changes to what a model learned in training can take a new model release.
  - Retrieval-based surfaces such as Google AI Overviews, Perplexity, and ChatGPT search can reflect a new or updated page once it has been crawled and indexed. Answers that come from training data change much more slowly.
  - Be wary of precise promises. Of the timings below, only the crawl and robots.txt figures come from platform documentation. The rest are our estimates from experience.
faq:
  - q: How long does it take for changes to show up in ChatGPT?
    a: It depends on the source of the answer. OpenAI says changes to robots.txt can take about 24 hours to affect ChatGPT search, and a new page must be crawled before it can be used there. Answers drawn from training data do not change until a new model is trained. No one can promise a date.
  - q: How long does it take Google to index a new page?
    a: Google says recrawling can take anywhere from a few days to a few weeks, and that requesting indexing does not guarantee inclusion. Resubmitting the same URL does not speed it up. A page must be indexed and eligible to show a snippet before it can be a supporting link in AI Overviews.
  - q: Why am I still not showing up weeks after making changes?
    a: Common reasons are that the page has not been indexed yet, the platform that matters for your buyers relies on training data rather than live retrieval, or other brands have far more independent mentions. Check indexing first, then entity signals, then content.
  - q: Does requesting indexing in Search Console make AI answers update faster?
    a: It can shorten the wait for Google to recrawl a page, which is a prerequisite for Google's AI features. It does not directly control what ChatGPT or Perplexity say, and Google states that a request does not guarantee inclusion.
  - q: How often should I re-test after making changes?
    a: Make changes in batches, wait a full monthly cycle, and re-run the same fixed set of questions. Re-testing daily mostly measures random variation, because AI answers differ between sessions.
  - q: Can anyone guarantee a time to appear in AI answers?
    a: No. Platforms change how they retrieve and rank sources without notice, and results vary between sessions. Treat any firm promise about timing with caution.
---

There is no fixed answer, but there is a realistic range. Changes that depend on a crawler seeing your page can take days to weeks. Changes that depend on what a model learned in training can take a new model release, which you do not control.

This post separates what the platforms have said about timing from what is our estimate, because most of the timelines you will see online blur the two.

## Why timing varies so much

AI answers come from two different places, and they move at different speeds.

- **Retrieval.** Google AI Overviews, Perplexity, and ChatGPT with search turned on look up pages at the time of the question. For these, a new or updated page can matter once it has been crawled and indexed.
- **Training data.** When a model answers from memory, it reflects what it learned during training. That changes only when a new model is trained, so there is nothing to speed up.

A lot of the confusion about "how long it takes" comes from not knowing which of the two a given answer used. This is also why [where ChatGPT gets its information]({{ '/blog/where-does-chatgpt-get-its-information/' | relative_url }}) is the first thing to understand before judging results.

## What the platforms say about timing

These are the only timing figures we can tie to a primary source.

| Step | What the source says | Source |
|---|---|---|
| Google recrawling a page | Anywhere from a few days to a few weeks. A request does not guarantee inclusion, and resubmitting the same URL does not make it faster. | [Google Search Central: ask Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) |
| Google AI features after a preview-control change | Allow time for recrawling, which Google says can take days to months. | [Google Search Central: AI features](https://developers.google.com/search/docs/appearance/ai-features) |
| ChatGPT search after a robots.txt change | About 24 hours for OpenAI's systems to adjust. | [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots) |
| Perplexity after a robots.txt change | Up to 24 hours for its systems to reflect it. | [Perplexity crawler documentation](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) |

Two details matter here. First, Google's AI Overviews and AI Mode have no extra technical requirements beyond being indexed and eligible to show a snippet, so the practical wait is the indexing wait. Second, a robots.txt change only removes a barrier. It does not make a page appear.

## A realistic timeline by type of fix

Platforms do not publish timelines for most of the work below. The ranges are our estimates from running audits, and they will not hold for every site. Treat them as an order of magnitude, not a promise.

| Type of fix | What has to happen | Our rough expectation |
|---|---|---|
| Unblocking AI crawlers in robots.txt | Crawlers re-read the file | Days (OpenAI and Perplexity both cite about 24 hours for the file itself) |
| Schema markup | The page is recrawled and the markup is read | Weeks, after Google recrawls the page |
| New or refreshed page | The page is crawled, indexed, then retrieved | A few weeks to a couple of months, if it gets indexed at all |
| Entity profiles (Google Business Profile, Crunchbase, G2, LinkedIn) | Profiles go live and are picked up as independent confirmation | Weeks to months |
| Third-party mentions and press | Other sites publish and are themselves crawled | Months |
| Changes to training-data answers | A new model is trained | Outside your control |

Our [AI search optimization guide]({{ '/blog/how-to-optimize-for-ai-search/' | relative_url }}) makes the same point in its own terms: technical fixes can matter within weeks, while topical authority builds over months.

## Our own timeline

We think it helps to show a real example rather than only advice. On October 26, 2026 we merged eight overlapping educational pages into six pages with redirects and asked Google to index the six pages the same day. The site is young and has few external links, so we do not expect it to be fast.

We are tracking whether and when those pages are indexed and will report what we see once there is enough data to say something meaningful. We are not claiming any result yet.

## What can shorten the wait

- **Get the page indexed first.** Use the URL Inspection tool in Search Console to check the page and request indexing once per change. Google says repeating the request does not speed things up.
- **Make the page easy to find.** Google's guidance includes allowing crawling and using internal links so content is easy to find, so link new pages from pages that are already indexed.
- **Remove blockers.** Confirm that robots.txt, your CDN, or a firewall is not blocking the crawlers you want. OpenAI notes that a firewall or CDN can block its crawlers even when robots.txt allows them.
- **Fix entity gaps in parallel.** Profiles and mentions take the longest, so start them early. [Entity signals]({{ '/glossary/entity-signals/' | relative_url }}) lists the profiles that matter most.
- **Batch your changes.** If you change everything at once you will not know what moved the result.

## How to know whether it is working

Use the same set of buyer questions each month, in fresh sessions, and compare. Daily re-testing mostly measures randomness. The method is in [how to track your brand's AI visibility]({{ '/blog/how-to-track-ai-visibility/' | relative_url }}), and the report-reading guide explains [what to fix first]({{ '/blog/how-to-read-your-ai-visibility-report/' | relative_url }}).

If a page has been indexed for a month or more and nothing has changed, the cause is usually not timing. [Why your website is not showing up in AI answers]({{ '/blog/why-website-not-showing-in-ai-answers/' | relative_url }}) walks through the audit.

## Related Reading

- [AI Search Optimization Guide: A Step-by-Step Roadmap for 2026]({{ '/blog/how-to-optimize-for-ai-search/' | relative_url }})
- [How to Track Your Brand's AI Visibility]({{ '/blog/how-to-track-ai-visibility/' | relative_url }})
- [Why Your Website Isn't Showing Up in AI Answers (and How to Audit It)]({{ '/blog/why-website-not-showing-in-ai-answers/' | relative_url }})
