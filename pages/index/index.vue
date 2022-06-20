<template>
	<view class="content">
		<button @click="hello">调用云函数</button>
		<input type="number" v-model="num1"/>
		<input type="number" v-model="num2"/>
		<button @click="maths('add')">+</button>
		<button @click="maths('reduce')">-</button>
		<button @click="maths('mul')">*</button>
		<button @click="maths('division')">/</button>
		<text>{{result}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num1: 0,
				num2: 0,
				result: 0
			}
		},
		onLoad() {

		},
		methods: {
			async maths(type){
				const maths = uniCloud.importObject('maths');
				let res = await maths[type](parseInt(this.num1), parseInt(this.num2));
				console.log(res);
				this.result = res;
			},
			hello(){
				uniCloud.callFunction({
					name:'hello',
					success(res) {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

</style>
