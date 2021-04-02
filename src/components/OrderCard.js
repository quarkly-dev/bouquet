import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Button, Box } from "@quarkly/widgets";
const defaultProps = {
	"left": "60px",
	"bottom": "70px",
	"top": "auto",
	"right": "auto",
	"font": "--lead",
	"color": "--light",
	"width": "330px",
	"background": "--color-darkL2",
	"padding": "12px 28px 28px 28px",
	"position": "static"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"children": "Rose flower symbolism"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"margin": "16px 0px 24px 0px",
			"children": "As you may know, the appearance of flowers can communicate a message, and today we'll unveil some of their meanings."
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"width": "100%",
			"border-radius": "0px",
			"background": "--color-purple",
			"color": "--dark",
			"font": "--lead",
			"text-transform": "uppercase",
			"letter-spacing": "1px",
			"children": "ORDER"
		}
	}
};

const OrderCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Button {...override("button")} />
		{children}
	</Box>;
};

Object.assign(OrderCard, { ...Box,
	defaultProps,
	overrides
});
export default OrderCard;