import { AbsoluteFill, Sequence, Series } from "remotion";
import { DialogueCard } from "../components/DialogueCard";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";

// Act IV — "The People" (1:05 – 1:30)
export const Act4People: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Shot 21 — Amaka" durationInFrames={75}>
          <ShotCard
            num="21"
            framing="Protest line"
            light="day"
            desc="AMAKA (26) — student activist — in a protest line. She is looking directly at something off-camera and she is not frightened. She is decided."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 22 — Kudirat" durationInFrames={75}>
          <ShotCard
            num="22"
            framing="Office"
            light="interior"
            desc="KUDIRAT — at her desk. Phone in one hand, folder in the other, pen behind her ear. The most alive person in the frame. Three days before she is killed."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 23 — Saro-Wiwa" durationInFrames={75}>
          <ShotCard
            num="23"
            framing="Tribunal"
            light="grey"
            desc="KEN SARO-WIWA (54) — at a tribunal. He is holding pages. He is very still. He looks at the room the way a man looks at something he has already decided about."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 24 — Tunde" durationInFrames={75}>
          <ShotCard
            num="24"
            framing="Darkroom"
            light="interior"
            desc="TUNDE — alone. His darkroom. A photograph developing in the tray. He watches it appear. His face."
          />
        </Series.Sequence>
        <Series.Sequence name="Saro-Wiwa line 1" durationInFrames={120}>
          <DialogueCard
            framing="Tribunal — Saro-Wiwa"
            light="grey"
            speaker="Saro-Wiwa"
            note="(tribunal — calm, devastating)"
            line="What is being done here is the attempted murder of a movement. The attempted murder of the idea that a poor people can stand on their land and demand what is rightfully theirs."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 25" durationInFrames={75}>
          <ShotCard
            num="25"
            framing="The international world"
            light="day"
            desc="Diplomats on phones. Telegrams unanswered. A Shell executive at an AGM: “Shell does not interfere in the internal affairs of sovereign nations.”"
          />
        </Series.Sequence>
        <Series.Sequence name="Saro-Wiwa line 2" durationInFrames={135}>
          <DialogueCard
            framing="Tribunal — Saro-Wiwa"
            light="grey"
            speaker="Saro-Wiwa"
            note="(continuing — the room absolutely still)"
            line="History will judge this tribunal. History will judge the government that assembled it. And history — unlike this court — is not subject to military decree."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 26" durationInFrames={60}>
          <ShotCard
            num="26"
            framing="Presidential villa"
            light="interior"
            desc="ABACHA — staring at a stack of international clemency appeals from heads of state, Nobel laureates, the Vatican. He does not pick them up."
          />
        </Series.Sequence>
        <Series.Sequence name="Abacha line" durationInFrames={60}>
          <DialogueCard
            framing="Presidential villa — Abacha"
            light="interior"
            speaker="Abacha"
            note="(to Al-Mustapha — final, absolute)"
            line="We have oil, Hamza."
          />
        </Series.Sequence>
      </Series>

      <Sequence name="Cue: no music"  durationInFrames={300}>
        <MusicCue text="No music — just ambient sound under each face." />
      </Sequence>
      <Sequence name="Cue: choir rises" from={300} durationInFrames={450}>
        <MusicCue text="The choir rises again. The strings underneath it tighten." />
      </Sequence>
    </AbsoluteFill>
  );
};
