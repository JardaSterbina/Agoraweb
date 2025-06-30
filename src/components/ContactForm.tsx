import { useForm } from "react-hook-form"

const url = "/api/Mailer.php"

export function ContactForm()
{
  const { register, handleSubmit, getValues } = useForm()

  const OnSubmit = () => {
    
    const data = {
      name: getValues("name"),
      email: getValues("email"),
      message: getValues("message")
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {

      if (response.ok) 
        alert("Zpráva byla odeslána")
      else
        alert("Zprávu se nepodařilo odeslat")
      return response.json()
    }).then(data => console.log(data))
    .catch(error => 
    {
      alert("Zprávu se nepodařilo odeslat")
      console.error('Error:', error)
    }
    )
  }

  return (
    <section className="max-w-[1000px] mx-auto">
      <h2>Kontakt</h2>
      <form>
        <div className="contact--name-mail">
          <input {...register("name", {required: "Prosím vyplňte toto pole"})} type='text' placeholder='Jméno a příjmení'/>
          <input {...register("email", {required: "Prosím vyplňte toto pole"})} type='email' placeholder='Email'/>
        </div>
        <textarea {...register("message", {required: "Prosím vyplňte toto pole"})} placeholder='Zpráva'/>
        <button onClick={handleSubmit(OnSubmit)} className="btn btn--dark">Odeslat</button>
      </form>
    </section>
  )  
}