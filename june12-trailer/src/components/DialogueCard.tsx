import { Interactive, interpolate, useCurrentFrame } from "remotion";
import { fontFamily } from "../fonts";
import { Light, Plate } from "./Plate";
import { Subtitle } from "./Subtitle";

type Props = {
  framing: string;
  speaker: string;
  note?: string;
  line: string;
  light: Light;
};

// A dialogue beat: the speaker's framing on the plate, the line as a subtitle.
export const DialogueCard: React.FC<Props> = ({
  framing,
  speaker,
  note,
  line,
  light,
}) => {
  const frame = useCurrentFrame();

  return (
    <Plate light={light}>
      <Interactive.Div
        name="Framing label"
        style={{
          position: "absolute",
          left: 120,
          top: 190,
          fontFamily,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 6,
          color: "#6f6a5c",
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {framing}
      </Interactive.Div>
      <Subtitle speaker={speaker} note={note} line={line} />
    </Plate>
  );
};
