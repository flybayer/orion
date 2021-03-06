import * as React from "react"
import { Fragment, Component } from "react"
import { RenderComponentProps, ThemeConfig } from "docz"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import styled, { css } from "react-emotion"
import lighten from "polished/lib/color/lighten"
import darken from "polished/lib/color/darken"
import rgba from "polished/lib/color/rgba"
import Resizable from "re-resizable"
import Maximize from "react-feather/dist/icons/maximize"
import Minimize from "react-feather/dist/icons/minimize"
import Refresh from "react-feather/dist/icons/refresh-cw"
import Code from "react-feather/dist/icons/code"
import hotkeys from "hotkeys-js"
import getter from "lodash.get"

import { Handle, HANDLE_SIZE } from "./Handle"
import { ResizeBar } from "./ResizeBar"
import { CodeSandboxLogo } from "./CodeSandboxLogo"
import { ActionButton, ClipboardAction, Editor as PreBase } from "../Editor"

import { localStorage } from "../../../utils/local-storage"
import { get as themeGet } from "../../../utils/theme"

const whenFullscreen = (on, off) => p => (p.full ? on : off)

const Overlay = styled("div")`
  box-sizing: border-box;
  z-index: ${whenFullscreen(9999, 0)};
  position: ${whenFullscreen("fixed", "relative")};
  top: 0;
  left: 0;
  width: ${whenFullscreen("100vw", "auto")};
  height: ${whenFullscreen("100vh", "auto")};
  padding: ${whenFullscreen("60px 20px 20px", "0px")};
  margin: ${whenFullscreen("0px", "0 0 30px")};
  background: ${whenFullscreen("rgba(0,0,0,0.5)", "transparent")};
  transition: background 0.3s;
`

const minusHandleSize = `calc(100% - ${HANDLE_SIZE} + 4px)`
const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  height: ${whenFullscreen(minusHandleSize, "100%")};
  width: ${minusHandleSize};
`
const borderColor = themeGet("colors.border")
const backgroundColor = themeGet("colors.background")

const PreviewWrapper = styled("div")`
  overflow-y: auto;
  flex: 1;
  border: 1px solid ${borderColor};
  background: ${backgroundColor};
  min-height: ${whenFullscreen("198px", "auto")};
`

const StyledPreview = styled(LivePreview)`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  ${p => p.theme.docz.mq(p.theme.docz.styles.playground)};
`

const StyledError = styled(LiveError)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${rgba("black", 0.8)};
  font-size: 16px;
  color: white;
`

const Pre = styled(PreBase)`
  width: calc(100% - 2px);
  border-radius: 0 !important;
  margin: 0;
`

const EditorWrapper = styled("div")`
  max-height: ${p => (p.showing ? "9999px" : "0px")};
  transform: scaleY(${p => (p.showing ? "1" : "0")});
  transform-origin: top center;
`

const editorClassName = css`
  border-top: 0;
`

const Actions = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding: 0 5px;
  background: ${p =>
    p.theme.docz.mode === "light" ? lighten(0.13, borderColor(p)) : darken(0.04, borderColor(p))};
  border-left: 1px solid ${themeGet("colors.border")};
  border-bottom: 1px solid ${themeGet("colors.border")};
`

const actionClass = p => css`
  padding: 3px 10px;
  border-left: 1px solid ${borderColor(p)};
`

const Action = styled(ActionButton)`
  ${actionClass};
`

const ActionLink = Action.withComponent("a")
const Clipboard = styled(ClipboardAction)`
  ${actionClass};
