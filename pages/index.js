import Head from 'next/head'
import { useState } from 'react'

import {Input, Heading, Button, Spacer } from '@devperez/components'

export default function Home() {
const [formValues, setFormValues]= useState({})

const onChange = (key) => (event) => {
  const {value} = event.target; //Nos trae el event.target.value
  console.log(event.target);
  setFormValues({...formValues, [key]:value});
}

  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <Heading>Cuentame sobre ti</Heading>
      <Spacer.Horizontal size="md"></Spacer.Horizontal>
      <Input value={formValues.name} onChange={onChange('name')} placeholder="Nombres"></Input>
      <Spacer.Horizontal size="sm"></Spacer.Horizontal>
      <Input value={formValues.lastname} onChange={onChange('lastname')} placeholder="Apellidos"></Input>
      <Spacer.Horizontal size="sm"></Spacer.Horizontal>
      <Input value={formValues.email} onChange={onChange('email')} placeholder="Correo electrónico"></Input>
      <Spacer.Horizontal size="lg"></Spacer.Horizontal>
      <div style={{ textAlign:'center'}}>
        <Button type="primary">Completa tu perfil</Button>
        <Spacer.Horizontal size="md"></Spacer.Horizontal>
        <Button type="tertiary">Saltar este paso por ahora</Button>
      </div>
    </div>
  )
}
