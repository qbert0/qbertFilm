import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../css/base.css'
import '../css/embla.css'
import { EmblaData } from './EmblaData'

interface Props {
  Embla : EmblaData[]
}

const OPTIONS: EmblaOptionsType = {loop : true}

const Embla = ({Embla} : Props) => {
  return (

  <>
    <EmblaCarousel slide={Embla} options={OPTIONS} />
  </>
)
}

export default Embla
