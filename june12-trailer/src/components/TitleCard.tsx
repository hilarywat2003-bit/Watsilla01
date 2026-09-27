import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { fontFamily } from "../fonts";

type Props = {
  lines: string[];
  // "type": letter by letter. "fade": each line fades in, `stagger` frames apart. "cut": all at once.
  mode: "type" | "fade" | "cut";
  stagger?: number;
};

// White text on black, as the script's title cards.
export const TitleCard: React.FC<Props> = ({ lines, mode, stagger = 0 }) => {
  const frame = useCurrentFrame();
  const typed = Math.floor(frame / 2);
  let offset = 0;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily,
        fontSize: 72,
        fontWeight: 700,
        letterSpacing: 8,
        lineHeight: 1.6,
        textTransform: "uppercase",
        color: "#e8e4da",
        padding: "0 160px",
      }}
    >
      {lines.map((line, i) => {
        const start = offset;
        offset += line.length;
        const visible =
          mode === "type" ? line.slice(0, Math.max(0, typed - start)) : line;
        const opacity =
          mode === "fade"
            ? interpolate(frame, [i * stagger, i * stagger + 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              })
            : 1;
        return (
          <div key={line} style={{ opacity }}>
            {/* Invisible remainder keeps the line from shifting while it types. */}
            {visible}
            <span style={{ opacity: 0 }}>{line.slice(visible.length)}</span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
