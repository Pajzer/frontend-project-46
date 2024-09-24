import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const key1 = _.keys(obj1);
  const key2 = _.keys(obj2);
  const sortedKeys = _.sortBy(_.union(key1, key2));

  return sortedKeys.map((key) => {
    if (!_.has(obj1, key)) { return { key, type: 'added', value: obj2[key] }; }
    if (!_.has(obj2, key)) { return { key, type: 'deleted', value: obj1[key] }; }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) { return { key, type: 'nested', children: buildTree(obj1[key], obj2[key]) }; }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, type: 'changed', value1: obj1[key], value2: obj2[key],
      };
    }

    return { key, type: 'notChanged', value: obj1[key] };
  });
};

export default buildTree;
