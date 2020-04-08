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


//------------------Drag and Drop------------------
     function allowDrag(event){
     	    //debugger;
          //event.preventDefault();
          // Add the target element's id to the data transfer object
			    event.dataTransfer.setData("text/plain",event.target.id);
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
    // Get the data, which is the id of the drop targe
     var currentInstrument = event.dataTransfer.getData("text/plain");
     console.log(currentInstrument);

     // create <img> node
     var imgNode=document.createElement('img');
     imgNode.src=`images/doll_${currentInstrument}.svg`;
     var src=document.getElementById("ChinaArea");
     src.appendChild(imgNode);

      //create<audio> node

   

    var audio1 = document.getElementById('audio1')
    if(audio1){
      remove(audio1)
    }
    
     let audioElement=document.createElement('audio'); 

        audioElement.src=`audio/${currentInstrument}.mp3`;//sets the audio source
        src.appendChild(audioElement);//add it to the page
        audioElement.load();
        audioElement.play();
        audioElement.setAttribute('id','audio1')
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

     // create <img> node
      var imgNode=document.createElement('img');
     imgNode.src=`images/doll_${currentInstrument}.svg`;
     var src=document.getElementById("PhilippinesArea");
     src.appendChild(imgNode);

      
    var audio2 = document.getElementById('audio2')
    if(audio2){
      remove(audio2)
    }
    


         let audioElement=document.createElement('audio');
            audioElement.src=`audio/${currentInstrument}.mp3`;//sets the audio source
            src.appendChild(audioElement);//add it to the page
           
            audioElement.load();
            audioElement.play();
            audioElement.setAttribute('id','audio2')
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

    
    var audio3 = document.getElementById('audio3')
    if(audio3){
      remove(audio3)
    }
    


     //imgNode.appendChild(document.getElementById(`#${currentInstrument}`));
      let audioElement=document.createElement('audio');
            audioElement.src=`audio/${currentInstrument}.mp3`;//sets the audio source
            src.appendChild(audioElement);//add it to the page
           
            audioElement.load();
            audioElement.play();
      
        audioElement.setAttribute('id','audio3')
    }

const audioElement=document.querySelector('audio');

//------------------How to Play------------------
	  function showBoardBox(){
    //show the boardbox on a click
    //debugger;
    boardBox.classList.add("show-boardbox");
  }

  function hideBoardBox(){
    boardBox.classList.remove("show-boardbox");
  }

  //获取所有audio元素
  var audio = document.getElementsByTagName('audio')
	function playTrack(){
   if(globalPaused){
     //console.log('paused');
     //resumeTrack();
     //return;
     for(var i = 0; i < audio.length; i ++){
      audio[i].play()
     }
   }}

	 //function resumeTrack(){
		 //globalPaused=false;
		 //audioElement.play();
 //}

  function pauseTrack() {
   // audioElement.pause();
     //document.getElementsByTagName('audio').pause()
    for(var i = 0; i < audio.length; i ++){
      audio[i].pause()
     }
    globalPaused = true;
  }

  function restartTrack() {
    
     //document.getElementsByTagName('audio').currentTime = 0;
    
     //document.getElementsByTagName('audio').play()
     for(var i = 0; i < audio.length; i ++){
      audio[i].currentTime = 0
     }
     
     for(var i = 0; i < audio.length; i ++){
      audio[i].play()
     }
  }

  function remove(selectors) {
  selectors.removeNode = [];
  if (selectors.length != undefined) {
    var len = selectors.length;
    for (var i = 0; i < len; i++) {
      selectors.removeNode.push({
        parent: selectors[i].parentNode,
        inner: selectors[i].outerHTML,
        next: selectors[i].nextSibling
      });
    }
    for (var i = 0; i < len; i++)
      selectors[0].parentNode.removeChild(selectors[0]);
  }
  else {
    selectors.removeNode.push({
      parent: selectors.parentNode,
      inner: selectors.outerHTML,
      next: selectors.nextSibling
    });
    selectors.parentNode.removeChild(selectors);
  }
}
//--------------------------------------------------------
 //event hadling for our sigilButtons
      HTplayButton.addEventListener("click",showBoardBox);
//add some event handling fot the lightbox close closeButton
      closeButton.addEventListener("click",hideBoardBox);
			playButton.addEventListener("click",playTrack);
      pauseButton.addEventListener("click",pauseTrack);
      restartButton.addEventListener("click",restartTrack);

      instrumetButtons.forEach(button=>button.addEventListener('dragstart',allowDrag));

      dropZoneP.addEventListener('dragover',allowDragOver);
      dropZoneP.addEventListener('drop',allowDropP);

      dropZoneJ.addEventListener('dragover',allowDragOver);
      dropZoneJ.addEventListener('drop',allowDropJ);

      dropZoneC.addEventListener('dragover',allowDragOver);
      dropZoneC.addEventListener('drop',allowDropC);


})();


