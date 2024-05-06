import { Navbar } from "../Components"
import { Hero, About, Service, Animation, Solution, Footer, Contact } from "../Sections"

export const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Animation/>
      <Solution/>
      <Footer/>
    </div>
  )
}
