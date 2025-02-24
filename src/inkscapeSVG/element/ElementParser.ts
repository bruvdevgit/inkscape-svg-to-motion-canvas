import { INode } from "svgson";
import { Element } from './Element.ts';
import { ElementParserFactory } from "./ElementParserFactory.ts";

export interface ElementParser {
  parse(iNode: INode): Element;
}

export type InitElementParserFn =
  (elementParserFactory: ElementParserFactory) => ElementParser;

