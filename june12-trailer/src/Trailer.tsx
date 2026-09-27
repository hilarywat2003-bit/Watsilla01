import {
  AbsoluteFill,
  Series,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Act1Hope } from "./acts/Act1Hope";
import { Act2Betrayal } from "./acts/Act2Betrayal";
import { Act3Darkness } from "./acts/Act3Darkness";
import { Act4People } from "./acts/Act4People";
import { Act5Weight } from "./acts/Act5Weight";
import { Act6Break } from "./acts/Act6Break";
import { Act7Title } from "./acts/Act7Title";
import { fontFamily } from "./fonts";

// Start frame of each act at 30 fps, for the HUD label.
const ACTS = [
  { from: 0, label: "Act I — The Hope" },
  { from: 660, label: "Act II — The Betrayal" },
  { from: 1260, label: "Act III — The Darkness" },
  { from: 1950, label: "Act IV — The People" },
  { from: 2700, label: "Act V — The Weight" },
  { from: 3360, label: "Act VI — The Break" },
  { from: 3900, label: "Act VII — The Title" },
];

const timecode = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

// Animatic overlay in the top letterbox bar: act and running time.
const Hud: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const act = [...ACTS].reverse().find((a) => frame >= a.from) ?? ACTS[0];

  return (
    <AbsoluteFill
      style={{
        height: 132,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 120px",
        fontFamily,
        fontSize: 24,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: "#5c584c",
      }}
    >
      <div>June 12 · Animatic</div>
      <div style={{ color: "#b8832a" }}>{act.label}</div>
      <div>
        {timecode(frame / fps)} / {timecode(durationInFrames / fps)}
      </div>
    </AbsoluteFill>
  );
};

export const Trailer: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <Series>
        <Series.Sequence name="Act I — The Hope" durationInFrames={660}>
          <Act1Hope />
        </Series.Sequence>
        <Series.Sequence name="Act II — The Betrayal" durationInFrames={600}>
          <Act2Betrayal />
        </Series.Sequence>
        <Series.Sequence name="Act III — The Darkness" durationInFrames={690}>
          <Act3Darkness />
        </Series.Sequence>
        <Series.Sequence name="Act IV — The People" durationInFrames={750}>
          <Act4People />
        </Series.Sequence>
        <Series.Sequence name="Act V — The Weight" durationInFrames={660}>
          <Act5Weight />
        </Series.Sequence>
        <Series.Sequence name="Act VI — The Break" durationInFrames={540}>
          <Act6Break />
        </Series.Sequence>
        <Series.Sequence name="Act VII — The Title" durationInFrames={360}>
          <Act7Title />
        </Series.Sequence>
      </Series>
      <Hud />
    </AbsoluteFill>
  );
};
