import { cn } from "@/lib/utils";
import React, { FC } from "react";
import Container from "./container";
import Categories from "./categories";
import SortPopup from "./sort-popup";

type Props = {
  className?: string;
};

const TopBar: FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-xl shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};

export default TopBar;
