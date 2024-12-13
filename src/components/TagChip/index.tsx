import React from 'react'

export default function TagChip({tag}:{tag:string}) {
  return (
    <div className='shadow-lg p-2 rounded-xl px-4'>{tag}</div>
  )
}
