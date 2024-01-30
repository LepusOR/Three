import * as THREE from 'three'

const loader = new THREE.TextureLoader()

const texture = loader.load('./images/4b5db6aceae24de7dc4a30e904eb571c.jpg')

texture.wrapS = THREE.RepeatWrapping
// texture.wrapT = THREE.RepeatWrapping
texture.repeat.set(12, 1)

const geometry = new THREE.PlaneGeometry(200, 50)

const material = new THREE.MeshLambertMaterial({
  map: texture,
  transparent: true
})

// texture.offset.x = 0.5;
// texture.offset.y = 0.2

const mesh = new THREE.Mesh(geometry, material)
mesh.rotateX(-Math.PI / 2)

export {mesh, texture}
