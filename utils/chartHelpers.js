
import { select } from 'd3-selection'
import { interpolateNumber } from 'd3-interpolate'
import numeral from 'numeral'
 
export const numberTween = (d, i, n, format) => {

    const that = select(n[i]),
          num = +that.text().substring(0, that.text().length - 1) * .01,
          newNum = d[0][1] - d[0][0],
          index = interpolateNumber(num, newNum)
          return function(t) {
            that.text(`${numeral(index(t)).format(format)}`);
          }
}
