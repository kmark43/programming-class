import { Component } from 'react'
import type { Lesson } from '../../config/ConfigTypes'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  lessons: Lesson[]
}

type State = {}

export default class IntroHome extends Component<Props, State> {
  state = { lesson: '' }


  componentWillMount() {
    fetch(`/lessons/${this.props.lessons[0].path}`).then((response) => response.text()).then((text) => {
      this.setState({ lesson: text })
    })
  }

  render() {
    return (
      <Markdown remarkPlugins={[remarkGfm]}>{this.state.lesson}</Markdown>
    )
  }
}