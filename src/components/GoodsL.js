import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import OrderCard from "./OrderCard";
import Parallax from "./Parallax";
const defaultProps = {
	"padding": "0px 0px 52% 0px",
	"background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center/110% no-repeat scroll padding-box",
	"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s,filter --transitionDuration-normal --transitionTimingFunction-easeInOut 0s",
	"hover-background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center/100% no-repeat scroll padding-box",
	"position": "relative",
	"border-width": "0px 0px 12px 0px ",
	"border-style": "solid",
	"border-color": "--color-light"
};
const overrides = {
	"parallax": {
		"kind": "Parallax",
		"props": {
			"position": "absolute",
			"top": "auto",
			"right": "auto",
			"left": "60px",
			"bottom": "70px"
		}
	},
	"orderCard": {
		"kind": "OrderCard",
		"props": {}
	}
};

const GoodsL = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Parallax {...override("parallax")}>
			<OrderCard {...override("orderCard")} />
		</Parallax>
		{children}
	</Section>;
};

Object.assign(GoodsL, { ...Section,
	defaultProps,
	overrides
});
export default GoodsL;