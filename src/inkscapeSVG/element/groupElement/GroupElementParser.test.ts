import t from 'tap'
import { _GroupElementParser } from './GroupElementParser.ts';
import { Arg, Substitute } from '@fluffy-spoon/substitute';
import { GroupElementAttributes, GroupElementAttributesSchema } from './GroupElementAttributesSchema.ts';
import { InitGroupElementFn, GroupElement, GroupElementFields } from './GroupElement.ts';
import { ElementParserFactory } from '../ElementParserFactory.ts';
import { INode } from 'svgson';
import { ElementParser } from '../ElementParser.ts';
import { Element } from '../Element.ts';

t.test('parse correctly parses', t => {
  const nodes: {
    svgsonNode: INode,
    attributes: GroupElementAttributes,
    props: GroupElementFields,
  }[] = [
      {
        svgsonNode: {
          "name": "g",
          "type": "element",
          "value": "",
          "attributes": {
            "id": "g1"
          },
          "children": [
          ]
        },
        attributes: {
          "id": "g1"
        },
        props: {
          id: 'g1',
          children: []
        }
      },
      {
        svgsonNode: {
          "name": "g",
          "type": "element",
          "value": "",
          "attributes": {
            "id": "layer1"
          },
          "children": [
          ]
        },
        attributes: {
          "id": "layer1"
        },
        props: {
          id: 'layer1',
          children: []
        }
      },
    ];
  for (let i = 0; i < nodes.length; i++) {
    const svgGroupElementSchema = Substitute.for<GroupElementAttributesSchema>();
    svgGroupElementSchema
      .parse(nodes[i].svgsonNode.attributes)
      .returns(nodes[i].attributes);

    const rectElement = Substitute.for<GroupElement>();

    // A "Jacket" is a concept I made up:
    // It's an object that's made just to have the function
    // of interest as its one and only method. Then,
    // because I can have that object implement an interface,
    // I can use @fluffy-spoon/substitute to mock the function
    // of interest.
    interface InitGroupElementFnJacket {
      fn: InitGroupElementFn,
    }
    const initGroupElementFnJacket = Substitute.for<InitGroupElementFnJacket>();
    initGroupElementFnJacket
      .fn(nodes[i].props)
      .returns(rectElement);

    const elementParserFactory = Substitute.for<ElementParserFactory>();

    const rectElementParser = new _GroupElementParser({
      svgGroupElementSchema,
      initGroupElementFn: initGroupElementFnJacket.fn,
      elementParserFactory,
    });

    const found: GroupElement = rectElementParser.parse(nodes[i].svgsonNode);
    const wanted: GroupElement = rectElement;

    // - start verify internal function calls -
    initGroupElementFnJacket.received()
      .fn(nodes[i].props);

    svgGroupElementSchema
      .received()
      .parse(nodes[i].svgsonNode.attributes);

    // - end verify internal function calls -

    t.same(found, wanted, `at i=${i}`);
  }

  t.end();
});


t.test('parse correctly parses with sub-children', t => {
  const node: {
    svgsonNode: INode,
    attributes: GroupElementAttributes,
    props: GroupElementFields,
  } =
  {
    svgsonNode: {
      "name": "g",
      "type": "element",
      "value": "",
      "attributes": {
        "id": "root"
      },
      "children": [
      ]
    },
    attributes: {
      "id": "root"
    },
    props: {
      id: 'root',
      children: []
    }
  };
  // start the provisions for the children
  const children: {
    svgsonNode: INode,
    attributes: GroupElementAttributes,
    props: GroupElementFields,
  }[] = [
      {
        svgsonNode: {
          "name": "g",
          "type": "element",
          "value": "",
          "attributes": {
            "id": "g1"
          },
          "children": [
          ]
        },
        attributes: {
          "id": "g1"
        },
        props: {
          id: 'g1',
          children: []
        }
      },
      {
        svgsonNode: {
          "name": "g",
          "type": "element",
          "value": "",
          "attributes": {
            "id": "layer1"
          },
          "children": [
          ]
        },
        attributes: {
          "id": "layer1"
        },
        props: {
          id: 'layer1',
          children: []
        }
      },
    ];
  const childrenINodes = children.map(child => child.svgsonNode);
  const childrenParser = Substitute.for<ElementParser>();

  // the same parser for all the children because
  // the parser factory has all nodes of the same
  // type share a parser.
  const childrenParsers = Array(children.length).fill(childrenParser);
  const childrenInkscapeSVGElements = children
    .map(_ => Substitute.for<Element>());

  const elementParserFactory = Substitute.for<ElementParserFactory>();

  childrenINodes.forEach((node, i) => elementParserFactory
    .init(node)
    .returns(childrenParsers[i]));

  childrenParsers
    .forEach((parser, i) => parser
      .parse(childrenINodes[i])
      .returns(childrenInkscapeSVGElements[i]));

  // end the provisions for the children

  const svgGroupElementSchema = Substitute.for<GroupElementAttributesSchema>();
  svgGroupElementSchema
    .parse(node.svgsonNode.attributes)
    .returns(node.attributes);


  const rectElement = Substitute.for<GroupElement>();

  // A "Jacket" is a concept I made up:
  // It's an object that's made just to have the function
  // of interest as its one and only method. Then,
  // because I can have that object implement an interface,
  // I can use @fluffy-spoon/substitute to mock the function
  // of interest.
  interface InitGroupElementFnJacket {
    fn: InitGroupElementFn,
  }
  const initGroupElementFnJacket = Substitute.for<InitGroupElementFnJacket>();
  initGroupElementFnJacket
    .fn({ ...node.props, children: childrenInkscapeSVGElements })
    .returns(rectElement);


  const rectElementParser = new _GroupElementParser({
    svgGroupElementSchema,
    initGroupElementFn: initGroupElementFnJacket.fn,
    elementParserFactory,
  });

  const found: GroupElement = rectElementParser.parse({
    ...node.svgsonNode, children: childrenINodes
  });
  const wanted: GroupElement = rectElement;

  // - start verify internal function calls -

  childrenINodes.forEach((node, i) => elementParserFactory
    .received()
    .init(node)
  );

  childrenParsers
    .forEach((parser, i) => parser
      .received()
      .parse(childrenINodes[i])
    );



  initGroupElementFnJacket.received()
    .fn({ ...node.props, children: childrenInkscapeSVGElements });

  svgGroupElementSchema
    .received()
    .parse(node.svgsonNode.attributes);

  // - end verify internal function calls -

  t.same(found, wanted,);

  t.end();
});

