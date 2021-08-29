import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

async function loadPerson() {
    const loader = new GLTFLoader();
    const personData = await loader.loadAsync('./assets/models/seated-budha/scene.gltf');
    console.log('Person loaded!', personData);

    const person = personData.scene.children[0];
    
    return person

  }

  export { loadPerson };