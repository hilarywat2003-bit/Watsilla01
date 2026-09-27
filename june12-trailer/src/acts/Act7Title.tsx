import { AbsoluteFill, Sequence, Series } from "remotion";
import { Black, FadeToBlack } from "../components/Black";
import { DialogueCard } from "../components/DialogueCard";
import { FinalTitle } from "../components/FinalTitle";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";

// Act VII — "The Title" (2:10 – 2:22)
export const Act7Title: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Shot 42" durationInFrames={45}>
          <ShotCard
            num="42"
            framing="Oputa Panel"
            light="day"
            desc="DANJUMA at the witness table. Three folders in front of him. He places his hands flat on them. He looks at Justice Oputa. He has been waiting to do this for years."
          />
        </Series.Sequence>
        <Series.Sequence name="Danjuma line" durationInFrames={90}>
          <DialogueCard
            framing="Oputa Panel — Danjuma"
            light="day"
            speaker="Danjuma"
            note="(to Justice Oputa — without drama)"
            line="I took these because I needed to know they existed somewhere outside of that building. The documents were the only thing I could do. It wasn't enough. But it was what I had."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 43" durationInFrames={60}>
          <ShotCard
            num="43"
            framing="A polling station — year unmarked"
            light="day"
            desc="EMEKA (older now, a child on his shoulders) reaches the front of the queue. He crouches so the child can see him mark the ballot. He lifts the child back up. The child looks back over Emeka's shoulder at the box. The child's face."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 44" durationInFrames={45}>
          <ShotCard
            num="44"
            framing="Ogoniland — the creek"
            light="dawn"
            desc="The gas flare still burning above the tree line. Two boys, maybe twelve, throwing stones into the water. Competing for distance. Laughing at something entirely theirs. The camera holds on them. On their laughter. On the water. On the flare above the trees."
          />
        </Series.Sequence>
        <Series.Sequence name="Fade to black" durationInFrames={30}>
          <Black />
        </Series.Sequence>
        <Series.Sequence name="Title: JUNE 12" durationInFrames={90}>
          <FinalTitle />
        </Series.Sequence>
      </Series>

      <Sequence name="Fade out of shot 44" from={225} durationInFrames={15}>
        <FadeToBlack frames={15} />
      </Sequence>

      <Sequence name="Cue: piano and strings"  durationInFrames={240}>
        <MusicCue text="The piano builds, joined by quiet strings — something being carefully rebuilt. Earned." />
      </Sequence>
      <Sequence name="Cue: silence on title" from={270} durationInFrames={90}>
        <MusicCue text="Music stops the moment the title appears. Silence on the title." />
      </Sequence>
    </AbsoluteFill>
  );
};
