import { Component } from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export interface MarkdownProps {
  children: string;
};

export default class MarkdownPage extends Component<MarkdownProps> {
  render() {
    return (
      <Markdown remarkPlugins={[remarkGfm]}>{this.props.children}</Markdown>
    )
  }
}
