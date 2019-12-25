/**
 * BOLD BTN FUNCTION
 */
let boldBtn = document.getElementById('Bold-Btn');

let boldClickListener = (event) => {
  
  // Get selection
  let selection = window.getSelection();
  let parent = selection.anchorNode.parentElement;
  let range= selection.getRangeAt(0);

  //only bold
  if(parent.className == 'content' || parent.classList.contains('text-style-normal') || parent.classList.contains('text-weight-normal') || parent.classList.contains('text-decoration-normal')) {
    
    let text = selection.toString();
    let final = `<span class="text-bold">${text}</span>`;


    let span = document.createElement('span');
    span.classList='text-bold';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
    
  }
//to unbold
  else if(parent.classList.contains('text-bold')){
    let text = selection.toString();
   
    let span = document.createElement('span');
    span.classList='text-weight-normal';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
    }
   
  //if italic clicked then add both bold and italic
  else if(parent.classList.contains('text-italic')){
        
      let text = selection.toString();
   
      let span = document.createElement('span');
      span.classList='text-bold-italic';
      
      span.innerHTML=text;
      range.deleteContents();
      range.insertNode(span);
    }
    //if bold clicked then remove bold keep italic
   else if(parent.classList.contains('text-bold-italic')){
        
      let text = selection.toString();
   
      let span = document.createElement('span');
      span.classList='text-italic text-weight-normal';
      span.innerHTML=text;
      range.deleteContents();
      range.insertNode(span);
  }

//if underlined clicked add both bold and underlined
  else if(parent.classList.contains('text-underlined')){
        
    let text = selection.toString();
    let span = document.createElement('span');
    span.classList='text-bold-underlined';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
}


else if(parent.classList.contains('text-bold-underlined')){
        
  let text = selection.toString();

  let span = document.createElement('span');
  span.classList='text-underlined text-weight-normal';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}

else if(parent.classList.contains('text-italic-underlined')){
        
  let text = selection.toString();

  let span = document.createElement('span');
  span.classList='text-bold-italic-underlined';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}

else if(parent.classList.contains('text-bold-italic-underlined')){
        
  let text = selection.toString();

  let span = document.createElement('span');
  span.classList='text-italic-underlined text-weight-normal';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}

 
 
};

boldBtn.addEventListener('click', boldClickListener)

//********************************************************************************************************************************** */
/**
 * ITALICS BTN FUNCTION
 */
let italicBtn = document.getElementById('Italic-Btn');

let italicClickListener = (event) => {
  
  
  let selection = window.getSelection();
  let parent = selection.anchorNode.parentElement;
  let range= selection.getRangeAt(0);

  
  if(parent.className == 'content' || parent.classList.contains('text-weight-normal') || parent.classList.contains('text-style-normal') ||  parent.classList.contains('text-decoration-normal')) 
  {
    
    let text = selection.toString();
    let final = `<span class="text-italic">${text}</span>`;
    let span = document.createElement('span');
    span.classList='text-italic';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
    
  }

  else if(parent.classList.contains('text-italic')){
    let text = selection.toString();
   
    let span = document.createElement('span');
    span.classList='text-style-normal';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
    }
   
 
  else if(parent.classList.contains('text-bold')){
        
      let text = selection.toString();
   
      let span = document.createElement('span');
      span.classList='text-bold-italic';
      span.innerHTML=text;
      range.deleteContents();
      range.insertNode(span);
    }

    else if(parent.classList.contains('text-underlined')){
          
        let text = selection.toString();
     
        let span = document.createElement('span');
        span.classList='text-italic-underlined';
        span.innerHTML=text;
        range.deleteContents();
        range.insertNode(span);
      } 


  
   else if(parent.classList.contains ('text-bold-italic')){
        
    let text = selection.toString();
 
    let span = document.createElement('span');
    
   span.classList = 'text-style-normal text-bold';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
}



else if(parent.classList.contains ('text-italic-underlined')){
        
  let text = selection.toString();

  let span = document.createElement('span');
  
 span.classList = 'text-decoration-normal text-underlined';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}


else if(parent.classList.contains ('text-bold-underlined')){
        
  let text = selection.toString();

  let span = document.createElement('span');
  
 span.classList = 'text-bold-italic-underlined';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}

else if(parent.classList.contains ('text-bold-italic-underlined')){
        
  let text = selection.toString();

  let span = document.createElement('span');
  
 span.classList = 'text-bold-underlined text-style-normal';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}

  
 
};

italicBtn.addEventListener('click', italicClickListener);


/********************************************************************************************************************************** */
/**
 * UNDERLINE BTN FUNCTION
 */
let underlineBtn = document.getElementById('Underline-Btn');

