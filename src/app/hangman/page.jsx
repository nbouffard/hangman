'use client'
import { useSelector, useDispatch } from "react-redux";
import { start, checkLetter, checkGame } from '../../store/appSlice'
import { guessedWord } from "../gameLogic/logic";

const disableLetter = (event) => {
  const letterToDisable = event.target
  letterToDisable.setAttribute('disabled', '')
  console.log(guessedWord)
}

const reset = () => {
  const letters = document.querySelectorAll('#letters')
  letters.forEach(letter => letter.removeAttribute('disabled'))
}

const LetterKey = ({dispatch}) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  return alphabet.map((letter) => <button id="letters" className="p-4" key={letter} onClick={() => {dispatch(checkLetter(letter)), dispatch(checkGame(), disableLetter(event))}}>{letter}</button>)
}

export default function Page() {
  const selectedWord = useSelector(state => state.app.selectedWord)
  const guessedWord = useSelector(state => state.app.guessedWord)
  const numOfMistakes = useSelector(state => state.app.numOfMistakes)
  const dispatch = useDispatch()
  return(
    <>
      <h1>Word: {selectedWord}</h1>
      <h1>{guessedWord}</h1>
      <h1>No. of mistake left: {numOfMistakes}</h1>
      <button onClick={() => {dispatch(start()), reset()}}>Start</button>
      <div>
        <LetterKey dispatch={dispatch}/>
      </div>
    </>
  )
}
