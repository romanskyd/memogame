import React, { memo } from 'react'
import './card.scss'

interface CardItemProps {
  id: string
  color: string
  opened: boolean
  click: (id: string) => void
}
const Card: React.FC<CardItemProps> = memo(({ id, color, opened, click }) => {
  console.log('PROPS', { id, color, opened })

  const style = { backgroundColor: color } as React.CSSProperties
  return (
    <div
      className={'flip-card' + (opened ? ' open' : '')}
      onClick={() => {
        click(id)
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front"></div>
        <div
          className="flip-card-back"
          style={style}
        >
          {/*<h1>John Doe</h1>*/}
          {/*<p>Architect & Engineer</p>*/}
          <p>{color}</p>
        </div>
      </div>
    </div>
  )
})

export default Card