`

const storage = localStorage()
const get = (pos): any => storage.get(pos.toString())
const remove = (pos): void => storage.remove(pos.toString())
const set = (pos, size) => storage.set(pos.toString(), size)

const parse = (position, key, defaultValue) => {
  const obj = JSON.parse(get(position))
  return obj ? getter(obj, key) : defaultValue
}

class RenderBase extends Component<RenderProps, RenderState> {
  state = {
    fullscreen: parse(this.props.position, "fullscreen", false),
    width: parse(this.props.position, "width", "100%"),
    height: parse(this.props.position, "height", "100%"),
    code: this.props.code,
    key: 0,
    showEditor: Boolean(this.props.showEditor),
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fullscreen !== this.state.fullscreen) {
      this.toggleBodyOverlayClass()
    }
  }

  componentDidMount() {
    this.addUnloadListener()
    hotkeys("esc", this.closeOnEsc)
  }

  componentWillUnmount() {
    this.removeUnloadListener()
    hotkeys.unbind("esc")
  }

  get actions() {
    const { fullscreen, showEditor } = this.state
    const { codesandbox } = this.props

    return (
      <Actions withRadius={this.state.showEditor}>
        <Action onClick={this.handleRefresh} title="Refresh playground">
          <Refresh width={15} />
        </Action>
        <ThemeConfig>
          {config =>
            config.codeSandbox &&
            codesandbox !== "undefined" && (
              <ActionLink
                href={this.codesandboxUrl(config.native)}
                target="_blank"
                title="Open in CodeSandbox"
              >
                <CodeSandboxLogo style={{ height: "100%" }} width={15} />
              </ActionLink>
            )
          }
        </ThemeConfig>
        <Clipboard content={this.state.code} />
        <Action onClick={this.handleToggle} title={fullscreen ? "Minimize" : "Maximize"}>
          {fullscreen ? <Minimize width={15} /> : <Maximize width={15} />}
        </Action>
        <Action
          onClick={this.handleShowEditorToggle}
          title={showEditor ? "Close editor" : "Show editor"}
        >
          <Code width={15} />
        </Action>
      </Actions>
    )
  }

  get resizableProps() {
    const { fullscreen, width, height } = this.state

    return {
      minHeight: fullscreen ? 360 : "100%",
      minWidth: 260,
      maxWidth: "100%",
      maxHeight: "100%",
      size: {
        width,
        height,
      },
      style: {
        margin: "0 auto ",
      },
      enable: {
        top: false,
        right: true,
        bottom: fullscreen,
        left: false,
        topRight: false,
        bottomRight: fullscreen,
        bottomLeft: false,
        topLeft: false,
      },
      handleComponent: {
        right: () => <Handle full={fullscreen} horizontal />,
        bottom: () => <Handle full={fullscreen} horizontal={false} />,
      },
      onResizeStop: (e, direction, ref, d) => {
        const width = ref.style.width
        const height = ref.style.height

        this.handleSetSize(width, height)
      },
    }
  }

  render() {
    const { className, style, scope } = this.props
    const { fullscreen, showEditor } = this.state

    const editorProps = {
      square: true,
      className: editorClassName,
      actions: <Fragment />,
    }

    return (
      <LiveProvider
        code={this.state.code}
        scope={scope}
        transformCode={this.transformCode}
        mountStylesheet={false}
      >
        <Overlay full={fullscreen}>
          {fullscreen ? <ResizeBar onChangeSize={this.handleSetSize} /> : null}
          <Resizable {...this.resizableProps}>
            <Wrapper full={fullscreen}>
              <PreviewWrapper full={fullscreen}>
                <StyledPreview className={className} style={style} />
                <StyledError />
              </PreviewWrapper>
              {this.actions}
              <EditorWrapper showing={showEditor}>
                <Pre {...editorProps} onChange={code => this.setState({ code })} readOnly={false}>
                  {this.state.code}
                </Pre>
              </EditorWrapper>
            </Wrapper>
          </Resizable>
        </Overlay>
      </LiveProvider>
    )
  }

  unloadListener = () => remove(this.props.position)

  addUnloadListener = () => {
    if (window && typeof window !== "undefined") {
      window.addEventListener("beforeunload", this.unloadListener, false)
    }
  }

  removeUnloadListener = () => {
    if (window && typeof window !== "undefined") {
      window.removeEventListener("beforeunload", this.unloadListener, false)
    }
  }

  setSize = fullscreen => {
    set(this.props.position, JSON.stringify({ ...this.state, fullscreen }))
  }

  handleToggle = () => {
    const { position } = this.props
    const { fullscreen } = this.state

    if (fullscreen) remove(position)
    else this.setSize(true)

    this.setState({
      fullscreen: parse(position, "fullscreen", false),
      width: parse(position, "width", "100%"),
      height: parse(position, "height", "100%"),
    })
  }

  handleShowEditorToggle = () => {
    this.setState(state => ({ showEditor: !state.showEditor }))
  }

  closeOnEsc = () => {
    this.state.fullscreen && this.handleToggle()
  }

  handleSetSize = (width, height) => {
    const fullscreen = parse(this.props.position, "fullscreen", false)
    this.setState({ width, height }, () => this.setSize(fullscreen))
  }

  handleRefresh = () => {
    this.setState(state => ({ key: state.key + 1 }))
  }

  transformCode = code => {
    if (code.startsWith("()") || code.startsWith("class")) return code
    return `<React.Fragment>${code}</React.Fragment>`
  }

  codesandboxUrl = native => {
    const { codesandbox } = this.props
    const url = "https://codesandbox.io/api/v1/sandboxes/define"

    return `${url}?parameters=${codesandbox}${native ? `&editorsize=75` : ``}`
  }

  toggleBodyOverlayClass = () => {
    const method = this.state.fullscreen ? "add" : "remove"
    document.body.classList[method]("with-overlay")
  }
}

export const Render = props => (
  <ThemeConfig>
    {config => (
      <RenderBase {...props} showEditor={getter(config, "themeConfig.showPlaygroundEditor")} />
    )}
  </ThemeConfig>
)
