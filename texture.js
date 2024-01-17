import * as THREE from 'three'

const loader = new THREE.TextureLoader()

const texture = loader.load('./images/4b5db6aceae24de7dc4a30e904eb571c.jpg')

const geometry = new THREE.SphereGeometry(30)

const material = new THREE.MeshLambertMaterial({
  map: texture
})

const mesh = new THREE.Mesh(geometry, material)

export default mesh
