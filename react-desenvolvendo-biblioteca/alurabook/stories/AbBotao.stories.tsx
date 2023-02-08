import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AbBotao } from "../src";

export default {
    title: 'Components/AbBotao',//Caminho para onde ficará salvo esse storybook
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />
//o template é um componentstory do tipo AbBotao e recebe uma arrow function que renderiza o componente AbBotao

export const Primario = Template.bind({})
//esse é o mesmo nome que aparece como nome do componente no storybook