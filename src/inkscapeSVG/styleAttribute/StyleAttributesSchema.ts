import myzod, { Infer } from 'myzod';
import { ObjectOptions, PathOptions } from 'myzod/libs/types';

//TODO: get more specific with these
export const _styleAttributesSchema = myzod.object({
  fill: myzod.string(),
  'fill-opacity': myzod.string().optional(),
  stroke: myzod.string(),
  'stroke-width': myzod.string(),
  'stroke-linecap': myzod.string(),
  'stroke-linejoin': myzod.string(),
  'stroke-miterlimit': myzod.string(),
  'stroke-dasharray': myzod.string().optional(),
  'stroke-opacity': myzod.string().optional(),
  'paint-order': myzod.string(),
});

export type StyleAttributesFromSchema = Infer<typeof _styleAttributesSchema>;

export interface StyleAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): StyleAttributesFromSchema;
}

export class _StyleAttributesSchema {
  parse(value?: unknown,
    parseOpts?: ObjectOptions<any> & PathOptions): StyleAttributesFromSchema {
    return _styleAttributesSchema.parse(value, parseOpts);
  }
}

export type InitStyleAttributesSchemaFn
  = () => StyleAttributesSchema;

export const initStyleAttributesSchema: InitStyleAttributesSchemaFn
  = () => new _StyleAttributesSchema();
