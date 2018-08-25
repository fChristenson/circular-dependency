function either(left, right) {
  return expression => {
    return expression ? right() : left();
  };
}

module.exports = either;
