import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {person_image} from '/assets/models/seated-budha/scene.gltf';

async function loadPerson() {
    const loader = new GLTFLoader();
    const personData = await loader.loadAsync(person_image);
    console.log('Person loaded!', personData);

    const person = personData.scene.children[0];
    
    return person

  }

  export { loadPerson };