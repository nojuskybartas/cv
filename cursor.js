function print_text (container, text) {
    const node = document.querySelector(container)
    node.innerText = ""
    node.type(text)
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 50 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text_to_delete) {
      for (let character of text_to_delete) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
function print_console_text() {
   
print_text("#type-text-1", `
📜 System check: installed libraries

Checking basic libraries:
Object Oriented Programming - found

Checking artificial intelligence modules:
AI deep learning module - found
AI reinforcement module - found
AI vision module - found
AI natural language processing module - incomplete, missing libraries...

Checking robotics modules:
Wiring - no shortings found
Servers - online
Positioning module - found
Tracking module - found
Engine control modules - found

Full-stack systems online!
`)
}
document.getElementById("check-libraries-button").onclick = print_console_text;




  