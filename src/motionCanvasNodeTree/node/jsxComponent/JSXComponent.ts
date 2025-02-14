import { Props as JSXComponentProps } from "./props/Props";

export interface JSXComponentFields {
  name: string;
  props: JSXComponentProps;
  children: JSXComponent[];
}

export interface JSXComponent extends JSXComponentFields {
  toFileContentString(): string;
}

export class _JSXComponent implements JSXComponent {
  props: JSXComponentProps;
  name: string;
  children: JSXComponent[];

  constructor(public fields: JSXComponentFields) {
    this.props = fields.props;
    this.name = fields.name;
    this.children = fields.children;
  }

  toFileContentString(): string {
    let str = `<${this.name}\n`;
    const indentStr = '\t';
    str += this.props.toStringLines(indentStr).join('\n');

    str += '\n>';
    str += this.children.map(child => child.toString()).join('\n');
    str += `\n</${this.name}>`;
    return str;
  }
}

export type InitJSXComponentFn = (fields: JSXComponentFields) => JSXComponent;

export const initJSXComponent: InitJSXComponentFn = (
  fields: JSXComponentFields) => new _JSXComponent(fields);
