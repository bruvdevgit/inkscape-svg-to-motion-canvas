import { INode } from "svgson";
import { Element } from "./Element";

export interface ElementParser {
  parse(iNode: INode): Element;
}

export type InitElementParserFn =
  () => ElementParser;

