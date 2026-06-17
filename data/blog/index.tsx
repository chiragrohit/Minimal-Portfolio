import * as React from 'react';
import type { BlogPost } from '../../lib/data/types';

export const POSTS: BlogPost[] = [
  {
    slug: 'resilient-ui-components',
    date: 'Oct 24, 2026',
    title: 'Building Resilient UI Components',
    desc: 'How to build components that gracefully handle unexpected data and state combinations.',
    content: (
      <>
        <p>In modern web development, creating user interfaces that look good is only half the battle. The real challenge lies in building components that are resilient—components that don&apos;t break when handed unexpected data, missing props, or extreme state combinations.</p>
        
        <h3>The Problem with Fragile state</h3>
        <p>Consider a simple profile card. It looks perfect in Figma with a perfectly sized avatar, a 15-character name, and a short bio. But what happens in production when a user uploads a microscopic image, has a 45-character name, and leaves their bio completely empty?</p>
        <p>Fragile components will overflow their containers, collapse into zero-height divs, or throw runtime errors when they attempt to read from undefined objects.</p>
        
        <h3>Designing for the Edge Cases</h3>
        <p>Resilient components are defensive. They assume the worst about the data they receive. Here are three strategies to build defensively:</p>
        
        <ol>
          <li><strong>Fallback Content:</strong> Always provide sensible defaults for missing data. Missing avatar? Use an initial or a generated gradient.</li>
          <li><strong>Fluid Typography & Flexible Containers:</strong> Instead of fixed heights or truncating text abruptly, use layouts that can stretch gracefully, and utilize CSS properties like <code>line-clamp</code> or simply allow the container to push content downward.</li>
          <li><strong>Error Boundaries:</strong> Wrap complex component sub-trees in Error Boundaries so that one failing component doesn&apos;t take down the entire page.</li>
        </ol>

        <p>By shifting our mindset from &quot;happy path design&quot; to &quot;edge case design,&quot; we create software that feels robust and professional, regardless of the chaotic data the real world throws at it.</p>
      </>
    ),
  },
  {
    slug: 'optimizing-nextjs-app-router',
    date: 'Sep 12, 2026',
    title: 'Optimizing Next.js App Router for Production',
    desc: 'Lessons learned from migrating a large-scale e-commerce platform to the App Router.',
    content: (
      <>
        <p>Moving a massive production system to the Next.js App Router isn&apos;t just a refactor—it&apos;s a paradigm shift. Over the last six months, we migrated our core e-commerce architecture from the Pages Router to the App Router. The journey was filled with performance breakthroughs and a few architectural pitfalls.</p>
        
        <h3>Server Components default behavior</h3>
        <p>The most profound change was adopting React Server Components (RSCs). By default, everything is a server component. We initially made the mistake of sprinkling <code>&apos;use client&apos;</code> at the top of our page files because we needed a small interactivity hook. This defeated the purpose of the App Router.</p>
        <p><strong>The Fix:</strong> We learned to push client components down the tree. Interactive elements became &quot;leaves&quot; on our component tree, while data-heavy container components remained securely on the server.</p>

        <h3>Data Fetching & Caching</h3>
        <p>Next.js completely changed how we think about caching. The built-in fetch cache is incredibly aggressive. In e-commerce, stale inventory data is a disaster. We had to master tag-based invalidation (<code>revalidateTag</code>) to ensure our product pages instantly reflected stock changes without rebuilding the entire page.</p>

        <p>Ultimately, the App Router forced us to write cleaner, more strictly separated code. The initial learning curve was steep, but the resulting reduction in client-side JavaScript was well worth the investment.</p>
      </>
    ),
  },
  {
    slug: 'beauty-generous-negative-space',
    date: 'Jul 04, 2026',
    title: 'The Beauty of Generous Negative Space',
    desc: 'Why whitespace is your most powerful tool in interface design, and how to use it effectively.',
    content: (
      <>
        <p>When designers first start creating interfaces, there is a natural temptation to fill every pixel. Information density is prized over harmony. But as you mature as a designer, you realize that what you don&apos;t show is just as important as what you do show.</p>

        <h3>Whitespace is not empty space</h3>
        <p>Negative space (or whitespace) is not merely a blank background. It is an active element in your design. It provides breathing room, groups related elements, and directs the user&apos;s eye toward what is truly important.</p>

        <h3>Rhythm and Hierarchy</h3>
        <p>By increasing the margins between distinct functional blocks, you implicitly tell the user &quot;these concepts are separate.&quot; By tightening the padding between an icon and its text label, you say &quot;these belong together.&quot; </p>

        <p>Consider the Editorial Aesthetic we use on this very portfolio. The large font sizes combined with excessive margins give the content an air of gravity and importance. A cramped layout feels cheap and utilitarian; a spacious layout feels premium, deliberate, and confident.</p>
      </>
    ),
  },
  {
    slug: 'css-variables-theme-strategy',
    date: 'Jan 18, 2026',
    title: 'CSS Variables and the Theme Strategy',
    desc: 'Creating an architecture that makes dark mode and multi-theme logic effortless.',
    content: (
      <>
        <p>Before modern CSS variables, creating a dark mode usually involved shipping two entirely separate stylesheets, or writing chaotic, redundant CSS where every single class had a <code>.dark</code> override.</p>

        <h3>The Power of Semantic Tokens</h3>
        <p>The secret to scalable theming is a two-tier variable system. You don&apos;t use raw hex codes in your components. Instead, you create semantic tokens.</p>

        <p>Let&apos;s take background colors as an example. You don&apos;t write <code>bg-[#fafafa]</code>. You don&apos;t write <code>bg-background</code>. Under the hood, your CSS defines what <code>--background</code> means in different contexts.</p>

        <p>By defining your palette at the root level, switching themes is as simple as flipping a class name on the <code>&lt;html&gt;</code> element. The components themselves don&apos;t need to know whether they are in light mode or dark mode—they just reference their semantic tokens.</p>

        <p>This decoupling of <em>structure</em> from <em>appearance</em> is the foundation of any robust design system.</p>
      </>
    ),
  }
];