let underlineClickListener = ( event) =>{

  let selection = window.getSelection();
  let parent = selection.anchorNode.parentElement;
  let range= selection.getRangeAt(0);

  if(parent.className == 'content' || parent.classList.contains('text-weight-normal') || parent.classList.contains('text-style-normal') || parent.classList.contains('text-decoration-normal')) 
  {
    
    let text = selection.toString();
    let final = `<span class="text-italic">${text}</span>`;
    let span = document.createElement('span');
    span.classList='text-underlined';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
    
  }

  else if(parent.classList.contains('text-underlined')){
    let text = selection.toString();
   
    let span = document.createElement('span');
    span.classList='text-decoration-normal';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
    }

    
  else if(parent.classList.contains('text-bold')){
        
      let text = selection.toString();
   
      let span = document.createElement('span');
      span.classList='text-bold-underlined';
      span.innerHTML=text;
      range.deleteContents();
      range.insertNode(span);
    }
    else if(parent.classList.contains('text-italic')){
          
        let text = selection.toString();
     
        let span = document.createElement('span');
        span.classList='text-italic-underlined';
        span.innerHTML=text;
        range.deleteContents();
        range.insertNode(span);
      }
  

    else if(parent.classList.contains ('text-bold-underlined')){
        
      let text = selection.toString();
      let span = document.createElement('span');
      
      span.classList = 'text-bold text-decoration-normal ';
      span.innerHTML=text;
      range.deleteContents();
      range.insertNode(span);
  }

  else if(parent.classList.contains ('text-italic-underlined')){
        
    let text = selection.toString();
    let span = document.createElement('span');
    
    span.classList = 'text-italic text-decoration-normal ';
    span.innerHTML=text;
    range.deleteContents();
    range.insertNode(span);
}

else if(parent.classList.contains ('text-bold-italic')){
        
  let text = selection.toString();
  let span = document.createElement('span');
  
  span.classList = 'text-bold-italic-underlined ';
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}


else if(parent.classList.contains ('text-bold-italic-underlined')){
        
  let text = selection.toString();
  let span = document.createElement('span');
  
  span.classList = 'text-bold-italic text-decoration-normal' ;
  span.innerHTML=text;
  range.deleteContents();
  range.insertNode(span);
}
 
};



underlineBtn.addEventListener('click',underlineClickListener);

/*********************************************************************************************************************************** */
/**
 * ALIGN RIGHT FUNCTION
 */
let alignRightBtn = document.getElementById('contenttext');
let alignRight = document.getElementById('Align-Right-Btn');

let alignRightClickListener = (event) =>{
  alignRightBtn.style.textAlign = 'right';

};

alignRight.addEventListener('click',alignRightClickListener);

/*********************************************************************************************************************************** */
/**
 * ALIGN LEFT FUNCTION
 */
let alignLeftBtn = document.getElementById('contenttext');
let alignLeft = document.getElementById('Align-Left-Btn');
let alignLeftClickListener = (event) =>{
  alignLeftBtn.style.textAlign = 'left';

};

alignLeft.addEventListener('click',alignLeftClickListener);

/************************************************************************************************************************************* */
/**JUSTIFY FUNCTION
 * 
 */
let justifyBtn = document.getElementById('contenttext');

let justify = document.getElementById('Align-Justify-Btn')
let alignJustifyClickListener = (event) =>{
  justifyBtn.style.textAlign= 'justify';
};

justify.addEventListener('click', alignJustifyClickListener);


/************************************************************************************************************************************** */


/**Highlight function
 * @function name -> Highlight
 */
document.getElementById("contenttext").ondblclick = function() {Highlight()};
 function Highlight(){
  //let boldBtn = document.getElementById('Bold-Btn');
  let selection = window.getSelection();
  let parent = selection.anchorNode.parentElement;
  if (parent.classList.contains('text-bold')){
    boldBtn.style.backgroundColor='rgba(0,0,255,0.2)';
    
  }

  if(parent.classList.contains('text-italic')){
    italicBtn.style.backgroundColor='rgba(0,0,255,0.2)';
    
  }

  if(parent.classList.contains('text-underlined')){
    underlineBtn.style.backgroundColor='rgba(0,0,255,0.2)';
    
  }

  if(parent.classList.contains('text-bold-italic-underlined')){
    underlineBtn.style.backgroundColor='rgba(0,0,255,0.2)';
    italicBtn.style.backgroundColor='rgba(0,0,255,0.2)'
    boldBtn.style.backgroundColor='rgba(0,0,255,0.2)';
  }

  if(parent.classList.contains('text-bold-italic')){
   // underlineBtn.style.backgroundColor='rgba(0,0,255,0.2)';
    italicBtn.style.backgroundColor='rgba(0,0,255,0.2)'
    boldBtn.style.backgroundColor='rgba(0,0,255,0.2)';
  }

  if(parent.classList.contains('text-bold-underlined')){
    underlineBtn.style.backgroundColor='rgba(0,0,255,0.2)';
   // italicBtn.style.backgroundColor='rgba(0,0,255,0.2)'
    boldBtn.style.backgroundColor='rgba(0,0,255,0.2)';
  }

  if(parent.classList.contains('text-italic-underlined')){
    underlineBtn.style.backgroundColor='rgba(0,0,255,0.2)';
    italicBtn.style.backgroundColor='rgba(0,0,255,0.2)'
   // boldBtn.style.backgroundColor='rgba(0,0,255,0.2)';
  }


  else if(parent.classList.contains('text-style-normal') || parent.classList.contains('text-weight-normal') || parent.classList.contains('text-decoration-normal') || parent.className == 'content'){
    underlineBtn.style.backgroundColor='rgba(0,0,0,0.2)';
    italicBtn.style.backgroundColor='rgba(0,0,0,0.2)'
    boldBtn.style.backgroundColor='rgba(0,0,0,0.2)';
  }



  

};



 /***************************************************************************************************************************************** */
  




