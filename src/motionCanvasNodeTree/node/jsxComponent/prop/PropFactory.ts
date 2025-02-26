import {
  InitPropFn as InitJSXComponentPropFn,
  PropField as JSXComponentPropField,
  Prop as JSXComponentProp,
  initPropFn as initJSXComponentPropFn,
} from './Prop';

export interface PropFactory {
  init(
    fields: JSXComponentPropField): JSXComponentProp;
}

export class _PropFactory
  implements PropFactory {

  constructor(public deps: {
    initJSXComponentProp: InitJSXComponentPropFn,
  }) { }

  init(field: JSXComponentPropField): JSXComponentProp {
    return this.deps.initJSXComponentProp(field);
  }
}

export type InitJSXComponentPropFactoryFn = () => PropFactory;

export const initJSXComponentPropFactoryFn: InitJSXComponentPropFactoryFn =
  () => new _PropFactory({
    initJSXComponentProp: initJSXComponentPropFn
  });
