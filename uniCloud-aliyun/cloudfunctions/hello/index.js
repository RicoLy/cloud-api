'use strict';
const uuidv4 = require('genId');
const {add, mul} = require('utils');
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event);
	
	const uid = uuidv4();
	let res = {
		msg: `hello cloudFunction uuid: ${uid}`,
		addResult: `${add(12, 3)}`,
		mulResult: `${mul(12, 3)}`
	}
	
	//返回数据给客户端
	return res
};
