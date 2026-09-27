import { AbsoluteFill, Sequence, Series } from "remotion";
import { DialogueCard } from "../components/DialogueCard";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";

// Act VI — "The Break" (1:52 – 2:10)
export const Act6Break: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Shot 36" durationInFrames={60}>
          <ShotCard
            num="36"
            framing="Int. Presidential villa corridor — night"
            light="night"
            desc="AL-MUSTAPHA stands at the end of the corridor. Completely still. A guard approaches him and speaks. Al-Mustapha goes very still — in a different way. The stillness of calculation."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 37" durationInFrames={45}>
          <ShotCard
            num="37"
            framing="Villa corridor — night"
            light="night"
            desc="Al-Mustapha steps to the door. He opens it. The camera stays in the corridor. Does not follow him inside. The door closes."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 38" durationInFrames={45}>
          <ShotCard
            num="38"
            framing="Int. The Witness newsroom"
            light="grey"
            desc="TUNDE's phone rings. He answers. He listens. He stands up very slowly."
          />
        </Series.Sequence>
        <Series.Sequence name="Tunde line" durationInFrames={45}>
          <DialogueCard
            framing="Newsroom — Tunde"
            light="grey"
            speaker="Tunde"
            note="(to the room — voice breaking on the word)"
            line="Abacha is dead."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 39" durationInFrames={45}>
          <ShotCard
            num="39"
            framing="The newsroom"
            light="grey"
            desc="Silence. Then someone begins to weep. Not from sadness. Something more complicated. The news moving through the room like water."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 40" durationInFrames={60}>
          <ShotCard
            num="40"
            framing="Int. Supreme Military Council"
            light="interior"
            desc="ABDULSALAMI (55) at the head of the table. He looks like a man who did not ask for this room and has decided to use it honestly."
          />
        </Series.Sequence>
        <Series.Sequence name="Abdulsalami line" durationInFrames={150}>
          <DialogueCard
            framing="Supreme Military Council — Abdulsalami"
            light="interior"
            speaker="Abdulsalami"
            note="(to the generals — clear, final, no performance)"
            line="We will hold free elections. And we will hand power to a civilian government on May 29, 1999. Nine months from now. No extensions. No excuses. No coup."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 41" durationInFrames={90}>
          <ShotCard
            num="41"
            framing="Close"
            light="interior"
            desc="DANJUMA — three chairs from Abdulsalami — exhales. The first full breath in five years. The camera is close enough to see it."
          />
        </Series.Sequence>
      </Series>

      <Sequence name="Cue: ambient only"  durationInFrames={240}>
        <MusicCue text="Silence continues. Ambient only — a generator. A distant call to prayer." />
      </Sequence>
      <Sequence name="Cue: piano" from={240} durationInFrames={300}>
        <MusicCue text="A single piano note. Very simple. Very careful. Not hopeful yet." />
      </Sequence>
    </AbsoluteFill>
  );
};
