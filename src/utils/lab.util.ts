import { alphabet, id } from '../constants/lab.const'

let resultStr: string[] = []

export function resetResult() {
	resultStr = []
}

export function listOfOp(str: string[]): string[] {
	let j = 0
	const result = []

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '8' && str[i - 1] !== '10') {
			op(str.slice(j, i))
			j = i + 1
			result.push(alphabet['8'])
		}
		if (i === str.length - 1) {
			op(str.slice(j, str.length))
		}
	}

	for (const i of result) {
		resultStr.push(i)
	}

	return resultStr
}

function op(str: string[]) {
	if (str[0] === '9') {
		assigning(str)
	}
	if (str[0] === '1') {
		conditionOp(str)
	}
}

function conditionOp(str: string[]) {
	const result = []

	if (str[0] === '1') {
		result.push(alphabet['1'])
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '3' && str[i - 1] !== '9') {
				result.push(alphabet['3'])
				condition(str.slice(1, i))
				assigning(str.slice(i + 1, str.length))
			}
		}
	}

	for (const i of result) {
		resultStr.push(i)
	}
}

function condition(str: string[]) {
	const result = []
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '5') {
			term(str.slice(0, i))
			result.push(alphabet['5'])
		}
	}
	result.push(str[str.length - 1])
	for (const i of result) {
		resultStr.push(i)
	}
}

function assigning(str: string[]) {
	const result = []
	if (str[0] === '9') {
		result.push(id[str[1] as keyof typeof id])
		if (str[2] === '6') {
			result.push(alphabet['6'])
			term(str.slice(3, str.length))
		}
	}
	for (const i of result) {
		resultStr.push(i)
	}
}

function term(str: string[]) {
	const result = []
	let fl = 0

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '9' && fl % 2 === 0) {
			multiplier(str.slice(i, i + 2))
			fl++
		}
		if (str[i] === '10' && fl % 2 === 0) {
			multiplier(str.slice(i, i + 2))
			fl++
		}
		if (
			str[i] === '2' &&
			str[i - 1] !== '10' &&
			str[i - 1] !== '9' &&
			fl % 2 !== 0
		) {
			result.push(alphabet['2'])
			fl++
		}
		if (
			str[i] === '4' &&
			str[i - 1] !== '10' &&
			str[i - 1] !== '9' &&
			fl % 2 !== 0
		) {
			result.push(alphabet['4'])
			fl++
		}
		if (
			str[i] === '7' &&
			str[i - 1] !== '10' &&
			str[i - 1] !== '9' &&
			fl % 2 !== 0
		) {
			result.push(alphabet['7'])
			fl++
		}
	}

	for (const i of result) {
		resultStr.push(i)
	}
}

function multiplier(str: string[]) {
	if (str[0] === '9') {
		resultStr.push(str[1])
	}
	if (str[0] === '10') {
		resultStr.push(str[1])
	}
}
