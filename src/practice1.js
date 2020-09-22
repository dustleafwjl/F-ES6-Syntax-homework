const parseData = ({ data }) => {
  // TODO 箭头函数直接return可以简化写法
  return data.map(ele => {
    // TODO 这四个key是后端返回的，不要写死
    const [name, age, gender, birthday] = ele;
    return {
      name,
      age,
      gender,
      birthday
    }
  })
  
}
export { parseData };
