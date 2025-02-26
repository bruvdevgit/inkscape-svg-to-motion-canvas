import { CamelCaseWrapper, initCamelCaseWrapper } from '../../../../wrappers/CamelCaseWrapper';

export type PropFieldValue = string | string[]
  | number | number[]
  | boolean | boolean[];

// TODO: rename to PropFields
export interface PropField {
  key: string;
  value: PropFieldValue;
  removeQuotesFromValue?: boolean;
  turnValueToCamelCase?: boolean;
}

export interface Prop extends PropField {
  toStringLine(indentPrefix: string): string;
}

export class _Prop implements Prop {
  key: string = '';
  value: PropFieldValue = '';
  removeQuotesFromValue: boolean = false;
  turnValueToCamelCase: boolean = false;

  constructor(public deps: {
    camelCaseWrapper: CamelCaseWrapper,
  }, props: PropField) {
    Object.assign(this, props);
  }

  toStringLine(indentPrefix: string): string {

    const quoteMark = this.removeQuotesFromValue ? '' : '"';

    let valStr: string = '';
    if (Array.isArray(this.value)) {
      valStr += '{[';

      for (let i = 0; i < this.value.length; i++) {
        let v = this.value[i];

        if (typeof v == 'string') {
          if (this.turnValueToCamelCase)
            v = this.deps.camelCaseWrapper.parse(v);
          valStr += `${quoteMark}${v}${quoteMark}, `;
        } else if (typeof v == 'boolean'
          || !Number.isNaN(Number(v))) {
          valStr += `${v}, `;
        }
        else {
          throw new RangeError(`Got an unexpected type for the ${i + 1}th value of the key "${this.key}"`);
        }
      };
      valStr += ']}';
    }
    else {
      if (typeof this.value == 'string') {
        let v = this.value;
        if (this.turnValueToCamelCase)
          v = this.deps.camelCaseWrapper.parse(v);
        valStr += `{${quoteMark}${v}${quoteMark}}`;
      } else if (typeof this.value == 'boolean'
        || !Number.isNaN(Number(this.value))) {
        valStr = `{${this.value}}`;
      }
      else {
        throw new RangeError(`Got an unexpected type for the value of the key "${this.key}"`);
      }
    }

    const result = `${indentPrefix}${this.key}= ${valStr}`;

    return result;
  }


}

export type InitPropFn = (prop: PropField) => Prop;

export const initPropFn: InitPropFn
  = (prop: PropField) => new _Prop({
    camelCaseWrapper: initCamelCaseWrapper(),
  }, prop);
