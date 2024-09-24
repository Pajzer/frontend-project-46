import _ from 'lodash';

const getSpace = (depth, isFull = false) => ' '.repeat(4 * depth).slice(isFull ? 2 : 0);

const stringify = (data, depth) => {
  if (!_.isObject(data)) return String(data);
  const output = Object.entries(data)
    .map(([key, value]) => `${getSpace(depth + 1)}${key}: ${stringify(value, depth + 1)}`);
  return `{\n${output.join('\n')}\n${getSpace(depth)}}`;
};

const iter = (tree, depth) => tree.map((node) => {
  switch (node.type) {
    case 'added':
      return `${getSpace(depth, true)}+ ${node.key}: ${stringify(node.value, depth)}`;
    case 'deleted':
      return `${getSpace(depth, true)}- ${node.key}: ${stringify(node.value, depth)}`;
    case 'notChanged':
      return `${getSpace(depth, true)}  ${node.key}: ${stringify(node.value, depth)}`;
    case 'changed': {
      const output1 = `${getSpace(depth, true)}- ${node.key}: ${stringify(node.value1, depth)}`;
      const output2 = `${getSpace(depth, true)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      return `${output1}\n${output2}`;
    }
    case 'nested':
      return `${getSpace(depth)}${node.key}: {\n${iter(node.children, depth + 1).flat().join('\n')}\n${getSpace(depth)}}`;
    default:
      throw new Error(`Type: ${node.type} is undefined`);
  }
});

const getStylish = (output) => `{\n${iter(output, 1).join('\n')}\n}`;

export default getStylish;
