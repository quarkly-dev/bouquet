import React from "react";
import theme from "theme";
import { Theme, Icon, Text, Em, Span, Box } from "@quarkly/widgets";
import { StackItem, Stack, Section } from "@quarkly/components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Section background="--color-darkL2" padding="64px 0">
			<Icon category="md" icon={MdFace} />
			<Stack>
				<StackItem
					color="--dark"
					padding="98px 64px"
					width="50%"
					lg-width="100%"
					background="--color-light"
					text-shadow=",,2px 3px 2px transparent,2px 2px 0 transparent"
				>
					<Text
						as="h4"
						margin="12px 0"
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						About Zanzibar
					</Text>
					<Text
						as="h2"
						margin="12px 0"
						font="--headline2"
						md-font="--headline3"
						text-shadow="3px 2px 4px --color-orange,2px 3px 0 --color-indigo"
					>
						This is one of the world's greatest{" "}
						<Em>
							cultural
						</Em>
						{" "}crossroads where Africa{" "}
						<Span as="label">
							meets
						</Span>
						{" "}the Indian Ocean.
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Stack>
						<StackItem
							width="100%"
							lg-width="33.3%"
							md-width="100%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1594168087746-d94175b42394?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30) center/cover"
						/>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="50%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
						/>
						<StackItem
							width="50%"
							lg-width="33.3%"
							md-width="50%"
							padding-bottom="100%"
							background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover"
						/>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Box height="300px" width="300px" box-shadow="0 4px 5px -1px rgba(0, 0, 0, 0.1)" />
	</Theme>;
});