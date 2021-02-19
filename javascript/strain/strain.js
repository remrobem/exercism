const KEEP = 'keep';
const DISCARD = 'discard';

export const keep = (array, predicate) => {
  return executeFunction(array, predicate, KEEP);
};

export const discard = (array, predicate) => {
  return executeFunction(array, predicate, DISCARD);
};

const executeFunction = (array, predicate, action = KEEP) => {
  const result = [];

  array.forEach((element) => {
    let isPredicate = predicate(element);

    if (
      (isPredicate && action == KEEP) ||
      (!isPredicate && action == DISCARD)
    ) {
      result.push(element);
    }
  });

  return result;
};
