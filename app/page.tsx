import React from "react";
import Group from "@/components/Group";
import Tile from "@/components/Tile";
import { ImagesProvider } from "@/utils/images";
import CustomCursor from "@/utils/cursor";

import path from "path";
import { readdir } from "fs/promises";

const Block2 = () => (
  <Group direction="horizontal">
    <Group direction="vertical">
      <Tile />
      <Tile />
    </Group>
    <Group direction="vertical">
      <Tile />
      <Tile />
    </Group>
  </Group>
);

const Block4 = () => (
  <Group direction="horizontal">
    <Group direction="vertical">
      <Block2 />
      <Block2 />
    </Group>
    <Group direction="vertical">
      <Block2 />
      <Block2 />
    </Group>
  </Group>
);

const Block8 = () => (
  <Group direction="horizontal">
    <Group direction="vertical">
      <Block4 />
      <Block4 />
    </Group>
    <Group direction="vertical">
      <Block4 />
      <Block4 />
    </Group>
  </Group>
);

const Page = async () => {
  const imagesPath = path.resolve(process.cwd(), "public", "images");
  const images = await readdir(imagesPath);

  return (
    <ImagesProvider images={images}>
      <main id="frame">
        <Block8 />
      </main>
      <CustomCursor />
    </ImagesProvider>
  );
};

export default Page;
