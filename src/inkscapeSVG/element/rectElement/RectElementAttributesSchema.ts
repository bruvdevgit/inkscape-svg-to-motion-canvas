import myzod, { Infer } from "myzod";
import { ObjectOptions, PathOptions } from "myzod/libs/types";

const _rectElementAttributesSchema = myzod.object({
  'inkscape:label': myzod.string().pattern(/^[A-Za-z]+[A-Za-z0-9\-]*$/),
  id: myzod.string().pattern(/^[A-Za-z]+[A-Za-z0-9\-]*$/),
  x: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number'),
  y: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number'),
  rx: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number').optional(),
  ry: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number').optional(),
  width: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number'),
  height: myzod.string()
    .withPredicate((val: string) => !Number.isNaN(Number(val)),
      'value must be convertable to a number'),
  style: myzod.string(),
}).allowUnknownKeys(true);

export type RectElementAttributes = Infer<typeof _rectElementAttributesSchema>;

export interface RectElementAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): RectElementAttributes;
}

export class _RectElementAttributesSchema implements RectElementAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): RectElementAttributes {
    return _rectElementAttributesSchema.parse(value, parseOpts);
  }
}

export type InitRectElementAttributesSchemaFn = () => RectElementAttributesSchema;

/* c8 ignore start */
export function initRectElementAttributesSchema(): RectElementAttributesSchema {
  return new _RectElementAttributesSchema();
}
/* c8 ignore end */
