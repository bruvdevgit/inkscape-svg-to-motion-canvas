import myzod, { Infer } from 'myzod';
import { ObjectOptions, PathOptions } from 'myzod/libs/types';

//TODO: get more specific with these
export const _styleAttributesSchema = myzod.object({
  fill: myzod.string().optional(),
  'fill-opacity': myzod.string().optional(),
  stroke: myzod.string().optional(),
  'stroke-width': myzod.string().optional(),
  'stroke-linecap': myzod.string().optional(),
  'stroke-linejoin': myzod.string().optional(),
  'stroke-miterlimit': myzod.string().optional(),
  'stroke-dasharray': myzod.string().optional(),
  'stroke-opacity': myzod.string().optional(),
  'paint-order': myzod.string().optional(),
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
