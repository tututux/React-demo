import React from "react";
import { Typography } from "antd";
import { HomeHeaderProps } from "Types/homeHeader";

const HomeHeader: React.FC<HomeHeaderProps> = ({ title }) => {
  return <Typography.Title>{title}</Typography.Title>;
};

export default HomeHeader;
