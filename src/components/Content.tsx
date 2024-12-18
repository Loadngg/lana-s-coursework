import { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { Lecture } from '../types/lecture.type'

interface Props {
	lectures: Lecture[]
	currentLecture: Lecture | undefined
	setCurrentLecture: React.Dispatch<React.SetStateAction<Lecture | undefined>>
	setTitle: React.Dispatch<React.SetStateAction<string>>
}

const Content = ({
	lectures,
	currentLecture,
	setCurrentLecture,
	setTitle,
}: Props) => {
	const [lectureText, setLectureText] = useState('')

	useEffect(() => {
		if (!currentLecture) return

		fetch(currentLecture.text)
			.then(response => response.text())
			.then(data => {
				setLectureText(data)
			})
			.catch(error => {
				console.error('Error fetching the markdown file:', error)
			})
	}, [currentLecture])

	const handleLectureClick = (lecture: Lecture) => {
		setTitle(lecture.title)
		setCurrentLecture(lecture)
	}

	if (currentLecture)
		return (
			<main className='customBlock flex-1 text-start max-w-[1000px] min-w-[1000px]'>
				<div>
					<Markdown
						className={'markdownContent'}
						children={lectureText}
						remarkPlugins={[remarkGfm]}
						components={{
							code(props) {
								const { children, className, node, ...rest } = props
								const match = /language-(\w+)/.exec(className || '')
								return match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, '')}
										language={match[1]}
										showLineNumbers
										wrapLongLines
										style={oneDark}
									/>
								) : (
									<code {...rest} className={className}>
										{children}
									</code>
								)
							},
						}}
					/>
				</div>
			</main>
		)
	else
		return (
			<main className='customBlock gap-2 flex-1 flex-col text-start'>
				<p className='text-left text-2xl font-bold'>План:</p>
				<ul>
					{lectures.map(item => (
						<li key={item.id}>
							<button
								className='hover:text-purple-600 transition-colors text-left text-lg font-bold mb-2'
								onClick={() => handleLectureClick(item)}
							>
								{item.title}
							</button>
						</li>
					))}
				</ul>
			</main>
		)
}

export default Content
