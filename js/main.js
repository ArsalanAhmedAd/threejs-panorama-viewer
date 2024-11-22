// const panoramaImage = new PANOLENS.ImagePanorama("images/image1.jpeg");
// const imageContainer = document.querySelector(".image-container");

// const viewer = new PANOLENS.Viewer({
//   container: imageContainer,
//   autoRotate: true,
//   autoRotateSpeed: 0.3,
//   controlBar: true,
// });

// viewer.add(panoramaImage);

// var panorama, viewers, container, infospot;
// var containerBaseWidth = 700;
// var containerBaseHeight = 400;
// var deltaSize = 100;

// container = document.querySelector( '#container' );

// panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );

// infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
// infospot.position.set( 0, 0, -5000 );
// infospot.addHoverText( 'Hello Panolens', 30 );
// panorama.add( infospot );

// viewers = new PANOLENS.Viewer( {
//   container: container,
//   autoRotate: true,
//   autoRotateSpeed: 0.3,
//   controlBar: true,

// } );
// viewers.add( panorama );

// function changeContainerSize ( width, height ) {
//   viewers.container.style.width = width + "px";
//   viewers.container.style.height = height + "px";
//   viewers.onWindowResize( width, height );
// }

// document.querySelector( '#btn_change_size' ).addEventListener( 'click', function(){
//   var newWidth = containerBaseWidth + (Math.random() - 0.5) * deltaSize;
//   var newHeight = containerBaseHeight + (Math.random() - 0.5) * deltaSize;
//   changeContainerSize( newWidth, newHeight );
// }, false );

var image = "./images/image1.jpeg";
var image2 = "./images/image4.jpeg";

console.log(image)

var panorama, panorama2, viewer, container, infospot;
var deltaSize = 200;
var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, 118.41),
  new THREE.Vector3(3278.27, 732.65, 8769.19),
];




var infospotPositions = [
  new THREE.Vector3(3136.06, -1111.3, -2690.14),
  new THREE.Vector3(1258.81, -295.5, 1771.13),
];

container = document.querySelector("#container");

panorama = new PANOLENS.ImagePanorama(image);
panorama.addEventListener("enter-fade-start", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 5);
});

panorama2 = new PANOLENS.ImagePanorama(image2);
panorama2.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[3], 0);
});

panorama.link(panorama2, infospotPositions[0]);
panorama2.link(panorama, infospotPositions[1]);

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.addHoverText( 'Hello Panolens', 30 );
infospot.position.set( 5136.99, -1101.62, -2691.76 );
panorama.add( infospot );
infospot.addEventListener( 'click', function(){
  viewer.setPanorama( panorama2 );
} );

viewer = new PANOLENS.Viewer({
  output: "console",
  container: container,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});


// Set the camera's starting position
viewer.camera.position.set(1, 2.6, 0); // x, y, z coordinates (e.g., y=1.6 for typical eye-level height)

// Optional: Set the camera's look-at direction (optional if you need to direct it to a specific spot)
viewer.camera.lookAt(new THREE.Vector3(2, 0, 0)); // Look at coordinates (x, y, z)
viewer.add(panorama, panorama2);
