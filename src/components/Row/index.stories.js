import React from "react";

import Row from "../Row";

export default {
  title: "Example/Row",
  component: Row,
};

const Template = (args) => <Row {...args} />;

export const RowOne = Template.bind({});
RowOne.args = {
  item: "Some string",
  index: 1,
  removeHandler: () => console.log("remove"),
};
