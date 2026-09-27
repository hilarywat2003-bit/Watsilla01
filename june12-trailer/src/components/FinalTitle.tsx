import {
  AbsoluteFill,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { fontFamily } from "../fonts";

export const FinalTitle: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily,
        color: "#e8e4da",
      }}
    >
      <Interactive.Div
        name="Title"
        style={{
          fontSize: 220,
          fontWeight: 700,
          letterSpacing: 44,
          marginRight: -44,
          opacity: interpolate(frame, [0, 6], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        JUNE 12
      </Interactive.Div>
      <Interactive.Div
        name="Tagline"
        style={{
          fontSize: 28,
          letterSpacing: 6,
          textTransform: "uppercase",
          color: "#8a8574",
          marginTop: 24,
          opacity: interpolate(frame, [12, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Based on historical record · Some names are real · All of it happened
      </Interactive.Div>
      <Interactive.Div
        name="Logline"
        style={{
          fontSize: 36,
          fontStyle: "italic",
          lineHeight: 1.6,
          color: "#9a9584",
          marginTop: 48,
          opacity: interpolate(frame, [24, 40], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Nigeria, 1993. A stolen election. Five years of darkness.
        <br />
        The people who refused to let it be forgotten.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
