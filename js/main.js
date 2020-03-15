(() => {
		const instrumetButtons = document.querySelectorAll('.dragzone img');

		      dropZoneP=document.querySelector('.dropzone-Philippines');

          dropZoneJ=document.querySelector('.dropzone-Japan');

          dropZoneC=document.querySelector('.dropzone-China');

        let boardBox=document.querySelector('.boardbox'),
            HTplayButton=document.querySelector(".HTplay-button"),
						playButton=document.querySelector(".play-button"),
            closeButton=boardBox.querySelector('.close-button'),
            pauseButton=document.querySelector('.pause-button'),
            restartButton=document.querySelector('.restart-button');

        let globalPaused=false;

      const  audioElement=document.querySelector('audio');



//------------------Drag and Drop------------------
     function allowDrag(event){
     	    //debugger;
          //event.preventDefault();
          // Add the target element's id to the data transfer object
			    event.dataTransfer.setData("text/plain",event.target.id);
          console.log('Drag start');
     }

	 function allowDragOver(event){
	 	//debugger;
		event.preventDefault();
		 console.log('Dragging over on a Drop zone');
 }

  function allowDropC(event){
        //debugger;
    console.log('Dropped on drop zone');
     //remove last img
    var et=event.target;
    if(!et.classList.contains('.dropzone')){
      et=event.target.parentNode;
      event.target.remove();
    }

    // event.preventDefault();
    // Get the data, which is the id of the drop targe
     var currentInstrument = event.dataTransfer.getData("text/plain");
     console.log(currentInstrument);

     // create <img> node
     var imgNode=document.createElement('img');
     imgNode.src=`images/doll_${currentInstrument}.svg`;
     var src=document.getElementById("ChinaArea");
     src.appendChild(imgNode);

    // document.getElementById(`#${currentInstrument}`).appendChild(imgNode);

     //imgNode.appendChild(document.getElementById(`#${currentInstrument}`));

     audioElement.src=`audio/${currentInstrument}.mp3`;

     audioElement.load();
     audioElement.play();
    }

    function allowDropP(event){
        //debugger;
    console.log('Dropped on drop zone');
     //remove last img
    var et=event.target;
    if(!et.classList.contains('.dropzone')){
      et=event.target.parentNode;
      event.target.remove();
    }

    // event.preventDefault();
    // Get the data, which is the id of the drop targe
     var currentInstrument = event.dataTransfer.getData("text/plain");
     console.log(currentInstrument);

     // create <img> node
      var imgNode=document.createElement('img');
     imgNode.src=`images/doll_${currentInstrument}.svg`;
     var src=document.getElementById("PhilippinesArea");
     src.appendChild(imgNode);

    // document.getElementById(`#${currentInstrument}`).appendChild(imgNode);

     //imgNode.appendChild(document.getElementById(`#${currentInstrument}`));

     audioElement.src=`audio/${currentInstrument}.mp3`;

     audioElement.load();
     audioElement.play();
    }

    function allowDropJ(event){
        //debugger;
    console.log('Dropped on drop zone');
     //remove last img
    var et=event.target;
    if(!et.classList.contains('.dropzone')){
      et=event.target.parentNode;
      event.target.remove();
    }

    // event.preventDefault();
    // Get the data, which is the id of the drop targe
     var currentInstrument = event.dataTransfer.getData("text/plain");
     console.log(currentInstrument);

     // create <img> node
      var imgNode=document.createElement('img');
     imgNode.src=`images/doll_${currentInstrument}.svg`;
     var src=document.getElementById("JapanArea");
     src.appendChild(imgNode);

    // document.getElementById(`#${currentInstrument}`).appendChild(imgNode);

     //imgNode.appendChild(document.getElementById(`#${currentInstrument}`));

     audioElement.src=`audio/${currentInstrument}.mp3`;

     audioElement.load();
     audioElement.play();
    }


//------------------How to Play------------------
	  function showBoardBox(){
    //show the boardbox on a click
    //debugger;
    boardBox.classList.add("show-boardbox");
  }

  function hideBoardBox(){
    boardBox.classList.remove("show-boardbox");
  }

	function playTrack(){
   if(globalPaused){
     console.log('paused');
     resumeTrack();
     return;
   }}

	 function resumeTrack(){
		 globalPaused=false;
		 audioElement.play();
 }

  function pauseTrack() {
    audioElement.pause();
    globalPaused=true;
  }

  function rewindTrack() {
    audioElement.currentTime=0;
  }

//--------------------------------------------------------
 //event hadling for our sigilButtons
      HTplayButton.addEventListener("click",showBoardBox);
//add some event handling fot the lightbox close closeButton
      closeButton.addEventListener("click",hideBoardBox);
			playButton.addEventListener("click",playTrack);
      pauseButton.addEventListener("click",pauseTrack);
      restartButton.addEventListener("click",rewindTrack);

      instrumetButtons.forEach(button=>button.addEventListener('dragstart',allowDrag));

      dropZoneP.addEventListener('dragover',allowDragOver);
      dropZoneP.addEventListener('drop',allowDropP);

      dropZoneJ.addEventListener('dragover',allowDragOver);
      dropZoneJ.addEventListener('drop',allowDropJ);

      dropZoneC.addEventListener('dragover',allowDragOver);
      dropZoneC.addEventListener('drop',allowDropC);


})();
