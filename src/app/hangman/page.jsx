'use client'
import { useSelector, useDispatch } from "react-redux";
import { start, checkLetter, checkGame } from '../../store/appSlice'

const StartGame = ({dispatch}) => {
  return(
    <button className='p-4 bg-blue-500 hover:bg-blue-300 rounded-md m-4' onClick={() => {dispatch(start()), reset()}}>Start</button>
  )
}

const DisplayHangman = ({mistakes}) => {

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
    // console.log(letter.classList)
    letter.classList.replace('text-red-200', 'text-black-400')
  })
}

const LetterKey = ({dispatch}) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  return alphabet.map((letter) => <button id="letters" className={buttonClass} key={letter} onClick={() => {dispatch(checkLetter(letter)), dispatch(checkGame(), disableLetter(event))}}>{letter}</button>)
}

const MistakeCounter = ({mistakes}) => {
  const x = '❌'
  return(
    <h1 className="text-4xl h-24 min-w-24">{x.repeat(mistakes)}</h1>
  )
}

const DisplayGuessWord = ({guessedWord}) => {
  return(
    guessedWord.split('').map((letter, i) => {
      return <h1 key={i} className="p-4 text-2xl inline">{letter}</h1>
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
    <div className="absolute inset-0 bg-green-200 flex flex-col justify-center items-center">
      <h1 className="h-12 min-w-24 flex justify-center">{gameStatus}</h1>
      <StartGame dispatch={dispatch} />
      <DisplayHangman mistakes={numOfMistakes} />
      <div className="w-[400px] h-[200px] flex justify-center items-center bg-blue-100">
        <DisplayGuessWord guessedWord={guessedWord}/>
      </div>
      <div className="flex justify-between">
        <LetterKey dispatch={dispatch}/>
      </div>
      <MistakeCounter mistakes={numOfMistakes}/>
    </div>

    </>
  )
}
