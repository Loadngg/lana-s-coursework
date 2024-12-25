import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Course } from '../types/course.type'
import { Lecture } from '../types/lecture.type'
import Content from './Content'
import Sidebar from './Sidebar'

interface Props {
	content: Course[]
	showBackBtn?: boolean
}

export default function Wrapper({ content, showBackBtn = false }: Props) {
	const baseTitle = 'Лингвистические средства вычислительных систем'
	const [activeCourseId, setActiveCourseId] = useState(content[0].id)
	const [currentLecture, setCurrentLecture] = useState<Lecture | undefined>()

	const [title, setTitle] = useState(baseTitle)

	const navigate = useNavigate()

	const activeCourseContent = content.find(
		c => c.id === activeCourseId
	) as Course

	const handleBackClick = () => {
		setCurrentLecture(undefined)
		setTitle(baseTitle)
	}

	const resetTitle = () => {
		setTitle(baseTitle)
	}

	return (
		<div className='wrapper'>
			<div className='customBlock flex flex-col items-center text-center justify-center mb-10'>
				<div className='font-bold text-3xl'>{title}</div>
				<div className='flex gap-8'>
					{(currentLecture || showBackBtn) && (
						<button className='customButton' onClick={handleBackClick}>
							Назад к курсу
						</button>
					)}
					<button className='customButton' onClick={() => navigate('/lab')}>
						Лабораторная работа 1
					</button>
				</div>
			</div>
			<div className='flex gap-10 flex-1 mb-16'>
				<Sidebar
					activeCourseId={activeCourseId}
					setActiveCourseId={setActiveCourseId}
					setCurrentLecture={setCurrentLecture}
					content={content}
					resetTitle={resetTitle}
				/>

				<Content
					lectures={activeCourseContent.lectures}
					currentLecture={currentLecture}
					setCurrentLecture={setCurrentLecture}
					setTitle={setTitle}
				/>
			</div>
		</div>
	)
}
