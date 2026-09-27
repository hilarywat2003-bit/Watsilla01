import "./index.css";
import { Composition, Folder } from "remotion";
import { Act1Hope } from "./acts/Act1Hope";
import { Act2Betrayal } from "./acts/Act2Betrayal";
import { Act3Darkness } from "./acts/Act3Darkness";
import { Act4People } from "./acts/Act4People";
import { Act5Weight } from "./acts/Act5Weight";
import { Act6Break } from "./acts/Act6Break";
import { Act7Title } from "./acts/Act7Title";
import { Trailer } from "./Trailer";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="June12-Acts">
        <Composition
          id="Act1-Hope"
          component={Act1Hope}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={660}
        />
        <Composition
          id="Act2-Betrayal"
          component={Act2Betrayal}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={600}
        />
        <Composition
          id="Act3-Darkness"
          component={Act3Darkness}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={690}
        />
        <Composition
          id="Act4-People"
          component={Act4People}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={750}
        />
        <Composition
          id="Act5-Weight"
          component={Act5Weight}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={660}
        />
        <Composition
          id="Act6-Break"
          component={Act6Break}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={540}
        />
        <Composition
          id="Act7-Title"
          component={Act7Title}
          width={1920}
          height={1080}
          fps={30}
          durationInFrames={360}
        />
      </Folder>
      <Composition
        id="June12Trailer"
        component={Trailer}
        width={1920}
        height={1080}
        fps={30}
        durationInFrames={4260}
      />
    </>
  );
};
