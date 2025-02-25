import myzod, { Infer } from "myzod";
import { ObjectOptions, PathOptions } from "myzod/libs/types";

const _groupElementAttributesSchema = myzod.object({
  id: myzod.string().pattern(/^[A-Za-z]+[A-Za-z0-9\-]*$/),
}).allowUnknownKeys(true);

export type GroupElementAttributes = Infer<typeof _groupElementAttributesSchema>;

export interface GroupElementAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): GroupElementAttributes;
}

export class _GroupElementAttributesSchema implements GroupElementAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): GroupElementAttributes {
    return _groupElementAttributesSchema.parse(value, parseOpts);
  }
}

export type InitGroupElementAttributesSchemaFn = () => GroupElementAttributesSchema;

/* c8 ignore start */
export function initGroupElementAttributesSchema(): GroupElementAttributesSchema {
  return new _GroupElementAttributesSchema();
}
/* c8 ignore end */
