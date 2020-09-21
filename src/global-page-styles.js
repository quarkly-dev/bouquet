import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "index": {
        "border-width": 0,
        "border-style": "",
        "border-color": ""
    },
    "blog": {
        "background": "--secondaryGradient"
    },
    "contact": {
        "background": "#4a1616",
        "text-decoration-line": "",
        "color": "#953a3a"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
