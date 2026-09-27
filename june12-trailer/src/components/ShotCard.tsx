import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { fontFamily } from "../fonts";
import { Light, Plate } from "./Plate";

type Props = {
  num: string;
  framing: string;
  desc: string;
  light: Light;
};

// Placeholder frame for a shot: the shot number, framing and the script's description.
export const ShotCard: React.FC<Props> = ({ num, framing, desc, light }) => {
  const frame = useCurrentFrame();
  const descSize = desc.length > 260 ? 44 : desc.length > 170 ? 50 : 58;

  return (
    <Plate light={light}>
      <Interactive.Div
        name="Shot label"
        style={{
          position: "absolute",
          left: 120,
          top: 190,
          fontFamily,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: 6,
          color: "#b8832a",
          textTransform: "uppercase",
          opacity: interpolate(frame, [0, 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Shot {num} · {framing}
      </Interactive.Div>
      <Interactive.Div
        name="Shot description"
        style={{
          position: "absolute",
          left: 120,
          right: 120,
          top: 270,
          fontFamily,
          fontSize: descSize,
          lineHeight: 1.35,
          color: "#d8d3c4",
          opacity: interpolate(frame, [0, 10], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {desc}
      </Interactive.Div>
    </Plate>
  );
};
