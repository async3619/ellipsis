import React from "react";
import { Root } from "@components/Panel/Layout.styles";

export interface PanelLayoutProps {
    children: React.ReactNode;
}

export function PanelLayout({ children }: PanelLayoutProps) {
    return <Root direction="horizontal">{children}</Root>;
}
