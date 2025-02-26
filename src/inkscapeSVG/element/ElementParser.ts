import { INode } from "svgson";
import { Element } from './Element';
import { ElementParserFactory } from "./ElementParserFactory";

export interface ElementParser {
  parse(iNode: INode): Element;
}

export type InitElementParserFn =
  (elementParserFactory: ElementParserFactory) => ElementParser;

