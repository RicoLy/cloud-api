// 开发文档: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
module.exports = {
	add(num1, num2){
		return num1+num2;
	},
	mul(num1, num2){
		return num1*num2;
	},
	reduce(num1, num2){
		return num1-num2;
	},
	division(num1, num2){
		if (num2 === 0) {
			return "被除数不能为0";
		}
		return num1/num2;
	}
};
