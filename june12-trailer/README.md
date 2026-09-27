# JUNE 12 — Trailer Animatic

A Remotion animatic of the 2:22 theatrical trailer script for _JUNE 12_
(1920×1080, 30 fps, 4260 frames). Every shot is a letterboxed storyboard
placeholder carrying its shot number, framing and the script's description;
dialogue appears as subtitles, title cards run as the script directs, and
music and sound cues sit in the bottom letterbox bar until a score exists.

## Structure

| Composition     | Time        | File                        |
| --------------- | ----------- | --------------------------- |
| `Act1-Hope`     | 0:00 – 0:22 | `src/acts/Act1Hope.tsx`     |
| `Act2-Betrayal` | 0:22 – 0:42 | `src/acts/Act2Betrayal.tsx` |
| `Act3-Darkness` | 0:42 – 1:05 | `src/acts/Act3Darkness.tsx` |
| `Act4-People`   | 1:05 – 1:30 | `src/acts/Act4People.tsx`   |
| `Act5-Weight`   | 1:30 – 1:52 | `src/acts/Act5Weight.tsx`   |
| `Act6-Break`    | 1:52 – 2:10 | `src/acts/Act6Break.tsx`    |
| `Act7-Title`    | 2:10 – 2:22 | `src/acts/Act7Title.tsx`    |
| `June12Trailer` | 0:00 – 2:22 | `src/Trailer.tsx`           |

Each act is its own composition, so it can be previewed and retimed alone.
If you change an act's length, update its `durationInFrames` in both
`src/Root.tsx` and `src/Trailer.tsx`, and the act start frames in `ACTS`
in `src/Trailer.tsx`.

To replace a placeholder with footage, swap its `<ShotCard>` for a
`<Video>` from `@remotion/media` in the same `Series.Sequence`.

## Commands

```console
npm i                                   # install
npm run dev                             # open Remotion Studio
npx remotion render June12Trailer       # render out/June12Trailer.mp4
npm run lint                            # eslint + tsc
```

Courier Prime (SIL Open Font License) is bundled in `public/fonts`.
