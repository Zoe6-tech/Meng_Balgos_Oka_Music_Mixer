(() => {
		const instrumetButtons = document.querySelectorAll('.dragzone img');
		      dropZoneP=document.querySelector('.dropzone-Philippines');
          dragZoneP=document.querySelectorAll('.dragzone-Philippines');

          dropZoneJ=document.querySelector('.dropzone-Japan');
          dragZoneJ=document.querySelectorAll('.dragzone-Japan');

          dropZoneC=document.querySelector('.dropzone-China');
          dragZoneC=document.querySelectorAll('.dragzone-China');

        let boardBox=document.querySelector('.boardbox'),
            playButton=document.querySelector(".play-button"),
            closeButton=boardBox.querySelector('.close-button');

//------------------Drag and Drop------------------ 
     function allowDrag(event){
     	    //debugger;
     	    console.log('start drag an image');
			event.dataTransfer.setData("text/plain",this.id);
     }

	 function allowDragOver(event){
	 	//debugger;
		event.preventDefault();
		 console.log('dragging over on a drop zone');
 }
   function allowDrop(event){
   	    //debugger;
		console.log('dropped on drop zone');
    
		}

//------------------How to Play------------------
	  function showBoardBox(){
    //show the lightbox on a click
    //debugger;
    boardBox.classList.add("show-boardbox");
  }

  function hideBoardBox(){
    boardBox.classList.remove("show-boardbox");
  }


//--------------------------------------------------------
 //event hadling for our sigilButtons
      playButton.addEventListener("click",showBoardBox);
//add some event handling fot the lightbox close closeButton
     closeButton.addEventListener("click",hideBoardBox);
      instrumetButtons.forEach(button=>button.addEventListener('drag',allowDrag));

      dropZoneP.addEventListener('dragover',allowDragOver);
      dropZoneJ.addEventListener('dragover',allowDragOver);
      dropZoneC.addEventListener('dragover',allowDragOver);

      dropZoneP.addEventListener('drop',allowDrop);
      dropZoneJ.addEventListener('drop',allowDrop);
      dropZoneC.addEventListener('drop',allowDrop);

})();
