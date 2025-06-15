'use client'
import { useSelector, useDispatch } from "react-redux";
import { start, checkLetter, checkGame } from '../../store/appSlice'
import Image from "next/image";

const StartGame = ({dispatch, selectedWord}) => {
  let game = ''
  if (selectedWord.length > 0) {
    game = 'New Game'
  } else {
    game = 'Start game'
  }
  return(
    <button className='mt-16 p-2 xs:p-4 bg-blue-500 hover:bg-blue-300 rounded-md w-1/2 m-auto' onClick={() => {dispatch(start()), reset()}}>{game}</button>
  )
}

const disableLetter = (event) => {
  const letterToDisable = event.target
  letterToDisable.setAttribute('disabled', '')
  letterToDisable.classList.remove('hover:bg-yellow-400')
  letterToDisable.classList.add('text-red-200')
  letterToDisable.classList.add('hover:bg-grey-200')
}

const buttonClass = 'p-2 m-2 text-black-400 bg-yellow-200 hover:bg-yellow-400 border-black border-2 rounded-md border-solid w-12'

const reset = () => {
  const letters = document.querySelectorAll('#letters')
  letters.forEach((letter) => {
    letter.removeAttribute('disabled')
    letter.classList.replace('text-red-200', 'text-black-400')
  })
}

const LetterKey = ({dispatch}) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  return alphabet.map((letter) => <button id="letters" className={buttonClass} key={letter} onClick={() => {dispatch(checkLetter(letter)), dispatch(checkGame(), disableLetter(event))}}>{letter}</button>)
}

const MistakeCounter = ({mistakes}) => {
  return(
    <Image
    src={`/images/${mistakes}.png`}
    className="w-1/2 h-2/3  xs:h-[300px] xs:w-[250px] sm:h-[400px] sm:w-[400px]"
    width={500}
    height={500}
    alt={`image of hangman at mistake no.${mistakes}`}
  />
  )
}

const DisplayGuessWord = ({guessedWord}) => {
  return(
    guessedWord.split('').map((letter, i) => {
      return <h1 key={i} className="bg-grey-200 font-bold p-2 xs:p-4 xs:text-2xl inline">{letter}</h1>
    })
  )
}

export default function Page() {
  const selectedWord = useSelector(state => state.app.selectedWord)
  const guessedWord = useSelector(state => state.app.guessedWord)
  const numOfMistakes = useSelector(state => state.app.numOfMistakes)
  const gameStatus = useSelector(state => state.app.gameStatus)
  const dispatch = useDispatch()
  return(
    <>
    <div className="absolute inset-0 bg-green-200 xs:bg-pink-200 sm:bg-yellow-200 md:bg-blue-200 lg:bg-red-200 xl:bg-grey-200 2xl:bg-orange-200 lg:flex">
        <div className="lg:w-6/12 flex flex-col">
          {/* <h1 className="h-12 min-w-24 flex justify-center">{gameStatus}</h1> */}
          <StartGame dispatch={dispatch} selectedWord={selectedWord} />
          <div className="mt-16 mb-16 xs:h-[300px] xs:min-w-[300px] sm:h-[400px] flex justify-center items-center">
            <MistakeCounter mistakes={numOfMistakes}/>
          </div>
        </div>
        <div>
          <div className="m-auto w-auto h-[100px] xs:h-[200px] sm:h-[200px] flex justify-center items-center">
            <DisplayGuessWord guessedWord={guessedWord}/>
          </div>
          <div className="m-4 grid grid-cols-5 gap-1 place-items-center xs:grid-cols-8 xs:gap-x-2 xs:gap-y-2 sm:grid-cols-10 md:grid-cols-12 ">
            <LetterKey dispatch={dispatch}/>
          </div>
        </div>
    </div>
    </>
  )
}
