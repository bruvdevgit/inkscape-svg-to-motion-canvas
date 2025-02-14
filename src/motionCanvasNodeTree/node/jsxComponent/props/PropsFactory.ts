import {
  initPropsFn as initJSXComponentPropsFn,
  InitPropsFn as InitJSXComponentPropsFn,
  PropField as JSXComponentPropField,
  Props as JSXComponentProps,
} from "./Props";

export interface PropsFactory {
  init(
    fields: JSXComponentPropField[]): JSXComponentProps;
}

export class _PropsFactory
  implements PropsFactory {

  constructor(public deps: {
    initJSXComponentProps: InitJSXComponentPropsFn,
  }) { }

  init(fields: JSXComponentPropField[]): JSXComponentProps {
    return this.deps.initJSXComponentProps(fields);
  }
}

export type InitJSXComponentPropsFactoryFn = () => PropsFactory;

export const initJSXComponentPropsFactoryFn: InitJSXComponentPropsFactoryFn =
  () => new _PropsFactory({
    initJSXComponentProps: initJSXComponentPropsFn
  });
