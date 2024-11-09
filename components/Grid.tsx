import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {[{title: 'Title1', description : "Desc1"}].map((item,i) =>(
                  <BentoGridItem
                  id={item.id}
                  key={i}
                  title={item.title}
                  description={item.description}
                  className={item.className}
                  img={item.img}
                  imgClassName={item.imgClassName}
                  titleClassName={item.titleClassName}
                  spareImg={item.spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid