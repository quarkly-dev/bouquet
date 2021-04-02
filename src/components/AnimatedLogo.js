import React from "react";
import atomize from "@quarkly/atomize";
import WarpJs from "warpjs";

const Warp = props => {
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (!ref.current) return;
		const warp = new WarpJs(ref.current);
		let anim;
		warp.interpolate(1);
		warp.transform(([x, y]) => [x, y, y]);
		let offset = 0;

		function animate() {
			warp.transform(([x, y, oy]) => [x, oy + 4 * Math.sin(x / 20 + offset), oy]);
			offset += 0.3;
			anim = requestAnimationFrame(animate);
		}

		animate();
		return () => cancelAnimationFrame(anim);
	}, [ref.current]);
	return <div {...props}>
		      
		<svg width="60" height="60" ref={ref} viewBox="0 0 144 124">
			        
			<path d="M81.3987 10.5571C74.2777 0.397061 60.2697 -2.06594 50.1097 5.05306C39.9497 12.1741 37.4857 26.1821 44.6057 36.3421L63.0017 62.5921L81.3987 36.3421C86.6447 28.8251 86.9647 18.4991 81.3987 10.5571Z" fill="#191E22" />
			        
			<path d="M117.046 34.9511C107.136 27.4891 93.0506 29.4741 85.5886 39.3861L66.3086 64.9931L96.9586 74.3771C105.729 77.0421 115.648 74.1551 121.48 66.4081C128.943 56.4981 126.958 42.4141 117.046 34.9511Z" fill="#191E22" />
			        
			<path d="M95.3569 79.3029L65.0449 68.8799L65.5919 100.93C65.7679 110.095 71.5769 118.638 80.7469 121.789C92.4789 125.824 105.261 119.584 109.296 107.851C113.331 96.1189 107.09 83.3359 95.3569 79.3029Z" fill="#191E22" />
			        
			<path d="M15.4926 100.164C15.2816 112.57 25.1656 122.795 37.5706 123.008C49.9746 123.219 60.2026 113.333 60.4136 100.928L60.9586 68.8799L30.6476 79.3029C21.9856 82.3019 15.6566 90.4669 15.4926 100.164Z" fill="#191E22" />
			        
			<path d="M29.0466 74.3772L59.6966 64.9932L40.4166 39.3872C34.8886 32.0762 25.1666 28.5802 15.8936 31.4192C4.02962 35.0512 -2.64238 47.6142 0.990625 59.4762C4.62362 71.3392 17.1836 78.0112 29.0466 74.3772Z" fill="#191E22" />
			      
		</svg>
		    
	</div>;
};

export default atomize(Warp)({
	name: "Warp",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Warp — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
}, {
	width: "300px"
});