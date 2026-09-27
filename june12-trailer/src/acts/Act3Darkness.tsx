import { AbsoluteFill, Sequence, Series } from "remotion";
import { DialogueCard } from "../components/DialogueCard";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";
import { TitleCard } from "../components/TitleCard";

// Act III — "The Darkness" (0:42 – 1:05)
export const Act3Darkness: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence
          name="Card: Abacha seizes power"
          durationInFrames={105}
        >
          <TitleCard
            mode="cut"
            lines={[
              "November 1993.",
              "General Sani Abacha seizes absolute power.",
            ]}
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 13" durationInFrames={45}>
          <ShotCard
            num="13"
            framing="Int. Presidential villa"
            light="interior"
            desc="ABACHA (50) sits at Babangida's desk. He has not decorated the office. The room already knows who is in it. AL-MUSTAPHA (38) stands behind his left shoulder."
          />
        </Series.Sequence>
        <Series.Sequence name="Abacha decree" durationInFrames={120}>
          <DialogueCard
            framing="Presidential villa — Abacha"
            light="interior"
            speaker="Abacha"
            note="(reading from a decree)"
            line="The government of Nigeria shall not be subject to the jurisdiction of any court of law. No decision taken in the interest of state security shall be questioned, reviewed, or reversed."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 14" durationInFrames={30}>
          <ShotCard
            num="14"
            framing="Tight on Al-Mustapha"
            light="interior"
            desc="He is listening. He is very still. His face is the most controlled thing in the room."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 15" durationInFrames={60}>
          <ShotCard
            num="15"
            framing="Newsroom"
            light="grey"
            desc="Journalists dragged from a newsroom. Papers scattered across the floor."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 16" durationInFrames={60}>
          <ShotCard
            num="16"
            framing="Newsroom"
            light="grey"
            desc="TUNDE at his desk, typing at speed, glancing at the door."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 17 — Chukwu" durationInFrames={75}>
          <DialogueCard
            framing="Shot 17 · Newsroom — Chukwu"
            light="grey"
            speaker="Chukwu (Editor)"
            line="The point is being alive long enough to report it when it's safe to."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 18 — Tunde" durationInFrames={75}>
          <DialogueCard
            framing="Shot 18 · Newsroom — Tunde"
            light="grey"
            speaker="Tunde"
            note="(pulling a photograph of the old woman from the wall)"
            line="Run it on the front page. No caption. Let them figure out what it means."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 19" durationInFrames={60}>
          <ShotCard
            num="19"
            framing="Medium"
            light="interior"
            desc="COLONEL DANJUMA (48) in uniform, watching something off-frame. His face controlled. His jaw tight. A man who is staying silent longer than silence can hold."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 20" durationInFrames={60}>
          <ShotCard
            num="20"
            framing="Int. Prison corridor"
            light="night"
            desc="An iron door closing. The sound of it shutting. Then silence on the other side."
          />
        </Series.Sequence>
      </Series>

      <Sequence
        name="Cue: orchestral note holds"
        
        durationInFrames={300}
      >
        <MusicCue text="The orchestral note and cello hold beneath the regime." />
      </Sequence>
      <Sequence name="Cue: choir enters" from={300} durationInFrames={390}>
        <MusicCue text="The music rises. A low choir enters — African voices under the strings, sustaining a sound." />
      </Sequence>
    </AbsoluteFill>
  );
};
