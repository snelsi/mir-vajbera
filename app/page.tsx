import React from "react";
import Group from "@/components/Group";
import Tile from "@/components/Tile";
import CustomCursor from "@/utils/cursor";

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

const Page = async () => {
  return (
    <>
      <main id="frame">
        <Block4 />
      </main>
      <CustomCursor />
    </>
  );
};

export default Page;
