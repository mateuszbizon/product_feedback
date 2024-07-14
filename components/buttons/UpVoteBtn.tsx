"use client"

import React, { useState, useEffect } from 'react'
import IconArrowUp from '../icons/IconArrowUp'
import { useAuth } from '@clerk/nextjs';

type Props = {
  isRoadmap?: boolean;
  upVotesProp: string[];
  setUpVotesProp?: React.Dispatch<React.SetStateAction<string[]>>
}

function UpVoteBtn({ isRoadmap, upVotesProp, setUpVotesProp }: Props) {
  const { userId } = useAuth();
  const [upVotes, setUpVotes] = useState<string[]>(upVotesProp);

  useEffect(() => {
    setUpVotes(upVotesProp);
  }, [upVotesProp]);

  function handleClick(event: React.MouseEvent) {
    event.stopPropagation();
    event.preventDefault();

    if (userId) {
      if (upVotes.includes(userId)) {
        const newUpVotes = upVotes.filter(vote => vote !== userId)

        setUpVotes(newUpVotes)

        if (setUpVotesProp) {
          setUpVotesProp(newUpVotes)
        }

        return
      }

      setUpVotes(prev => [...prev, userId])

      if (setUpVotesProp) {
        setUpVotesProp(prev => [...prev, userId])
      }
    }
  }

  function checkUserUpVotes() {
    if (userId) {
      if (upVotes.includes(userId)) return true

      return false
    }

    return false
  }

  return (
    <button
      className={`btn-1 ${checkUserUpVotes() ? "btn-1-active" : "btn-1-not-active"} flex items-center ${!isRoadmap && "md:flex-col md:px-3"} gap-1`}
      onClick={handleClick}
    >
      <div className={`${checkUserUpVotes() ? "text-light-1" : "text-primary-2"}`}>
        <IconArrowUp />
      </div>
      <span className={`text-7 font-bold ${checkUserUpVotes() ? "text-light-1" : "text-dark-2"}`}>
        {upVotes.length}
      </span>
    </button>
  )
}

export default UpVoteBtn;
