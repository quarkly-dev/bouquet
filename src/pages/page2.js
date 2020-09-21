import React from "react";
import theme from "theme";
import { Theme, Button, Icon, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Button font="normal 800 16.2px/1.5 --fontFamily-googleRoboto" hover-transform="--rotate90" transition="--transformOut">
				Button
			</Button>
			<Icon category="md" icon={MdFace} />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				position="absolute"
				top="146px"
				right="402px"
				bottom="auto"
				left="auto"
				width="325.625px"
				height="86px"
				color="--red"
				mix-blend-mode="saturation"
				cursor="move"
			>
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Section padding="140px 0" sm-padding="40px 0" background="url(https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80) center/cover">
			<Components.Card />
			<Components.Card />
			<Components.Card background="--secondaryGradient">
				<Override slot="text1" font="--headline3" />
			</Components.Card>
			<Box max-width="240px" padding="50px 80px 80px 50px" color="--dark" background="--color-light">
				<Text
					as="h4"
					font="--base"
					color="--grey"
					letter-spacing="1px"
					text-transform="uppercase"
					margin="6px 0"
				>
					About me
				</Text>
				<Text as="h2" font="--headline2" margin="0 0 12px 0">
					Hey I’m David
				</Text>
				<Text font="--base">
					My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
				</Text>
			</Box>
		</Section>
	</Theme>;
});