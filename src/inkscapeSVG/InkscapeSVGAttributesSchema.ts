import myzod, { Infer } from "myzod";
import { ObjectOptions, PathOptions } from "myzod/libs/types";

const _inkscapeSVGAttributesSchema = myzod.object({
  width: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number'),
  height: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number'),
  viewBox: myzod.string()
    .withPredicate((val: string) => {
      const nums = val.split(' ');
      return nums.length == 4 && !nums.some(num => Number.isNaN(Number(num)));
    },
      'value must be convertable to 4 numbers'),
}).allowUnknownKeys(true);

export type InkscapeSVGAttributes = Infer<typeof _inkscapeSVGAttributesSchema>;

export interface InkscapeSVGAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): InkscapeSVGAttributes;
}

export class _InkscapeSVGAttributesSchema implements InkscapeSVGAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): InkscapeSVGAttributes {
    return _inkscapeSVGAttributesSchema.parse(value, parseOpts);
  }
}

export type InitInkscapeSVGAttributesSchemaFn = () => InkscapeSVGAttributesSchema;

/* c8 ignore start */
export function initInkscapeSVGAttributesSchema(): InkscapeSVGAttributesSchema {
  return new _InkscapeSVGAttributesSchema();
}
/* c8 ignore end */
