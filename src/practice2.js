// TODO 逻辑纰漏，当sections内items顺序不是index顺序时会有问题
const inject = (items, sections) => {
  // TODO 这里应该做sort，而不是reverse
  sections.reverse().forEach(item => {
    items.splice(item.index, 0, item.content)
  })
  return items;
}
export { inject };
