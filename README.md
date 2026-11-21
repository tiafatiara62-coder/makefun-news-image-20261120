[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/tiafatiara62-coder/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/tiafatiara62-coder/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# makefun-news-image-20261120

Built for [make.fun's news-image-20261120 bounty](https://make.fun/bounty/news-image-20261120) — sum up 20 November 2026's world news in one image.

One image that sums up the world news of Friday, 20 November 2026.

## The image

A code-drawn broadsheet front page (`entry.png`, 1024×1024, 204,188 bytes):
navy masthead with the date in large serif type, a six-number ticker, a hero
triptych (Kyiv's bridges under missile attack, Cyclone Akvan's landfall in
Odisha, the global AI sell-off chart), ten medium story cards each with a
small code-drawn scene illustration, twenty-four more briefs, a world map
with 26 numbered pins, and a DATE CHECK box naming the near-miss stories
that were deliberately left out because they belong to 19 or 21 November.
Every letter is drawn by code with PIL, so no text can garble. 37 verified
stories across 7 regions.

Stories covered: Russia's largest November strike on Kyiv (27 ballistic +
84 cruise missiles + 404 drones, 3 bridges damaged); Cyclone Akvan's
landfall near Gopalpur (~300,000 evacuated); the AI sell-off (Nasdaq
−5.28%, Nvidia −14%, SoftBank −14.5%, Kospi −5.2%); the UK–EU post-Brexit
deal; the COP31 final-day deadlock; a tanker struck in the Strait of
Hormuz; Iraqi forces retaking Jurf al-Sakhar; Italy's general strike;
Kenya's first oil well; Estonia closing its Russia border; a Russian cruise
missile landing in Poland; Japan's inflation picking up to 2.3%; and
twenty-four more verified developments from Lviv to Sydney.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR` (or `/output`) as `entry.png`, after checking the PNG
magic, the 1 MiB limit, and the 1024×1024 limit, and prints the output
SHA-256. Deterministic by construction: the output is a byte-for-byte copy
of the file in this repo.

## Run

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
