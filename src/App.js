import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

import Box from "./components/Box"
import Grid from "./components/Grid"
import ButtonBase from "./components/ButtonBase"
import Button from "./components/Button"
import MinimalButton from "./components/MinimalButton"
import OutlineButton from "./components/OutlineButton"
import InputBase from "./components/InputBase"
import MinimalInput from "./components/MinimalInput"
import Input from "./components/Input"
import Textarea from "./components/Textarea"
import Label from "./components/Label"
import Text from "./components/Text"
import SmallText from "./components/SmallText"
import LargeText from "./components/LargeText"
import Heading from "./components/Heading"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid gridGap={3} m={3} justifyItems="start">
          <Box flexDirection="column">
            <Heading>Orion Component Library</Heading>
            <Text>
              “Hi there! I'm Professor Franklin Risby. Pleased to make your acquaintance. We'll be
              spending some time together, as I'm supposed to teach you a bit about functional
              programming. But enough about me, what about you? I'm hoping that you're at least a
              bit familiar with the JavaScript language, have a teensy bit of Object-Oriented
              experience, and fancy yourself a working class programmer. You don't need to have a
              PhD in Entomology, you just need to know how to find and kill some bugs.
            </Text>
            <Text>
              I won't assume that you have any previous functional programming knowledge, because we
              both know what happens when you assume. I will, however, expect you to have run into
              some of the unfavorable situations that arise when working with mutable state,
              unrestricted side effects, and unprincipled design. Now that we've been properly
              introduced, let's get on with it.”
            </Text>
          </Box>
          <SmallText>Hint: it's name is Orion</SmallText>
          <LargeText>
            I won't assume that you have any previous functional programming knowledge, because we
            both know what happens when you assume. I will, however, expect you to have run into
            some of the unfavorable situations that arise when working with mutable state,
            unrestricted side effects, and unprincipled design. Now that we've been properly
            introduced, let's get on with it.
          </LargeText>
          <ButtonBase>Button Base</ButtonBase>
          <MinimalButton>Minimal Button</MinimalButton>
          <MinimalButton>
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "middle" }}
            >
              <g>
                <path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" />
              </g>
            </svg>
            <span>Button</span>
          </MinimalButton>
          <Button disabled>Disabled Button</Button>
          <Button>
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "middle" }}
            >
              <g>
                <path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" />
              </g>
            </svg>
            <span>Bell</span>
          </Button>
          <Button>
            <span>Bell</span>
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "middle" }}
            >
              <g>
                <path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" />
              </g>
            </svg>
          </Button>
          <Button>
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "middle" }}
            >
              <g>
                <path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" />
              </g>
            </svg>
            <span>Bell</span>
            <svg
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              viewBox="0 0 40 40"
              style={{ verticalAlign: "middle" }}
            >
              <g>
                <path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" />
              </g>
            </svg>
          </Button>
          <Button bg="black">Black</Button>
          <Button bg="blue.7" fontSize={1} px={2} py={1}>
            Small
          </Button>
          <Button color="black" bg="yellow.5" fontSize={3}>
            Big Yellow Button
          </Button>
          <OutlineButton>Outline Button</OutlineButton>
          <Textarea />
          <Label>
            Minimal Input
            <MinimalInput mt={1} />
          </Label>
          <MinimalInput placeholder="Your name here" />
          <MinimalInput disabled value="mister name" />
          <Input placeholder="Enter your name" />
          <Box>
            <Input placeholder="Email" mr={2} />
            <Button>Subscribe</Button>
          </Box>
          <Box>
            <MinimalInput placeholder="Email" mr={2} />
            <Button borderRadius={0}>Subscribe</Button>
          </Box>
          <Label>Standalone Label</Label>
          <Label>
            Number Input
            <Input type="number" placeholder="type=number" mt={1} />
          </Label>
          <Label flexDirection="row">
            Email Input
            <Input type="email" placeholder="type=email" />
          </Label>
          <Input type="search" placeholder="type=search" />
        </Grid>
      </ThemeProvider>
    )
  }
}

export default App
