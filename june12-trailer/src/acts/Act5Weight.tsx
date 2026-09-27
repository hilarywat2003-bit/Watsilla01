import { AbsoluteFill, Sequence, Series } from "remotion";
import { DialogueCard } from "../components/DialogueCard";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";
import { TitleCard } from "../components/TitleCard";

// Act V — "The Weight" (1:30 – 1:52)
export const Act5Weight: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Shot 27" durationInFrames={60}>
          <ShotCard
            num="27"
            framing="Ext. Prison yard — dawn"
            light="grey"
            desc="A gallows in grey light. Newly constructed. Nine nooses. The sound of boots on gravel."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 28" durationInFrames={60}>
          <ShotCard
            num="28"
            framing="Prison yard"
            light="grey"
            desc="SARO-WIWA. Walking. His own clothes — not a prison uniform. He requested this. He holds his head exactly level."
          />
        </Series.Sequence>
        <Series.Sequence name="Saro-Wiwa last statement" durationInFrames={75}>
          <DialogueCard
            framing="Prison yard — Saro-Wiwa"
            light="grey"
            speaker="Saro-Wiwa"
            note="(last statement — quietly, to the officer)"
            line="Lord, take my soul. But the struggle continues."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 29" durationInFrames={60}>
          <ShotCard
            num="29"
            framing="The sky"
            light="dawn"
            desc="A bird on a wire above the prison yard. Startled — it lifts away. Climbs. Against grey-pink dawn. Climbing and climbing."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 30" durationInFrames={45}>
          <ShotCard
            num="30"
            framing="Hotel room"
            light="interior"
            desc="TUNDE sitting on the edge of the bed. He reaches for the radio. He turns it off. His hand remains on it. He does not move."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 31" durationInFrames={45}>
          <ShotCard
            num="31"
            framing="Lagos street — day"
            light="day"
            desc="KUDIRAT'S CAR moving through traffic. The camera on the car from outside. Moving. Moving."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 32" durationInFrames={30}>
          <ShotCard
            num="32"
            framing="Lagos street — day"
            light="day"
            desc="A motorcycle entering frame from behind."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 33" durationInFrames={30}>
          <ShotCard
            num="33"
            framing="Another street"
            light="day"
            desc="TUNDE hearing something. Turning. Running."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 34" durationInFrames={30}>
          <ShotCard
            num="34"
            framing="London"
            light="grey"
            desc="AMAKA — phone to her ear. The news reaching her face. She sits down very slowly."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 35" durationInFrames={30}>
          <ShotCard
            num="35"
            framing="Office"
            light="interior"
            desc="DANJUMA closes his eyes. He puts his hand flat on the desk. He keeps it there."
          />
        </Series.Sequence>
        <Series.Sequence name="Card: death toll" durationInFrames={195}>
          <TitleCard
            mode="fade"
            stagger={20}
            lines={[
              "Between 1993 and 1999,",
              "an estimated 2,000 Nigerians",
              "were killed.",
            ]}
          />
        </Series.Sequence>
      </Series>

      <Sequence name="Cue: music full"  durationInFrames={465}>
        <MusicCue text="MUSIC FULL. Choir and orchestra together — the sound of something tearing open. Building." />
      </Sequence>
      <Sequence name="Cue: music cuts" from={465} durationInFrames={195}>
        <MusicCue text="Music cuts on this card. Sudden total silence." />
      </Sequence>
    </AbsoluteFill>
  );
};
