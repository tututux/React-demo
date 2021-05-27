import React from "react";
import { Typography } from "antd";
import { homeFooterProps } from "Types";

const HomeFooter: React.FC<homeFooterProps> = ({ text }) => {
  return <Typography.Text>{text}</Typography.Text>;
};

export default HomeFooter;
