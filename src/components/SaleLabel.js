import atomize from "@quarkly/atomize";
import styled, { keyframes } from "styled-components"; // Create the keyframes

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`; // Here we create a component that will rotate everything we pass in over two seconds

const Rotate = styled.div`
  display: block;
  animation: ${rotate} 10s linear infinite;
  width: 220px;
  height: 220px;
  background: rgba(0, 0, 0, 0) url("https://artemzhigalin.ru/src/sales-bouquet.svg") 0% 0% /100% no-repeat scroll padding-box;
`;
export default atomize(Rotate)({
	name: "Sdaasd",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Sdaasd — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});