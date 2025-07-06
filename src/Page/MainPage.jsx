import React from 'react'
import Navebar from '../components/Navebar'
import Hero from '../components/Hero'
import Company from '../components/comopany'
import CaseStudy from '../components/caseStudy'
import Testimonial from '../components/testimonials/Testimonial'
import Benifits from '../components/benifits/Benifits'
import Pricing from '../components/prising'
import Contact from '../components/contactus'
import AirnbnbFooter from '../components/footer'


const MainPage = () => {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <Company/>
      <CaseStudy/>
      <Testimonial/>
      <Benifits/>
      <Pricing/>
      <Contact/>
      <AirnbnbFooter/>
    </div>
  )
}

export default MainPage
