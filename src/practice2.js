const inject = (items, sections) => {
  sections.reverse().forEach(item => {
    items.splice(item.index, 0, item.content)
  })
  return items;
}
export { inject };
