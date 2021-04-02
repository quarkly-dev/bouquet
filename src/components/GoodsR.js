import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import OrderCard from "./OrderCard";
import ParallaxRight from "./ParallaxRight";
const defaultProps = {
	"padding": "0px 0px 52% 0px",
	"background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) center/110% no-repeat scroll padding-box",
	"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s,filter --transitionDuration-normal --transitionTimingFunction-easeInOut 0s",
	"hover-background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) center/100% no-repeat scroll padding-box",
	"position": "relative",
	"border-width": "0px 0px 12px 0px ",
	"border-style": "solid",
	"border-color": "--color-light"
};
const overrides = {
	"parallaxRight": {
		"kind": "ParallaxRight",
		"props": {
			"position": "absolute",
			"left": "auto",
			"top": "auto",
			"bottom": "70px",
			"right": "60px"
		}
	},
	"orderCard": {
		"kind": "OrderCard",
		"props": {
			"left": "auto",
			"right": "60px"
		}
	}
};

const GoodsR = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<ParallaxRight {...override("parallaxRight")}>
			<OrderCard {...override("orderCard")} />
		</ParallaxRight>
		{children}
	</Section>;
};

Object.assign(GoodsR, { ...Section,
	defaultProps,
	overrides
});
export default GoodsR;