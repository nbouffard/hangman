import { isLetterInWord, updateGuessedWord, createGuessedWord, createSelectedWord, selectedWord, guessedWord } from '@/app/gameLogic/logic';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   selectedWord: '',
   guessedWord: '',
   numOfMistakes: 0,
   gameStatus: ''
  }

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    start: state => {
        state.selectedWord = createSelectedWord();
        state.guessedWord = createGuessedWord(state.selectedWord);
        state.numOfMistakes = 0
        state.gameStatus = ''
    },
    checkLetter: (state, action) => {
      const letter = action.payload
      if (state.numOfMistakes > 0 && state.guessedWord !== state.selectedWord) {
        if (isLetterInWord(letter, state.selectedWord)) {
          state.guessedWord = updateGuessedWord(letter, state.guessedWord, state.selectedWord)
        } else {
          state.numOfMistakes += 1
        }
      }
    },
    checkGame: (state) => {
      if (state.numOfMistakes === 7) {
        state.gameStatus = 'lost'
      } else if (state.guessedWord !== state.selectedWord && state.numOfMistakes > 0) {
        console.log('try again')
      } else {
        state.gameStatus = 'win'
      }
    //   if (state.guessedWord === state.selectedWord && state.numOfMistakes > 0) {
    //       window.alert('You Won!!!')
    //     } else if (state.guessedWord !== state.selectedWord && state.numOfMistakes > 0){
    //       console.log('try again')
    //     } else {
    //       console.log('lost!')
    //     }
    }
  }
})

export const { start, checkLetter, checkGame } = appSlice.actions
export default appSlice.reducer
