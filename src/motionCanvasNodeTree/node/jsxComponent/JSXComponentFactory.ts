import { JSXComponentFields, JSXComponent, InitJSXComponentFn, initJSXComponent } from './JSXComponent.ts';

export interface JSXComponentFactory {
  init(
    fields: JSXComponentFields): JSXComponent;
}

export class _JSXComponentFactory
  implements JSXComponentFactory {

  constructor(public deps: {
    initJSXComponent: InitJSXComponentFn
  }) { }

  init(fields: JSXComponentFields): JSXComponent {
    return this.deps.initJSXComponent(fields);
  }
}

export type InitJSXComponentFactoryFn = () => JSXComponentFactory;

export const initJSXComponentFactoryFn: InitJSXComponentFactoryFn =
  () => new _JSXComponentFactory({
    initJSXComponent: initJSXComponent
  });
