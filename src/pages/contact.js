import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Components.AnimatedLogo background="--primaryGradient" />
		<Components.AnimatedLogo background="--primaryGradient" />
		<Components.AnimatedLogo background="--primaryGradient" />
		<Components.AnimatedLogo background="--primaryGradient" />
		<Components.AnimatedLogo background="--primaryGradient" />
	</Theme>;
});