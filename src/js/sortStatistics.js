// no use module
function sortStatistics(nodes) {
  const statistics = document.querySelector('.statistics');
  let template = '<div class="sort-wrapper"><button class="sort">sort</button></div>';
  nodes.forEach((old) => {
    const category = old.slice();
    // category.sort((a, b) => a.getErrorRate() - b.getErrorRate());
    category.sort((a, b) => a.getWord().localeCompare(b.getWord()));

    for (let node = 0; node < category.length; node += 1) {
      template += category[node].getStatistics();
    }
  });
  statistics.innerHTML = '';
  statistics.innerHTML = template;
}

module.exports = {
  sortStatistics,
};
