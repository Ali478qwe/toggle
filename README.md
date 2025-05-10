## How use?

```
<script type="module">

import toggle from "toggle_save_location"

const item_tag = document.getElementById("id");

function item_func(){
        item_tag.style.backgroundColor = this.isOn ? "red" : "blue";
}

const obj  = new toggle(false,item_func,item_tag);
obj.click();

</script>

```
## for update and set new state 
```
obj.reload(false or true);
//for set a new state or refresh toggle
```