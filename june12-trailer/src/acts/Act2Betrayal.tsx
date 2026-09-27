import { AbsoluteFill, Sequence, Series } from "remotion";
import { DialogueCard } from "../components/DialogueCard";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";

// Act II — "The Betrayal" (0:22 – 0:42)
export const Act2Betrayal: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Shot 6" durationInFrames={75}>
          <ShotCard
            num="6"
            framing="Int. Military headquarters — night"
            light="interior"
            desc="BABANGIDA (52) signs a document. He pushes it across the table. We never see his face — only his hand and the pen and the paper."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 7" durationInFrames={75}>
          <ShotCard
            num="7"
            framing="Ext. Street — night"
            light="night"
            desc="A soldier tears an election result bulletin off a wall. The paper tears badly. Half of it stays on the wall. Half of it comes away in his hands."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 8" durationInFrames={75}>
          <ShotCard
            num="8"
            framing="Close"
            light="night"
            desc="TUNDE (28), photojournalist, watching from a distance. His camera is raised. He is recording. He never stops recording."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 9" durationInFrames={75}>
          <ShotCard
            num="9"
            framing="Ext. Abiola's compound — dawn"
            light="dawn"
            desc="Military vehicles arriving in silence. Twenty soldiers fan out. Kudirat at the window, watching."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 10" durationInFrames={45}>
          <ShotCard
            num="10"
            framing="Int. Abiola's staircase — dawn"
            light="dawn"
            desc="ABIOLA (58) descends in his agbada. Unhurried. As if he has made his peace with every step."
          />
        </Series.Sequence>
        <Series.Sequence name="Kudirat line" durationInFrames={60}>
          <DialogueCard
            framing="Staircase — Kudirat"
            light="dawn"
            speaker="Kudirat"
            note="(grabbing his arm)"
            line="M.K.O. They will not let you come back."
          />
        </Series.Sequence>
        <Series.Sequence name="Abiola line" durationInFrames={135}>
          <DialogueCard
            framing="Staircase — Abiola"
            light="dawn"
            speaker="Abiola"
            note="(taking her hands — very quiet)"
            line="If I run, the mandate dies with my running. I will die as president. Not as a fugitive."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 11" durationInFrames={30}>
          <ShotCard
            num="11"
            framing="Ext. Compound"
            light="dawn"
            desc="He raises one hand as he reaches the soldiers. Not resistance. Simply: I am coming. He gets into the jeep. The door closes."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 12" durationInFrames={30}>
          <ShotCard
            num="12"
            framing="Close"
            light="dawn"
            desc="KUDIRAT. Standing in the empty compound. Watching the convoy go. She does not move. She watches until there is nothing left to watch."
          />
        </Series.Sequence>
      </Series>

      <Sequence name="Cue: orchestral note"  durationInFrames={450}>
        <MusicCue text="A low, sustained orchestral note. Building very slowly — a presence under everything." />
      </Sequence>
      <Sequence name="Cue: cello" from={450} durationInFrames={150}>
        <MusicCue text="The note has grown. A cello enters under it. Something pulled taut." />
      </Sequence>
    </AbsoluteFill>
  );
};
