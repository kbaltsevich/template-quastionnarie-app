let isArray =
  Array.isArray ||
  function (arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
  };

let isObject = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
};

function objectStateTree(tr, findString, setValue) {
  function findPath(branch, str) {
    Object.keys(branch).forEach(function (key) {
      if (isArray(branch[key]) || isObject(branch[key])) {
        findPath(branch[key], str ? str + "." + key : key);
      } else {
        if (branch[key] === findString) {
          branch["value"] = setValue;
          return branch;
        }
      }
    });
  }

  findPath(tr, "");
  return tr;
}

export default objectStateTree;
