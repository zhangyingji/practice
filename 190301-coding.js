/**
 * 把一个字符串中所有的:到.的子串解析出来到一个数组当中
 * @param {string} str 
 */
const extractStr = (str) => {
    const ret = str.match(/:([^:\.])*\./g)
    return ret.map((subStr) => subStr.replace(/[:\.]/g, '')) 
}

/**
 * 数组从小到大排序
 * @param {array} arr 
 */
const sortUp = (arr) => arr.sort((a,b) => a - b)


/**
 * 链式操作
 */
class Hero {
    constructor(name) {
      this.name = name
      this.sum = 0
      this.promise = Promise.resolve()
    }

    sleep(time) {
      this.promise = this.promise.then(function () {
        console.log('在床上睡' + time + '毫秒...')
        return new Promise(function (resolve) {
          setTimeout(resolve, time)
        })
      })
      return this
    }

    kill(num) {
      const that = this
      this.promise = this.promise.then(function () {
        that.sum += num
        console.log(`${that.name} 已干掉 ${that.sum} 只怪兽！`)
        return Promise.resolve()
      })
      return this
    }
  }
  // const hero = new Hero('超人');
  // hero
  //   .kill(3)
  //   .kill(4)
  //   .kill(4)
  //   .sleep(100000)


/**
 * 
 */