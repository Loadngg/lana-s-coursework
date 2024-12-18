import { useEffect, useState } from 'react'
import { Course } from '../types/course.type'
import Wrapper from './Wrapper'

export default function Home() {
	const [courses, setCourses] = useState<Course[]>([])

	useEffect(() => {
		fetch('data.json')
			.then(response => response.json())
			.then(data => setCourses(data))
			.catch(error => console.error('Error fetching data:', error))
	}, [])

	if (courses.length === 0) {
		return (
			<div className='text-5xl text-white mt-16 w-full text-center font-bold'>
				Данные загружаются...
			</div>
		)
	} else return <Wrapper content={courses} />
}
