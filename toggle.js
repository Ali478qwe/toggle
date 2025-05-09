  class toggle{
   isOn;
   button;
   
  constructor(isOn=false,func_style,button) {
    this.isOn = isOn;
    this.button = button;
   this.func_style = func_style.bind(this);
    
    
   
  }
  click() {
      this.button.addEventListener("click", () => {
      this.isOn = !this.isOn;
       this.func_style();
    });
  }
  reload(isOn) {
     this.isOn = isOn;
     this.func_style();
  }
}

function button(id,func){
      document.getElementById(id).addEventListener("click",func);
}






// function reload(isOn,text,color,is_State=false) {
//       button.addEventListener("click", () => {is_State = !is_State;});
//       isOn = is_State ?  text[0] : text[1];
//       bcolor.style.backgroundColor = isOn ? color[0]:color[1];
//       button.textContent = isOn ? text[0] : text[1];
//       button.style.transform = isOn ? "translateX(100%)":"translateX(0%)";
//       sendMessage(isOn ? text[0] : text[1]);
//       reload(isOn);
//     }
