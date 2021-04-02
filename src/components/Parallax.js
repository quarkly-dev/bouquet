import React from 'react';
import atomize from "@quarkly/atomize";
import Plx from 'react-plx';
const initialData = {
	start: 'self',
	startOffset: 0
};
const initialPropr = [{
	startValue: -200,
	endValue: 0,
	property: 'translateX'
}, {
	startValue: 0,
	endValue: 1,
	property: 'opacity'
}];

const ParallaxCard = ({
	children,
	properties,
	duration = 300,
	...rest
}) => {
	return <Plx {...rest} parallaxData={[{
		properties: initialPropr,
		duration,
		...initialData
	}]}>
		    
		{children}
		  
	</Plx>;
};

export default atomize(ParallaxCard)({
	name: "ParallaxCard",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "ParallaxCard — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		duration: {
			control: "input"
		},
		properties: {
			control: "input"
		}
	}
});