import React from "react";
import theme from "theme";
import { Theme, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Menu, SocialMedia, Stack, Section, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section padding="100px 0px 100px 0px" background="--color-light" position="relative">
			<Stack gap="0px" margin="0px 0px 61px 0px" padding="0px">
				<StackItem
					width="25%"
					border-width="0px 1px 1px 0px"
					border-style="solid"
					border-color="--color-grey"
					display="flex"
					font="--base"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Components.AnimatedLogo />
					<Text margin="12px 28px 16px 0px" text-transform="uppercase" letter-spacing="1px" color="--darkL2">
						The Bouquet floral studio was founded in 2010
					</Text>
				</StackItem>
				<StackItem width="50%" padding="0px">
					<Menu padding="0px" display="flex" width="100%" flex-wrap="wrap">
						<Override slot="link-index">
							Home
						</Override>
						<Override
							slot="item"
							display="flex"
							box-sizing="border-box"
							width="50%"
							flex-wrap="nowrap"
							flex-direction="row"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="--color-grey"
							padding="16px 12px 16px 12px"
							align-items="center"
							justify-content="center"
							position="relative"
							height="48px"
						/>
						<Override
							slot="link"
							display="block"
							text-decoration-line="initial"
							text-align="center"
							color="--darkL2"
							font="--base"
							text-transform="uppercase"
							letter-spacing="1px"
							position="absolute"
							left="0px"
							top="0px"
							right="0px"
							bottom="0px"
							padding="14px 0px 0px 0px"
							hover-background="#fd6df9"
							transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						/>
						<Override slot="item-index" border-width="0px 1px 1px 0px" />
						<Override slot="item-portfolio" border-width="0px 0px 1px 0px" />
						<Override slot="item-services" border-width="0px 1px 1px 0px" />
						<Override slot="item-blog" border-width="0px 1px 1px 0px" />
						<Override slot="item-active" color="--purple" />
						<Override slot="link-active" color="inherit" hover-color="--dark" />
						<Override slot="link-404" display="none" />
						<Override slot="item-404" display="none" />
					</Menu>
				</StackItem>
				<StackItem
					width="25%"
					border-width="0px 0px 1px 1px"
					border-style="solid"
					border-color="--color-grey"
					display="flex"
				>
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						text-align="right"
						margin="12px 0px 16px 28px"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						4998 Hanover Street, New York, 10011
						<br />
						+1 (234) 567-89-00
					</Text>
					<SocialMedia
						align-items="flex-start"
						justify-content="flex-end"
						margin="0px -10px 0px 18px"
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
					>
						<Override slot="link" background="none" hover-background="none" />
						<Override slot="icon" color="--darkL2" />
					</SocialMedia>
				</StackItem>
			</Stack>
			<Text
				as="h1"
				font="--headline1"
				margin="20px auto 30px 0px"
				text-align="left"
				display="flex"
				color="--indigo"
				cursor="default"
			>
				Bouquet
			</Text>
			<Box background="--color-dark" margin="0px" padding="0px 16px 0px 16px">
				<Text
					as="p"
					font="--base"
					text-align="left"
					letter-spacing="1px"
					color="--light"
					text-transform="uppercase"
					padding="4px 0px 4px 0px"
					cursor="default"
				>
					We are a team of professionals who are passionate about the world of flowers and plants
				</Text>
			</Box>
			<Components.SaleRibbon
				position="absolute"
				bottom="203px"
				left="auto"
				right="183px"
				top="auto"
				z-index="1"
				mix-blend-mode="multiply"
				height="220px"
				width="220px"
			/>
		</Section>
		<Section
			padding="0px 0px 52% 0px"
			position="relative"
			border-width="0px 0px 12px 0px"
			border-style="solid"
			border-color="--color-darkL2"
			background="--color-darkL2 url(https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center/110% no-repeat scroll padding-box"
			hover-background="--color-darkL2 url(https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center/100% no-repeat scroll padding-box"
			transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		>
			<Components.ScrollAnimate
				position="absolute"
				top="auto"
				right="auto"
				left="60px"
				bottom="70px"
			>
				<Box
					font="--lead"
					color="--light"
					max-width="330px"
					background="--color-darkL2"
					padding="12px 28px 28px 28px"
				>
					<Text text-transform="uppercase" letter-spacing="1px">
						Rose flower symbolism
					</Text>
					<Text font="--base" text-transform="uppercase" letter-spacing="1px" margin="16px 0px 24px 0px">
						As you may know, the appearance of flowers can comminicate a message, and today we'll unveil some of their meanings.
					</Text>
					<Button
						width="100%"
						border-radius="0px"
						background="--color-purple"
						color="--dark"
						font="--lead"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Order
					</Button>
				</Box>
			</Components.ScrollAnimate>
		</Section>
		<Section
			padding="0px 0px 52% 0px"
			position="relative"
			border-width="0px 0px 12px 0px"
			border-style="solid"
			border-color="--color-darkL2"
			background="--color-darkL2 url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) center/110% no-repeat scroll padding-box"
			hover-background="--color-darkL2 url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) center/100% no-repeat scroll padding-box"
			transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		>
			<Components.ScrollAnimateRight
				position="absolute"
				top="auto"
				right="60px"
				left="auto"
				bottom="70px"
			>
				<Box
					font="--lead"
					color="--light"
					max-width="330px"
					background="--color-darkL2"
					padding="12px 28px 28px 28px"
				>
					<Text text-transform="uppercase" letter-spacing="1px">
						Custom bouquets
					</Text>
					<Text font="--base" text-transform="uppercase" letter-spacing="1px" margin="16px 0px 24px 0px">
						Wedding bouquets, gift flowers for a special occasion or just to put a smile on the face of your loved one. We'll create that special bouquet just for you.{" "}
					</Text>
					<Button
						width="100%"
						border-radius="0px"
						background="--color-purple"
						color="--dark"
						font="--lead"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Order
					</Button>
				</Box>
			</Components.ScrollAnimateRight>
		</Section>
		<Section
			padding="0px 0px 52% 0px"
			position="relative"
			border-width="0px 0px 12px 0px"
			border-style="solid"
			border-color="--color-darkL2"
			background="--color-darkL2 url(https://images.unsplash.com/photo-1581792772107-45a4aaecef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80) center/110% no-repeat scroll padding-box"
			hover-background="--color-darkL2 url(https://images.unsplash.com/photo-1581792772107-45a4aaecef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80) center/100% no-repeat scroll padding-box"
			transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		>
			<Components.ScrollAnimate
				position="absolute"
				top="auto"
				right="auto"
				left="60px"
				bottom="70px"
			>
				<Box
					font="--lead"
					color="--light"
					max-width="330px"
					background="--color-darkL2"
					padding="12px 28px 28px 28px"
				>
					<Text text-transform="uppercase" letter-spacing="1px">
						Flower Arrangements
					</Text>
					<Text font="--base" text-transform="uppercase" letter-spacing="1px" margin="16px 0px 24px 0px">
						Flowers will become the perfect decoration for any event, be it a banquet, wedding, team retreat, or any other party.
					</Text>
					<Button
						width="100%"
						border-radius="0px"
						background="--color-purple"
						color="--dark"
						font="--lead"
						text-transform="uppercase"
						letter-spacing="1px"
					>
						Order
					</Button>
				</Box>
			</Components.ScrollAnimate>
		</Section>
		<Section padding="32px 0px" background="--color-darkL2" position="relative">
			<Stack gap="0px" margin="0px 0px 61px 0px" padding="0px">
				<StackItem width="50%" padding="0px">
					<Menu padding="0px" display="flex" width="100%" flex-wrap="wrap">
						<Override slot="link-index">
							Home
						</Override>
						<Override
							slot="item"
							display="flex"
							box-sizing="border-box"
							width="50%"
							flex-wrap="nowrap"
							flex-direction="row"
							border-width="0px 0px 1px 0px"
							border-style="solid"
							border-color="#33393f"
							padding="16px 12px 16px 12px"
							align-items="center"
							justify-content="center"
							position="relative"
							height="48px"
						/>
						<Override
							slot="link"
							display="block"
							text-decoration-line="initial"
							text-align="center"
							color="--light"
							font="--base"
							text-transform="uppercase"
							letter-spacing="1px"
							position="absolute"
							left="0px"
							top="0px"
							right="0px"
							bottom="0px"
							padding="14px 0px 0px 0px"
							hover-background="#fd6df9"
							transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						/>
						<Override slot="item-index" border-width="0px 1px 1px 0px" />
						<Override slot="item-portfolio" border-width="0px 1px 1px 0px" />
						<Override slot="item-workshops" border-width="0px 1px 1px 0px" />
						<Override slot="item-contact" border-width="0px 1px 1px 0px" />
						<Override slot="item-services" border-width="0px 1px 1px 0px" />
						<Override slot="item-blog" border-width="0px 1px 1px 0px" />
						<Override slot="item-active" color="--purple" />
						<Override slot="link-active" color="inherit" hover-color="--dark" />
					</Menu>
				</StackItem>
				<StackItem
					width="25%"
					border-width="0px 1px 1px 0px"
					border-style="solid"
					border-color="#33393f"
					display="block"
					height="auto"
					font="--base"
				>
					<GoogleMap height="144px" width="100%" query="New Your, Hanover Street" />
				</StackItem>
				<StackItem
					width="25%"
					border-width="0px 0px 1px 0px"
					border-style="solid"
					border-color="#33393f"
					display="flex"
				>
					<Text
						text-align="right"
						margin="12px 0px 16px 28px"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						4998 Hanover Street, New York, 10011
						<br />
						+1 (234) 567-89-00
					</Text>
					<SocialMedia
						align-items="flex-start"
						justify-content="flex-end"
						margin="0px 0px 0px 18px"
						facebook="https://www.facebook.com/quarklyapp/"
						twitter="https://twitter.com/quarklyapp"
						youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
					>
						<Override slot="link" background="none" hover-background="none" />
						<Override slot="icon" color="--grey" />
					</SocialMedia>
				</StackItem>
			</Stack>
		</Section>
	</Theme>;
});