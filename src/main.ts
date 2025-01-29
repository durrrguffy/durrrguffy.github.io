import './style.css'
// import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img class="size-12 shrink-0" src="${viteLogo}" alt="ChitChat Logo" />  
        <div>    
            <div class="text-xl font-medium text-black dark:text-white">Trying out this tailwind thing</div>    
            <p class="text-gray-500 dark:text-gray-400">What do you think?</p>  
        </div>
    </div>
  </div>
`
