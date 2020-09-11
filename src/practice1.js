const parseData = ({ data }) => {
  return data.map(ele => {
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
