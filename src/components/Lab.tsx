import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { inputStr } from '../constants/lab.const'
import { listOfOp, resetResult } from '../utils/lab.util'

const Lab = () => {
	const navigate = useNavigate()
	const [result, setResult] = useState<string[]>([])

	const handleButtonClick = () => {
		setResult([])
		resetResult()
		const res = listOfOp(inputStr.split(/\s+/))
		setResult(res)
	}

	return (
		<div className='wrapper'>
			<div className='customBlock flex flex-col items-center text-center justify-center mb-10'>
				<div className='font-bold text-3xl'>Лабораторная работа 1</div>
				<button
					className='font-bold text-l bg-purple-900 hover:bg-purple-600 transition-colors text-white rounded-3xl py-2 px-6'
					onClick={() => navigate('/')}
				>
					Назад к курсу
				</button>
			</div>
			<main className='customBlock flex-1 flex-col text-start w-full mb-16'>
				<h2 className='font-bold text-xl'>Задание к лабораторной работе:</h2>
				<p className='text-lg'>
					Реализовать алгоритм синтаксического анализа методом рекурсивного
					спуска. На вход получаем лексемы, полученные в результате лексического
					анализа
				</p>
				<p className='font-bold text-lg'>Начальные условия:</p>
				<p>{inputStr.split(/\s+/).join(' ')}</p>
				<button className='customButton w-fit' onClick={handleButtonClick}>
					Преобразовать
				</button>
				{result.length > 0 && (
					<>
						<p className='font-bold text-lg'>Результат работы:</p>
						<div>
							{result.map(i => (
								<p>{i}</p>
							))}
						</div>
					</>
				)}
			</main>
		</div>
	)
}

export default Lab
