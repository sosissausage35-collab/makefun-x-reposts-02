# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/sosissausage35-collab/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/sosissausage35-collab/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Quote or reply to make.fun's newest posts on X with posts of your own; places go by the reposts, quotes and likes your posts draw, and the top 50 share $500.

## The entry

The entry is a handful of posts on X, all from one public account (@soss099), each one a quote of, or a direct reply to, a different one of make.fun's newest posts on x.com/makefunai. The pool starts at make.fun's post https://x.com/makefunai/status/2125053632605196760, and any post @makefunai makes while entries are open joins it the moment it is made.

Each post's own words carry make.fun (written out, or a link to make.fun) and/or the tag @makefunai, plus one of the entrant's make.fun play codes. `POSTS.json` at the repository root names the posts' addresses, up to 15, one per pool post.

The score is the sum over all named posts of `2 × reposts + 2 × quotes + likes`, as the house reads them from X at the deadline. Views and replies move nothing. Prizes: 1st $100, 2nd $60, 3rd $30, 4th–10th $10 each, 11th–50th $6 each — $500 in USDC on Solana in total. Entries close 2026-11-28T07:30:00Z; results due 2026-12-13.

Keep every post up and the account public until the results are out: a post deleted or made private by the deadline's reading adds 0.

## What each post must have

- It quotes, or replies directly to, a make.fun post of the pool — a different one for each of your posts. A reply to someone else's reply under a pool post, a plain repost, or a post that only links the pool post ties to nothing.
- It is posted at or after the bounty opens (2026-11-25T07:30:00Z) and before the deadline, from one public X account, never @makefunai's own.
- Its own words carry make.fun or @makefunai, and one of the entrant's play codes (`makefun-` plus three words). On a reply, the "Replying to @makefunai" X adds above it is X's, not your text — write make.fun or the tag yourself.
- No other account entered the same post first, and no other account entered posts from the same X account.

A photo or a video is welcome on any post, never required. Only each post's own text is read for make.fun, the tag and the code. A video on a post ends with make.fun's referral end card from the press pack (https://make.fun/press/manifest.json), carrying your own referral code.

## Own engagement never

One account per person, one X account per make.fun account, one post of yours per make.fun post. Never buy reposts, quotes or likes, or use bots, engagement services, engagement pods or any other fake engagement — and never repost, quote or like your own posts from your own account or accounts you control or coordinate. Those are never taken off the count, so an entry whose posts have them is disqualified. Ask for reposts, quotes and likes in your own words if you like, but never post the same update again and again, and never ask anyone to repost the same thing many times. Follow the X Rules.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22+, standard library only) copies `POSTS.json` from this repository to `/output/POSTS.json`, after checking it is valid JSON of the `{"posts": [...]}` shape. That is all the program has to do — the house reads the posts themselves from X.

`POSTS.json` currently holds an empty placeholder list. Fill it with your posts' addresses (each as X's Share button gives it: `https://x.com/<handle>/status/<id>`), up to 15, before submitting. To add a post later — make.fun posted again, or you tied a post to another of its posts — add its address beside the others and submit the whole list again. Your last submission before the deadline counts, and only the posts it names.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
