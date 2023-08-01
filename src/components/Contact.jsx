import React, {useState, useRef} from "react"
import { motion } from "framer-motion"
import { SectionWrapper } from "./hoc"
import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import emailjs from '@emailjs/browser'
import { slideIn } from "../utils/motion"
import MyLoader from "./MyLoader/MyLoader"


const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)

  const handleCahnge = (e)=>{
    const {name, value} = e.target
    setForm({...form, [name]:value})

  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      "service_3hxu91d",
      "template_40czyja",
      {
        from_name:form.name,
        to_name: "Yanno",
        from_email: form.email,
        to_email: "yannsieyadjeu@gmail.com",
        message: form.message,
      },
      "eQmDF0v2d5-jpboRI"
      
    ).then(()=>{
      setLoading(false)
      alert('Message sent successfully')
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false)
      console.log(`Error sending the mail ${JSON.stringify(error)}`)
      alert("Error sending the email.")
    })
  }

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-11 overflow-hidden" >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.heroSubText} >Get in touch</p>
        <h3 className={styles.heroHeadText} >Contact</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="name" className="flex flex-col" >
            <span className="font-medium mb-4" >Your name*</span>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleCahnge}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 
                placeholder:text-secondary text-white rounded-lg 
                border-none font-medium outline-none "
            />
          </label>
          <label htmlFor="email" className="flex flex-col" >
            <span className="font-medium mb-4" >Your email*</span>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleCahnge}
              placeholder="What is your email address?"
              className="bg-tertiary py-4 px-6 
                placeholder:text-secondary text-white rounded-lg 
                border-none font-medium outline-none "
            />
          </label>
          <label htmlFor="name" className="flex flex-col" >
            <span className="font-medium mb-4" >Your Message*</span>
            <textarea
              rows={7} 
              name="message"
              value={form.message}
              onChange={handleCahnge}
              placeholder="Tell us more?"
              className="bg-tertiary py-4 px-6 
                placeholder:text-secondary text-white rounded-lg 
                border-none font-medium outline-none "
            />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit 
          text-white font-bold shadow-md shadow-primary rounded-xl" >
            {loading? (<MyLoader/>) : "Send"}
          </button>

        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")