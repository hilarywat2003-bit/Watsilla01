import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const Black: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#000" }} />
);

// Overlay that fades the picture to black over its sequence.
export const FadeToBlack: React.FC<{ frames: number }> = ({ frames }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000",
        opacity: interpolate(frame, [0, frames], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    />
  );
};
