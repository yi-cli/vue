
const utils = {
  serialize(obj) {
    let res = []
    for(let i in obj){
      res.push(`${i}=${encodeURIComponent(obj[i])}`)
    }
    return res.join('&')
  }
}

export default utils