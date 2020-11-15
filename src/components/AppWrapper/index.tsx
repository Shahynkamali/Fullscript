import React, { useMemo } from "react";
import { isIE } from "react-device-detect";

interface Props {
  children: React.ReactNode;
  column?: number;
  gap?: number;
}

const defineColumns = (column: number, gap: number): string => {
  return isIE
    ? "app-wrappper--IE"
    : `
        grid gap-3 sm:grid-cols-${Math.round(column).toString()}
        xl:grid-cols-${Math.round(column + 1).toString()}
        gap-${gap.toString()}
        sm:gap-${Math.round(gap - 1).toString()}
        xl:gap-${Math.round(gap + 1).toString()}
    `.replace(/ /g, " ");
};

const AppWrapper: React.FC<Props> = ({ column = 3, gap = 3, children }) => {
  const dimensions: string = useMemo<string>(() => defineColumns(column, gap), [
    column,
    gap,
  ]);

  return <div className={dimensions}>{children}</div>;
};

export default AppWrapper;
