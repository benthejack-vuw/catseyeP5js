function keyPressed(){var e=p5_key_bindings[keyCode.toString()];e&&this.pressed_keys.push(e)}function keyReleased(){var e=p5_key_bindings[keyCode.toString()];if(e){var s=this.pressed_keys.indexOf(e);s>-1&&this.pressed_keys.splice(s,1)}}function click(){}function mousePressed(){}function mouseReleased(){}var p5_key_bindings={8:"backspace",13:"return",16:"shift",17:"control",18:"alt",32:"space",46:"delete",91:"command",93:"command",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",189:"-",187:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z"},InteractionManager=function(e,s){loadJSON(e,this.setup_interactions),this.interactions={},this.pressed_keys=[],this.pressed_mouse_buttons=[],this.touches=[]};