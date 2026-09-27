import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { fontFamily } from "../fonts";

type Props = {
  speaker: string;
  note?: string;
  line: string;
};

// A spoken line, set as a subtitle in the lower part of the frame.
export const Subtitle: React.FC<Props> = ({ speaker, note, line }) => {
  const frame = useCurrentFrame();
  const lineSize = line.length > 180 ? 46 : line.length > 110 ? 52 : 60;

  return (
    <Interactive.Div
      name="Subtitle"
      style={{
        position: "absolute",
        left: 160,
        right: 160,
        bottom: 170,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        fontFamily,
        opacity: interpolate(frame, [0, 6], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        }),
      }}
    >
      <div
        style={{
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "#b8832a",
        }}
      >
        {speaker}
      </div>
      {note ? (
        <div
          style={{
            fontSize: 26,
            fontStyle: "italic",
            color: "#8a8574",
            marginTop: 6,
          }}
        >
          {note}
        </div>
      ) : null}
      <div
        style={{
          fontSize: lineSize,
          fontStyle: "italic",
          lineHeight: 1.35,
          color: "#f2eee4",
          marginTop: 16,
          textShadow: "0 2px 12px rgba(0,0,0,0.95)",
        }}
      >
        {line}
      </div>
    </Interactive.Div>
  );
};
