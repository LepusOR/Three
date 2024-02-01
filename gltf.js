import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const loader = new GLTFLoader()

const model = new THREE.Group()

loader.load('./gltf/20221009151307_parent_directory_办公楼06.gltf', function(gltf) {
  model.add(gltf.scene)
})

export default model