import React from 'react'

export const LogItem = ({log}) => {
  return (
    <li className='collection-item'>
        <div>
            <a href='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
        </div>
    </li>
  )
}
