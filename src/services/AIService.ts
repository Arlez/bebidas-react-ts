import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default{
    async generateRecipe(prompt:string){
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'responde como un bartender y solo entrega la receta',
        })       
        return result.textStream
    }
}