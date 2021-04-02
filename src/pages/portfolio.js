import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, SocialMedia, Stack, Section, GoogleMap } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"portfolio"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.ChaseCursor>
			<Section text-align="center" padding="100px 0px 120px 0px" background="--color-light" position="relative">
				<Stack gap="0px" margin="0px 0px 61px 0px" padding="0px 0px 0px 0px">
					<StackItem
						width="25%"
						border-width="0px 1px 1px 0px"
						border-style="solid"
						border-color="--color-grey"
						height="auto"
						margin="0px 0px 0px 0px"
						display="flex"
						font="--base"
					>
						<Override slot="StackItemContent" flex-direction="column" />
						<Components.AnimatedLogo width="60px" margin="0px 0px 20px 0px" display="flex" height="60px" />
						<Text
							text-align="left"
							margin="12px 28px 16px 0px"
							text-transform="uppercase"
							letter-spacing="1px"
							font="--base"
							color="--darkL2"
						>
							THE BOUQUET FLORAL STUDIO WAS FOUNDED IN 2010
						</Text>
					</StackItem>
					<StackItem width="50%" margin="0px 0px 0px 0px" padding="0px 0px 0px 0px">
						<Menu
							padding="0px 0px 0px 0px"
							display="flex"
							width="100%"
							flex-wrap="wrap"
							margin="10px 0px 0px 0px"
						>
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
								color="--orange"
								position="relative"
								height="48px"
							/>
							<Override
								slot="link"
								text-decoration-line="initial"
								color="--darkL2"
								font="--base"
								text-transform="uppercase"
								letter-spacing="1px"
								position="absolute"
								left="0px"
								top="0px"
								right="0px"
								bottom="0px"
								display="block"
								padding="14px 0px 0px 0px"
								hover-background="#fd6df9"
								transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
							/>
							<Override slot="item-index" border-width="0px 1px 1px 0px" />
							<Override slot="item-portfolio" border-width="0px 0px 1px 0px" />
							<Override slot="item-services" border-width="0px 1px 1px 0px" />
							<Override slot="item-blog" border-width="0px 1px 1px 0px" />
							<Override slot="link-active" color="inherit" hover-color="--dark" />
							<Override slot="item-active" color="--purple" />
						</Menu>
					</StackItem>
					<StackItem
						width="25%"
						border-width="0px 0px 1px 1px"
						border-style="solid"
						border-color="--color-grey"
						height="auto"
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
						</Text>
						<Text
							text-align="right"
							margin="12px 0px 16px 28px"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							+1 (234) 567-89-00
						</Text>
						<SocialMedia
							facebook="https://www.facebook.com/quarklyapp/"
							twitter="https://twitter.com/quarklyapp"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							vkontakte="https://vk.com/quarklyapp"
							telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
							text-align="left"
							align-items="flex-start"
							justify-content="flex-end"
							margin="0px 0px 0px 18px"
						>
							<Override slot="link-vkontakte" display="none" />
							<Override slot="link" background="none" hover-background="none" />
							<Override slot="icon" color="--darkL2" />
						</SocialMedia>
					</StackItem>
				</Stack>
				<Text
					as="h2"
					font="--headline1"
					md-font="--headline2"
					margin="20px auto 30px 0px"
					text-align="left"
					display="flex"
					color="--dark"
					cursor="default"
				>
					Bouquet
				</Text>
				<Box background="--color-dark" margin="0px 0px 0px 0px" padding="0px 16px 0px 16px">
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
						We are a team of professionals who are passionate about the world of flowers and plants{" "}
					</Text>
				</Box>
				<Components.SaleLabel
					position="absolute"
					bottom="-120px"
					left="auto"
					right="140px"
					top="auto"
					height="220px"
					width="220px"
					z-index="1"
					mix-blend-mode="multiply"
					opacity="1"
				/>
			</Section>
			<Section
				padding="0px 0px 52% 0px"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center/110% no-repeat scroll padding-box"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s,filter --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1525169651900-b9c6aa4764fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80) center/100% no-repeat scroll padding-box"
				position="relative"
				border-width="0px 0px 12px 0px "
				border-style="solid"
				border-color="--color-darkL2"
			>
				<Components.Parallax
					position="absolute"
					top="auto"
					right="auto"
					left="60px"
					bottom="70px"
				>
					<Box
						left="60px"
						bottom="70px"
						top="auto"
						right="auto"
						font="--lead"
						color="--light"
						width="330px"
						background="--color-darkL2"
						padding="12px 28px 28px 28px"
						position="static"
					>
						<Text text-transform="uppercase" letter-spacing="1px">
							Rose flower symbolism
						</Text>
						<Text font="--base" text-transform="uppercase" letter-spacing="1px" margin="16px 0px 24px 0px">
							As you may know, the appearance of flowers can communicate a message, and today we'll unveil some of their meanings.
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
							ORDER
						</Button>
					</Box>
				</Components.Parallax>
			</Section>
			<Section
				padding="0px 0px 52% 0px"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) center/110% no-repeat scroll padding-box"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s,filter --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80) center/100% no-repeat scroll padding-box"
				position="relative"
				border-width="0px 0px 12px 0px "
				border-style="solid"
				border-color="--color-darkL2"
			>
				<Components.ParallaxRight
					position="absolute"
					left="auto"
					top="auto"
					bottom="70px"
					right="60px"
				>
					<Box
						left="auto"
						bottom="70px"
						top="auto"
						right="60px"
						font="--lead"
						color="--light"
						width="330px"
						background="--color-darkL2"
						padding="12px 28px 28px 28px"
						position="static"
					>
						<Text text-transform="uppercase" letter-spacing="1px">
							Rose flower symbolism
						</Text>
						<Text font="--base" text-transform="uppercase" letter-spacing="1px" margin="16px 0px 24px 0px">
							As you may know, the appearance of flowers can communicate a message, and today we'll unveil some of their meanings.
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
							ORDER
						</Button>
					</Box>
				</Components.ParallaxRight>
			</Section>
			<Section
				padding="0px 0px 52% 0px"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1581792772107-45a4aaecef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80) center/110% no-repeat scroll padding-box"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s,filter --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				hover-background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1581792772107-45a4aaecef9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2088&q=80) center/100% no-repeat scroll padding-box"
				position="relative"
				border-width="0px 0px 12px 0px "
				border-style="solid"
				border-color="--color-darkL2"
			>
				<Components.Parallax
					position="absolute"
					top="auto"
					right="auto"
					left="60px"
					bottom="70px"
				>
					<Components.OrderCard />
				</Components.Parallax>
			</Section>
			<Section background-color="--dark" text-align="center" padding="32px 0" background="--color-darkL2">
				<Stack gap="0px" margin="0px 0px 61px 0px" padding="0px 0px 0px 0px">
					<StackItem width="50%" margin="0px 0px 0px 0px" padding="0px 0px 0px 0px">
						<Menu padding="0px 0px 0px 0px" display="flex" width="100%" flex-wrap="wrap">
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
								color="--orange"
							/>
							<Override
								slot="link"
								text-decoration-line="initial"
								color="--light"
								font="--base"
								text-transform="uppercase"
								letter-spacing="1px"
							/>
							<Override slot="item-index" border-width="0px 1px 1px 0px" />
							<Override slot="item-portfolio" border-width="0px 0px 1px 0px" />
							<Override slot="item-services" border-width="0px 1px 1px 0px" />
							<Override slot="item-blog" border-width="0px 1px 1px 0px" />
							<Override slot="link-active" color="inherit" />
							<Override slot="item-active" color="--purple" />
						</Menu>
					</StackItem>
					<StackItem
						width="25%"
						border-width="0px 1px 1px 0px"
						border-style="solid"
						border-color="--color-grey"
						height="auto"
						margin="0px"
						display="block"
					>
						<GoogleMap height="152px" width="100%" query="New York, Hanover Street" />
					</StackItem>
					<StackItem
						width="25%"
						border-width="0px 0px 1px 1px"
						border-style="solid"
						border-color="#33393f"
						height="auto"
						display="flex"
					>
						<Text
							text-align="right"
							margin="12px 0px 16px 28px"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
							color="--grey"
						>
							4998 Hanover Street, New York, 10011
						</Text>
						<Text
							text-align="right"
							margin="12px 0px 16px 28px"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
							color="--grey"
						>
							+1 (234) 567-89-00
						</Text>
						<SocialMedia
							facebook="https://www.facebook.com/quarklyapp/"
							twitter="https://twitter.com/quarklyapp"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							vkontakte="https://vk.com/quarklyapp"
							telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
							text-align="left"
							align-items="flex-start"
							justify-content="flex-end"
							margin="0px -12px 0px 18px"
						>
							<Override slot="link-vkontakte" display="none" />
							<Override slot="link" background="none" />
							<Override slot="icon" color="--grey" />
						</SocialMedia>
					</StackItem>
				</Stack>
			</Section>
		</Components.ChaseCursor>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfBody"} rawKey={"60670bb162492bf729e40544"}>
				{"a[href=\"https://quarkly.io\"] {\ndisplay: none;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});