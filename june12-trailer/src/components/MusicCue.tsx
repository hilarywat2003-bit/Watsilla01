import { Interactive, interpolate, useCurrentFrame } from "remotion";
import { fontFamily } from "../fonts";

// Sound and music direction, shown in the bottom letterbox bar until a score exists.
export const MusicCue: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Music cue"
      style={{
        position: "absolute",
        left: 160,
        right: 160,
        bottom: 28,
        height: 76,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily,
        fontSize: 26,
        fontStyle: "italic",
        lineHeight: 1.3,
        color: "#8a9a78",
        opacity: interpolate(frame, [0, 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      ♪ {text}
    </Interactive.Div>
  );
};
