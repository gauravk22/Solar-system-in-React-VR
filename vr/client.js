// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'task1', parent, {
    // Add custom options here
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  window.playerCamera = vr.player._camera;
  window.vr = vr;
  window.onmousewheel = onRendererMouseWheel;
  return vr;
}

window.ReactVR = {init};

function onRendererMouseWheel(){
  if (event.deltaY > 0 ){
     if(window.playerCamera.zoom  > 1) {
       window.playerCamera.zoom -= 0.1;
       window.playerCamera.updateProjectionMatrix();
      }
   }
   else {
     if(window.playerCamera.zoom < 3) {
      window.playerCamera.zoom += 0.1;
      window.playerCamera.updateProjectionMatrix();
     }
   }
}
