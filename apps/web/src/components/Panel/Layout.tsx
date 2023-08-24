import React from "react";
import { Root } from "@components/Panel/Layout.styles";

export interface PanelLayoutProps {
    children: React.ReactNode;
    direction?: "horizontal" | "vertical";
}

export function PanelLayout({ children, direction = "horizontal" }: PanelLayoutProps) {
    return <Root direction={direction}>{children}</Root>;
}
