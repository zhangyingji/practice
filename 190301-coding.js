/**
 * 把一个字符串中所有的:到.的子串解析出来到一个数组当中
 */
const extractStr = (str) => {
    const ret = str.match(/:([^:\.])*\./g)
    console.log(ret)
    return ret.map((subStr) => subStr.replace(/[:\.]/g, '')) 
}

extractStr('My name is::Jerry.My age is:12.')