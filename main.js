import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadPerson } from './assets/loadPerson.js'


// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 5000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
torus.rotation.x = 2;

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

//const controls = new OrbitControls(camera, renderer.domElement);

// Stars
var stars = [];
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xff9f9f, wireframe: true});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
  stars.push(star);
}

Array(300).fill().forEach(addStar);

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// Falling stars

var shooting_stars = []

function randRange(data) {
  var newTime = data[Math.floor(data.length * Math.random())];
  return newTime;
}

function shootStar() {
  var timeArray = new Array(100, 200, 300, 150, 250, 2000, 3000, 1000, 1500);

  var star = stars[Math.floor(Math.random()*stars.length)];
  shooting_stars.push(star);

  clearInterval(timer);
  timer = setInterval(shootStar, randRange(timeArray));
}

var timer = setInterval(shootStar, 1000);

// Background

const spaceTexture = new THREE.TextureLoader().load('./assets/images/214962.jpg');
scene.background = spaceTexture;

// Avatar

const avatarTexture = new THREE.TextureLoader().load('./assets/images/profile.JPEG');

const avatar = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: avatarTexture }));

scene.add(avatar);

// Moon

const moonTexture = new THREE.TextureLoader().load('assets/images/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('assets/images/normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

//scene.add(moon);

moon.position.z = 13;
moon.position.setX(-20);
moon.position.y = 13

avatar.position.z = -5;
avatar.position.x = 2;

// Person model

const person = await loadPerson();
scene.add(person);
person.scale.set(0.5,0.5,0.5)
person.position.z = 35;
person.position.x = -20;
person.position.y = -3;
person.rotation.z = 1;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;


  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;

}


document.body.onscroll = moveCamera;
moveCamera();


// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  //torus.rotation.z += 0.01
  torus.rotation.z += 0.005 
  
  moon.rotation.x += 0.005;

  avatar.rotation.x = camera.position.x*7;
  avatar.rotation.y = camera.position.x*3;
  avatar.rotation.z = camera.position.x*4;


  avatar.position.z = (-2*Math.exp((camera.position.x)*15))-2;
  // controls.update();

  // Shooting star animation
  shooting_stars.map(star => {
    star.position.z -= -2*(Math.exp(star.position.z/100));
    if (star.position.z > 100){
      //console.log("deleting star")
      shooting_stars = shooting_stars.filter(function(stars) { return stars.id != star.id; }); 
      addStar()
    }

  })

  renderer.render(scene, camera);
}

animate();
