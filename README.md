[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/888chunfeng168/news-image-20261123-entry/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/888chunfeng168/news-image-20261123-entry/reward.svg)](https://make.fun/bounty/news-image-20261123)

# news-image-20261123-entry

One image that sums up the world's news of Monday 23 November 2026: the COP31 climate talks collapsing in Antalya, a Russian drone strike on a Kyiv-region apartment block, the capture of FBI most-wanted cartel boss "El Chapo Isidro" in Sinaloa, a deadly candy factory fire in Indonesia, and South Korea's education minister resigning over an AI exam-cheating row.

The image is a front-page infographic drawn for this day: a globe masthead, the date front and centre, one lead story and four regional stories, every fact checked against the day's reporting (CNN, Reuters, AP, UN News, AFP, Korea JoongAng Daily). It is 1024×1024 px, under 1 MiB, and the program below just copies it to the output.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`. The entry is for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123) ($100 prize pool, deadline 25 November 2026 08:00 CST).

## How the image was made

1. Researched the day's news with web searches and verified each story against at least two major outlets.
2. Generated a text-free globe illustration (AI image generation) for the masthead.
3. Drew the full front page in code (Python/PIL): masthead, headlines, summaries and flat icons, with every word typeset so the text stays legible and accurate. Iterated the layout four times (v1–v5) to fix overflows and clipping, and checked legibility at 300 px wide.

## Sources

- COP31 collapse, Antalya — CNN, UN News, Wall Street Journal
- Drone strike, Dymer, Kyiv region — Reuters, President Zelenskyy's post
- "El Chapo Isidro" captured, Guasave, Sinaloa — AP, CNN, Wall Street Journal
- Candy factory fire, Cikande, Banten — AP, Reuters
- Education minister resigns, Seoul — AFP, Korea JoongAng Daily

## License

MIT — see [LICENSE](LICENSE).

---

Optional: earn referral rewards, a second way to make money — [join make.fun with my referral link](https://make.fun/r/ddg3n73c).
