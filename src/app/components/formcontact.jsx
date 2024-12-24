"use client"
import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios';
import { useToast } from "@/hooks/use-toast"




const Formcontact = () => {
    const[btncontent,setcontentbtn]=useState()
    const[diabledbtn,setdosabledbtn]=useState(false)
    const { toast } = useToast()

    const[spinnerstate,setspinnerstate]=useState(false)

    useEffect(()=>{
        if(spinnerstate==true){
          setcontentbtn( <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          )
        }else{
          setcontentbtn(<span className='font-bold'>Send</span>)
        }
      },[spinnerstate])
    const [errormsg, seterrormsg] = useState("")
    const [formData, setFormData] = useState({
        firstName: '',
        message: '',
        email: '',
        phone: '',
        lastName: ''

    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const onsbmt = async () => {
        setdosabledbtn(true)
        setspinnerstate(true)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = (email) => emailRegex.test(email);
        if (formData.firstName == "" || formData.lastName == "" || formData.email == "" || formData.message == "" || formData.phone == "") {
            seterrormsg("you have to fill all the inputs")
            setdosabledbtn(false)
            setspinnerstate(false)
        } else if (isValidEmail(formData.email) == false) {
            seterrormsg("you have to write a valid email")
            setdosabledbtn(false)
            setspinnerstate(false)

        } else {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
                firstName: formData.firstName, lastName: formData.lastName, email: formData.email, phone: formData.phone, message: formData.message

            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => res.data).then(data => {
                toast({
                    title: "Your message has been sent successfully",
                   
                  })
                seterrormsg("")
                setdosabledbtn(false)
                setspinnerstate(false)
            }).catch(err => {
                toast({
                    title: "Your message could not be sent",
                   
                  })
                  seterrormsg("")
                  setdosabledbtn(false)
                  setspinnerstate(false)
            })
        }
    }
    const formtxt = "Feel free to reach out! Send me a message, and I’ll get back to you as soon as possible."
    return (
        <div id='formcontact' className='px-2 pt-4 px-4  pb-4 w-[95%] lg:w-[50%]'>
            <h2 className='font-prmr font-bold text-white text-3xl'>Get In Touch</h2>
            <p className='font-prmr font-bold text-white mt-2 '>{formtxt}</p>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
                <Label htmlFor="first" className="text-white font-scnd text-xl mt-2">First Name</Label>
                <Input type="text" id="first" name="firstName" className="text-white" placeholder="ENTER YOUR FIRST NAME" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="last" className="text-white font-scnd text-xl mt-2">LAST NAME</Label>
                <Input type="text" id="last" placeholder="ENTER YOUR LAST NAME" className="text-white" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-white font-scnd text-xl mt-2">Email</Label>
                <Input type="email" id="email" placeholder="Email" name="email" className="text-white" value={formData.email} onChange={handleChange} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone" className="text-white font-scnd text-xl mt-2">PHONE NUMBER</Label>
                <Input type="text" id="phone" placeholder="ENTER YOUR PHONE NUMBER " className="text-white" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="first" className="text-white font-scnd text-xl mt-2">MESSAGE</Label>
                <textarea
    className="text-white"
    id="message"
    placeholder="ENTER YOUR MESSAGE"
    name="message"
    value={formData.message}
    onChange={handleChange}
></textarea>

                <button disabled={diabledbtn}  id='btnform' onClick={onsbmt} className='mt-5'>{btncontent}</button>
                <span className='text-red-500 font-prmr font-bold '>{errormsg}</span>
            </div>


        </div>
    );
}

export default Formcontact;
