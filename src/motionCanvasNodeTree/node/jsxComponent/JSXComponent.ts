import { Prop as JSXComponentProp } from './prop/Prop.ts';

export interface JSXComponentFields {
  commentLabel?: string;
  name: string;
  props: JSXComponentProp[];
  children: JSXComponent[];
}

export interface JSXComponent extends JSXComponentFields {
  toFileContentString(indentationStr?: string, numLevelsOfIndentation?: number): string;
}

export class _JSXComponent implements JSXComponent {
  commentLabel?: string;
  props: JSXComponentProp[];
  name: string;
  children: JSXComponent[];

  constructor(fields: JSXComponentFields) {
    this.commentLabel = fields.commentLabel;
    this.props = fields.props;
    this.name = fields.name;
    this.children = fields.children;
  }

  toFileContentString(indentationStr: string = '\t',
    numLevelsOfIndentation: number = 0): string {
    const indentStr = indentationStr.repeat(numLevelsOfIndentation);
    let str = this.commentLabel != undefined
      ? `${indentStr}{/* ${this.commentLabel} */}\n` : '';

    str += `${indentStr}<${this.name}\n`;
    str += this.props.map(prop => prop.toStringLine(
      indentationStr.repeat(numLevelsOfIndentation + 1))).join('\n');

    str += `\n${indentStr}>`;
    if (this.children.length > 0)
      str += '\n';
    str += this.children
      .map(child => child.toFileContentString(
        indentationStr, numLevelsOfIndentation + 1))
      .join('\n');
    str += `\n${indentStr}</${this.name}>`;
    return str;
  }
}

export type InitJSXComponentFn = (fields: JSXComponentFields) => JSXComponent;

export const initJSXComponent: InitJSXComponentFn = (
  fields: JSXComponentFields) => new _JSXComponent(fields);
