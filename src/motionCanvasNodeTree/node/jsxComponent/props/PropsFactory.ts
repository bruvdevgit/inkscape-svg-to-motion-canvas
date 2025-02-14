import {
  initPropsFn as initJSXComponentPropsFn,
  InitPropsFn as InitJSXComponentPropsFn,
  PropField as JSXComponentPropField,
  Props as JSXComponentProps,
} from "./Props";

export interface JSXComponentPropsFactory {
  init(
    fields: JSXComponentPropField[]): JSXComponentProps;
}

export class _JSXComponentPropsFactory
  implements JSXComponentPropsFactory {

  constructor(public deps: {
    initJSXComponentProps: InitJSXComponentPropsFn,
  }) { }

  init(fields: JSXComponentPropField[]): JSXComponentProps {
    return this.deps.initJSXComponentProps(fields);
  }
}

export type InitJSXComponentPropsFactoryFn = () => JSXComponentPropsFactory;

export const initJSXComponentPropsFactoryFn: InitJSXComponentPropsFactoryFn =
  () => new _JSXComponentPropsFactory({
    initJSXComponentProps: initJSXComponentPropsFn
  });
