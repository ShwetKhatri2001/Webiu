import React, { useCallback, useEffect, useState } from "react"
import Styles from "./styles"
import SectionHeading from "../sectionHeading"
import useEmblaCarousel from "embla-carousel-react"
import { DotButton, NextButton, PrevButton } from "../carouselButtons"
import testimonial from "../../../assets/data/testimonial"

const Testimonials = () => {
  const classes = Styles()
  const [selectedIndex, setselectedIndex] = useState(0)
  const testimonialArray = Array(3).fill(testimonial)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSlideChange)
  }, [emblaApi])
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [
    emblaApi,
  ])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [
    emblaApi,
  ])
  const scrollTo = useCallback(index => emblaApi && emblaApi.scrollTo(index), [
    emblaApi,
  ])
  const onSlideChange = useCallback(() => {
    setselectedIndex(emblaApi.selectedScrollSnap)
  }, [emblaApi])

  const renderSingleTestimonial = (item, key) => {
    return (
      <div className={`row embla__slide ${classes.testimonial}`} key={key}>
        <div style={{ flex: 1 }} className="row">
          <div className={classes.avatar}>
            <img src={item.userImage} alt="Health is Wealth" />
          </div>
          <div className={classes.userInfoUnit}>
            <h3>{item.userName}</h3>
            <p>{item.userSubHeading}</p>
          </div>
        </div>
        <div className={`${classes.testimonialText}`}>
          <p>{`" ${item.reviewText} "`}</p>
        </div>
      </div>
    )
  }
  const renderDots = () => {
    return (
      <div className={`row ${classes.dotContainer}`}>
        {testimonialArray.map((_, index) => {
          return (
            <DotButton
              key={index}
              selected={index == selectedIndex}
              clickHandler={() => scrollTo(index)}
            />
          )
        })}
      </div>
    )
  }
  return (
    <section className="margin-on-side" style={{ marginBottom: "4rem" }}>
      <div className={`${classes.testimonialContainer}`}>
        <div className="row center">
          <SectionHeading
            headingTitle="What our customer are saying"
            color={"#fff"}
          />
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {testimonialArray.map((item, index) =>
              renderSingleTestimonial(item, index)
            )}
          </div>
        </div>
      </div>
      <div className={`${classes.carouselNavContainer} row center`}>
        <PrevButton clickHandler={scrollPrev} />
        {renderDots()}

        <NextButton clickHandler={scrollNext} />
      </div>
    </section>
  )
}

export default Testimonials
