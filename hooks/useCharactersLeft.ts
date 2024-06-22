import React, { useState } from 'react'

type Props = {
    maxLength: number;
    currentInputValue: string;
}

function useCharactersLeft(maxLength: number) {
    const [charactersLeft, setCharactersLeft] = useState(maxLength)

    function handleSetCharactersLeft(currentInputValue: string) {
        const newCharactersLeft = maxLength - currentInputValue.length;
        setCharactersLeft(newCharactersLeft);
    }

  return {
    charactersLeft,
    handleSetCharactersLeft,
  }
}

export default useCharactersLeft