// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GraphView from '@amilajack/react-digraph';
import routes from '../constants/routes.json';
import styles from './Home.css';

const sample = {
  nodes: [
    {
      id: 1,
      title: 'Node A',
      x: 258.3976135253906,
      y: 331.9783248901367,
      type: 'empty'
    },
    {
      id: 2,
      title: 'Node B',
      x: 593.9393920898438,
      y: 260.6060791015625,
      type: 'empty'
    },
    {
      id: 3,
      title: 'Node C',
      x: 237.5757598876953,
      y: 61.81818389892578,
      type: 'empty'
    },
    {
      id: 4,
      title: 'Node C',
      x: 600.5757598876953,
      y: 600.81818389892578,
      type: 'empty'
    }
  ],
  edges: [
    {
      source: 1,
      target: 2,
      type: 'emptyEdge'
    },
    {
      source: 2,
      target: 4,
      type: 'emptyEdge'
    }
  ]
};

const GraphConfig = {
  NodeTypes: {
    empty: {
      typeText: 'None',
      shapeId: '#empty',
      shape: (
        <symbol viewBox="0 0 100 100" id="empty" key="0">
          <circle cx="50" cy="50" r="45" />
        </symbol>
      )
    }
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      shapeId: '#emptyEdge',
      shape: (
        <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
          <circle cx="25" cy="25" r="8" fill="currentColor" />
        </symbol>
      )
    }
  }
};

const EMPTY_TYPE = 'empty'; // Text on empty nodes is positioned differently
const NODE_KEY = 'id'; // Allows D3 to correctly update DOM

class Graph extends Component {
  state = {
    graph: sample,
    selected: {}
  };

  /* Define custom graph editing methods here */

  render() {
    const {graph} =this.state;
    const {nodes, edges, selected} = graph;

    const {NodeTypes, NodeSubtypes
      ,EdgeTypes} = GraphConfig;

    return (
      <div id="graph" style={styles.graph}>
        <GraphView
          nodeKey={NODE_KEY}
          emptyType={EMPTY_TYPE}
          nodes={nodes}
          edges={edges}
          selected={selected}
          nodeTypes={NodeTypes}
          nodeSubtypes={NodeSubtypes}
          edgeTypes={EdgeTypes}
        />
      </div>
    );
  }
}

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <Graph />
      </div>
    );
  }
}
