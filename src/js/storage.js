function storage(arr) {
  const all = [];
  arr.forEach((categoryType) => {
    const category = [];
    for (let node = 0; node < categoryType.length; node += 1) {
      category.push(categoryType[node].statisticsState());
    }
    all.push(category);
  });
  localStorage.setItem('statistics', JSON.stringify(all));
}

module.exports = {
  storage,
};
