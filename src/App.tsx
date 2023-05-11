import  React from 'react';
import './App.css'
import { CardType, Card } from "./components/card/card.class";
import { v4 as uuidv4 } from 'uuid'
import {getColor} from "./helpers/color.helper.ts";
import {shuffle} from "./helpers/shuffle.helper.ts";
import Field from "./components/field";



const colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'pink',
    'purple',
    'orange',
    '#48C9B0'
]

const App: React.FC = (): JSX.Element => {

    const size = 6
    const colorGenFn = getColor( colors )
    let filledArray: CardType[] = (new Array(size * size))
        .fill(null)
        .map( () => new Card( uuidv4(), colorGenFn(), false ) )
    filledArray = shuffle(filledArray)
    return (
    <>
        <Field list={filledArray} />
    </>
  )
}

export default App
