export interface PropField {
  key: string;
  value: string | string[]
  | number | number[]
  | boolean | boolean[];
  removeQuotesFromValue?: boolean;
}

export interface Props {
  props: PropField[];
  toStringLines(indentPrefix: string): string[];
}

export class _Props implements Props {
  constructor(public props: PropField[]) { }

  toStringLines(indentPrefix: string): string[] {
    let strings: string[] = [];

    for (let i = 0; i < this.props.length; i++) {
      const prop = this.props[i];
      const quoteMark = prop.removeQuotesFromValue ? '' : '"';

      let valStr: string = '';
      if (Array.isArray(prop.value)) {
        valStr += '{[';

        for (let i = 0; i < prop.value.length; i++) {
          const v = prop.value[i];

          if (typeof v == 'string') {
            valStr += `${quoteMark}${v}${quoteMark}, `;
          } else if (typeof v == 'boolean'
            || !Number.isNaN(Number(v))) {
            valStr += `${v}, `;
          }
          else {
            throw new RangeError(`Got an unexpected type for the ${i + 1}th value of the key "${prop.key}"`);
          }
        };
        valStr += ']}';
      }
      else {
        if (typeof prop.value == 'string') {
          valStr = `{${quoteMark}${prop.value}${quoteMark}}`;
        } else if (typeof prop.value == 'boolean'
          || !Number.isNaN(Number(prop.value))) {
          valStr = `{${prop.value}}`;
        }
        else {
          throw new RangeError(`Got an unexpected type for the value of the key "${prop.key}"`);
        }
      }

      strings.push(`${indentPrefix}${prop.key}= ${valStr}`);
    }

    return strings;
  }

}

export type InitPropsFn = (props: PropField[]) => Props;

export const initPropsFn: InitPropsFn
  = (props: PropField[]) => new _Props(props);
