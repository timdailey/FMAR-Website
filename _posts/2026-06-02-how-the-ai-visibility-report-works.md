---
layout: post
redirect_from:
  - /2026/06/02/how-the-ai-visibility-report-works/
title: "How the AI Visibility Report Works"
description: A full walkthrough of how the AI Visibility Report is built — from mapping your market and pulling buyer questions to querying AI platforms and delivering a prioritized action plan.
image: /assets/images/posts/how-the-ai-visibility-report-works-thumb.webp
date: 2026-06-02
author: frank_days
category: AI Visibility
tags: [AI visibility, AI Visibility Report, citation testing, entity signals, GEO]
takeaways:
  - The report builds a market-specific query set from Google's People Also Asked data rather than generic questions, so the results reflect your actual competitive landscape.
  - Per-platform breakdowns matter because a brand strong on ChatGPT but weak on Perplexity has a different problem than one absent from both.
  - The report is a point-in-time audit — it captures one moment in a system that changes, and AI citation improvements are directional, not guaranteed.
faq:
  - q: How are the audit questions chosen?
    a: The questions are drawn from Google's People Also Asked data for your category, retrieved via SERP API and shaped into prompts for AI platforms.
  - q: What does the report actually measure?
    a: The report measures brand mentions — whether your company name appears in each platform's response to each query in the set.
  - q: Which AI platforms does the report test?
    a: The report currently tests ChatGPT (GPT-4o), Perplexity AI, and Claude.
  - q: Why do the three platforms sometimes give different results?
    a: The platforms have different architectures and behavioral tendencies regarding training data, web retrieval, and content structure preferences.
  - q: What does the entity review check?
    a: The entity review checks presence on Wikipedia, Wikidata, Google Business Profile, G2, Capterra, Crunchbase, LinkedIn, and Organization JSON-LD schema markup.
  - q: Is the report a one-time deliverable or ongoing monitoring?
    a: The report is a one-time deliverable — a point-in-time audit with a prioritized action plan without ongoing tracking.
---

A few clients have asked us to explain exactly how the report is built. It's a fair question. If you're trusting a report to tell you where you stand in AI search, you should understand how the questions were chosen, how the platforms were queried, and what the numbers actually represent.

Here's the full walkthrough.

## Step 1: We map your market from your company and competitor set

The report starts with two inputs: your company and the competitors you want to benchmark against. We don't ask you to define your market or write prompts. We map it from what your company does and who you're competing with.

Getting the market right matters. An AI visibility audit is only as useful as its question set. Generic questions (the kind that would apply to any company in any category) produce generic results. The question set has to reflect your actual competitive landscape or the output tells you nothing actionable.

This step determines which questions get pulled, which competitors get tracked, and how the benchmarks are framed.

## Step 2: We pull commonly asked questions from Google's People Also Asked data

Once the market is mapped, we use a SERP API to retrieve the People Also Asked (PAA) questions Google surfaces for your category.

PAA questions are a reasonable starting point for this because they come from documented search behavior rather than anything we invented. The underlying assumption is that questions commonly asked on Google have some overlap with questions being asked in ChatGPT or Perplexity. This is a methodology choice, not a proven equivalence. It gives us a grounded, auditable starting point rather than an arbitrary list.

PAA doesn't capture everything buyers might ask an AI system. But it captures questions that real people have demonstrably asked about your category, at scale, in a verifiable way.

## Step 3: Those questions become the AI audit query set

The PAA questions are shaped into the set of queries we run against the AI platforms. These become the actual prompts each platform is asked about your category.

The report's brand mention data traces back to this query set. Every result showing whether your brand appeared, where it ranked in the response, and which competitors were named instead. All of it comes from how the platforms responded to these specific questions.

The query set is specific to your market. A procurement consulting firm gets different questions from a warehouse automation company. That specificity is what makes the results comparable to something real.

## Step 4: Each query runs on ChatGPT, Perplexity, and Claude

Every question runs independently on ChatGPT (GPT-4o), Perplexity AI, and Claude. For each response, we record whether your brand is mentioned, where in the response it appears, and which competitors are named. The same process runs for each competitor in your benchmark set.

What the report measures is brand mentions: whether your company name appears in each platform's response to each question. That's the core data point: not rankings, not source citations in the footnote sense, but whether you're named in the answer itself.

The three platforms often produce different results for the same query, and that variation is informative. ChatGPT tends to rely more heavily on training data and established entity authority. Perplexity often draws on live web retrieval, which means recently published, well-structured content can have more influence. Claude tends to respond well to clearly organized content and credible third-party sources. These are general tendencies based on what we observe across audits, not fixed rules. All three platforms vary their behavior by query type, and they update frequently.

A brand that appears consistently on ChatGPT but rarely on Perplexity usually has a different set of problems from one that's absent everywhere. The per-platform breakdown is what makes the action plan specific rather than generic.

**An example of what this looks like in practice:** a procurement consultancy we ran through the audit appeared in 10 out of 10 ChatGPT responses but in almost none of the Perplexity results for the same queries. ChatGPT recognized the brand; Perplexity couldn't find much recent, structured content to draw from. The fix was different for each platform.

## Step 5: We run a basic content and entity review

Alongside the query testing, the report checks two foundational things: whether your content is structured in a way that AI platforms can use, and whether your brand has the external signals that allow AI systems to verify you exist.

**Content review.** We check for the content types AI platforms most commonly draw from: FAQ pages, how-to content, comparison pages, original research, and case studies. Where those are missing, the report flags it with context on why they matter.

**Entity signal review.** We check whether your brand appears on the platforms AI systems commonly use to verify brand identity: Wikipedia and Wikidata, Google Business Profile, G2, Capterra, Crunchbase, and LinkedIn. We also check whether your homepage has Organization JSON-LD schema markup. In our experience, missing or incomplete schema is one of the most common technical gaps we find across audits. It's also one of the more straightforward things to address, since it's a developer task rather than a content project.

These checks provide the diagnostic layer. The mention data tells you what's happening in AI answers. The content and entity review points to why.

[What entity signals are and which ones matter]({{ '/glossary/entity-signals/' | relative_url }}) — [What schema markup is and how it affects AI citation]({{ '/glossary/schema-markup/' | relative_url }})

## Step 6: The findings become a prioritized action plan

The report closes with a prioritized list of actions. Not a complete audit of everything that could be improved. A sequenced list that puts the highest-confidence, lowest-effort fixes first.

Quick wins are typically things like schema markup implementation, claiming and completing profiles on G2, Capterra, Google Business Profile, and Wikidata, and adding FAQPage schema to existing content. These are usually addressed in days, not weeks. Whether they affect your mention rate in AI outputs depends on how AI platforms update their knowledge. Results vary, and timelines aren't predictable with precision. But they're the right starting point.

Longer-lead improvements (case studies with quantified outcomes, comparison pages, building toward Wikipedia notability through third-party press coverage) take more time. The sequencing matters because starting with the longest-lead work while faster improvements are available doesn't make sense.

## What the report doesn't do

The report is a point-in-time audit. It captures how your brand performs across the query set at the time the queries are run. AI platform outputs can vary between sessions, and query wording affects results. The snapshot you get reflects one moment in a system that changes. We say this in the report itself.

It doesn't guarantee citation improvements. GEO isn't deterministic. The fixes we recommend are the ones most consistently associated with improved citation performance across the audits we've run, but AI platforms make their own decisions and those decisions are not fully predictable.

What the report does provide: a structured view of where you stand today, benchmarked against your named competitors, with a prioritized list of changes targeting the gaps most likely to affect how AI platforms describe and recommend your brand.
