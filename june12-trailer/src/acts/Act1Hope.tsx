import { AbsoluteFill, Sequence, Series } from "remotion";
import { Black } from "../components/Black";
import { MusicCue } from "../components/MusicCue";
import { ShotCard } from "../components/ShotCard";
import { Subtitle } from "../components/Subtitle";
import { TitleCard } from "../components/TitleCard";

// Act I — "The Hope" (0:00 – 0:22)
export const Act1Hope: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Cold open — black" durationInFrames={60}>
          <Black />
        </Series.Sequence>
        <Series.Sequence name="Card: Nigeria. 1993." durationInFrames={90}>
          <TitleCard mode="type" lines={["Nigeria. 1993."]} />
        </Series.Sequence>
        <Series.Sequence name="Shot 1" durationInFrames={60}>
          <ShotCard
            num="1"
            framing="Wide"
            light="dawn"
            desc="Lagos at dawn. Still. The city holding its breath. Light just beginning to touch the tops of buildings and palm trees."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 2" durationInFrames={60}>
          <ShotCard
            num="2"
            framing="Close"
            light="dawn"
            desc="The hands of an old woman in a polling queue. They are trembling. She is gripping her ballot paper the way you grip a precious thing."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 3" durationInFrames={60}>
          <ShotCard
            num="3"
            framing="Close"
            light="dawn"
            desc="Her face. Looking up. Lifted toward something. The light is in her eyes."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 4" durationInFrames={75}>
          <ShotCard
            num="4"
            framing="Medium"
            light="day"
            desc="EMEKA (22), young man in a white agbada, drops his ballot in the box. He steps back. He looks at the box. He does not move for a moment. Something is happening in his face that has never happened before."
          />
        </Series.Sequence>
        <Series.Sequence name="Shot 5" durationInFrames={75}>
          <ShotCard
            num="5"
            framing="Wide"
            light="day"
            desc="A long queue stretching out of frame. People of every age. Early morning light raking across them. The most ordinary, extraordinary image in the film."
          />
        </Series.Sequence>
        <Series.Sequence
          name="Card: The result was annulled"
          durationInFrames={180}
        >
          <TitleCard
            mode="fade"
            stagger={45}
            lines={["The result was annulled.", "Eleven days later."]}
          />
        </Series.Sequence>
      </Series>

      <Sequence name="Radio V.O." from={330} durationInFrames={150}>
        <Subtitle
          speaker="Radio Voice (V.O.)"
          line="This is June 12, 1993. International observers are calling this the most peaceful election in Nigeria's history."
        />
      </Sequence>

      <Sequence name="Cue: pen on paper" from={30} durationInFrames={120}>
        <MusicCue text="A single sound. The scratch of pen on paper. The mark of a ballot." />
      </Sequence>
      <Sequence name="Cue: talking drum" from={150} durationInFrames={330}>
        <MusicCue text="A single talking drum. Quiet. Ceremonial. Warm, hopeful." />
      </Sequence>
      <Sequence name="Cue: drum stops" from={480} durationInFrames={180}>
        <MusicCue text="The drum stops on “annulled.” Total silence." />
      </Sequence>
    </AbsoluteFill>
  );
};
