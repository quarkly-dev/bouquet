import React, { useCallback, useState, useMemo } from "react";
import atomize from "@quarkly/atomize";
const Chaser = atomize.div`
position: fixed;
  pointer-events: none;
  mix-blend-mode: multiply;
  transition: opacity .3s ease-out;

`;

const ChaseCursor = ({
	"chase-size": chaseSize = "50px",
	"chase-color": chaseColor = "#6CFFE4",
	children,
	...rest
}) => {
	const [isOvered, setIsOvered] = useState(false);
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	});
	const handleMove = useCallback(event => {
		const {
			clientX,
			clientY
		} = event;
		setPosition({
			x: clientX,
			y: clientY
		});
	}, []);
	const handleEnter = useCallback(() => setIsOvered(true), []);
	const handleLeave = useCallback(() => setIsOvered(false), []);
	const chaser = useMemo(() => ({
		opacity: isOvered ? 1 : 0,
		transform: `translate(${position.x}px, ${position.y}px)`
	}), [isOvered, position]);
	return <div onMouseEnter={handleEnter} onMouseMove={handleMove} onMouseLeave={handleLeave} {...rest}>
		      
		{children}
		      
		<Chaser
			className="chaser"
			width={chaseSize}
			height={chaseSize}
			border-radius={chaseSize}
			top={`calc(-1 * ${chaseSize} / 2)`}
			left={`calc(-1 * ${chaseSize} / 2)`}
			background={chaseColor}
			style={chaser}
		/>
		    
	</div>;
};

export default atomize(ChaseCursor)({
	name: "ChaseCursor",
	propInfo: {
		"chase-size": {
			control: "input",
			transformer: "pixel",
			category: "Main"
		},
		"chase-color": {
			color: "color",
			category: "Main"
		}
	}
});