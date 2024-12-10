'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaData } from './EmblaData'
import EmblaCarouselItem from './EmblaCarouselItem'

type PropType = {
  options?: EmblaOptionsType
  slide : EmblaData[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options, slide } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla h-[40rem]">
      <div className=" overflow-hidden relative h-full " ref={emblaRef}>
        <div className="flex h-full ">
          {slide.map((item, index) => (
            <div className="embla__slide " key={index}>
              <div className="h-full ">
                <EmblaCarouselItem data={item} />
              </div>
            </div>
          ))}
        </div>
        <div className=' absolute h-full top-0 flex items-center w-full'>
          <div className=" w-full flex justify-between h-full">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} className='h-full px-4 bg-black/30'/>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} className='h-full px-4 bg-black/30'/>
          </div>          
        </div>

        <div className="absolute bottom-1 w-full flex justify-center items-center gap-4 ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'w-4 h-4 rounded-full shadow-sm'.concat(
                index === selectedIndex ? ' shadow-md bg-black' : ' bg-slate-300'
              )}
            />
          ))}
        </div>

      </div>

      
    </section>
  )
}

export default EmblaCarousel
