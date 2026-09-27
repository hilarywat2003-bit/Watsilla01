import { useId } from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

export type Light = "dawn" | "day" | "night" | "interior" | "grey";

const LIGHTS: Record<Light, string> = {
  dawn: "radial-gradient(ellipse at 50% 0%, #5a3a22 0%, #22170f 55%, #0b0806 100%)",
  day: "radial-gradient(ellipse at 50% 15%, #4d4838 0%, #211f17 60%, #0c0b08 100%)",
  night:
    "radial-gradient(ellipse at 30% 30%, #1c2536 0%, #0c1119 60%, #040507 100%)",
  interior:
    "radial-gradient(ellipse at 70% 40%, #3f2c15 0%, #18110a 60%, #070504 100%)",
  grey: "radial-gradient(ellipse at 50% 10%, #3d3b3a 0%, #1a1a1a 60%, #09090a 100%)",
};

// Letterboxed (2.39:1) storyboard plate with a slow push-in, grain and vignette.
export const Plate: React.FC<{ light: Light; children?: React.ReactNode }> = ({
  light,
  children,
}) => {
  const frame = useCurrentFrame();
  const grainId = useId().replace(/:/g, "");

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <AbsoluteFill
        style={{ top: 132, bottom: 132, height: "auto", overflow: "hidden" }}
      >
        <AbsoluteFill
          style={{
            background: LIGHTS[light],
            scale: interpolate(frame, [0, 300], [1, 1.1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.33, 0, 0.67, 1),
            }),
          }}
        />
        <AbsoluteFill style={{ opacity: 0.09, mixBlendMode: "screen" }}>
          <svg width="100%" height="100%">
            <filter id={grainId}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves={2}
                seed={frame % 12}
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter={`url(#${grainId})`} />
          </svg>
        </AbsoluteFill>
        <AbsoluteFill
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </AbsoluteFill>
      {children}
    </AbsoluteFill>
  );
};
