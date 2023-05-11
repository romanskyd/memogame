import React, { useState } from 'react'
import Card from '../card'
import { CardType } from '../card/card.class.ts'

const closeCardById = (
  cardId: string,
  items: CardType[],
  callback: React.Dispatch<React.SetStateAction<CardType[]>>
) => {
  const tmp = [...items]
  const item = tmp.find(({ id }) => id === cardId)!
  item.close()
  callback(tmp)
}

const gameHandler = (() => {
  let pair: CardType[] = []
  return (
    item: CardType,
    items: CardType[],
    callback: React.Dispatch<React.SetStateAction<CardType[]>>
  ) => {
    if (pair.length < 2) {
      pair.push(item)
    }
    if (pair.length === 2) {
      if (pair[0].color !== pair[1].color) {
        setTimeout(() => {
          closeCardById(pair[0].id, items, callback)
          closeCardById(pair[1].id, items, callback)
          pair = []
        }, 1000)
      } else {
        pair = []
      }
    }
  }
})()

const Field: React.FC<{ list: CardType[] }> = ({ list }) => {
  const clickHandler = (id: string) => {
    const tmp = [...items]
    const item = tmp.find(({ id: itemId }) => itemId === id)!
    item.open()
    setItems(tmp)
    gameHandler(item, tmp, setItems)
  }

  const [items, setItems] = useState<CardType[]>([])
  if (items.length === 0) {
    setItems(list)
  }
  const style = { '--size': Math.sqrt(list.length) } as React.CSSProperties
  const itemsArray = items.map(({ id, color, opened }) => (
    <Card
      key={id}
      id={id}
      color={color}
      opened={opened}
      click={clickHandler}
    />
  ))
  return (
    <div
      className="board"
      style={style}
    >
      {itemsArray}
    </div>
  )
}
export default Field
