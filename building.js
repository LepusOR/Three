import * as THREE from 'three'

const geometry1 = new THREE.BoxGeometry(50, 100, 20)
const geometry2 = new THREE.BoxGeometry(50, 50, 20)
const material = new THREE.MeshLambertMaterial({ color: 0x00ffff })

const group = new THREE.Group()

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    const mesh = new THREE.Mesh(i === 0 ? geometry1 : geometry2, material)
    mesh.position.set(j * 100, (i === 0 ? geometry1 : geometry2).parameters.height / 2, i * 100)
    group.add(mesh)
  }
}

const v = new THREE.Vector3()

console.log(group.getWorldPosition(v));

export default group