import * as THREE from 'three'

const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
  0, 0, 0,
  50, 0, 0,
  0, 100, 0,
  0, 0, 10,
  0, 0, 100,
  50, 0, 10
])

const attributes = new THREE.BufferAttribute(vertices, 3)

geometry.attributes.position = attributes

// const material = new THREE.PointsMaterial({
//   color: 0xffff00,
//   size: 10
// })

// const points = new THREE.Points(geometry, material)

const material = new THREE.LineBasicMaterial({
  color: 0xffff00
})

// const lines = new THREE.Line(geometry, material)
// const lines = new THREE.LineLoop(geometry, material)
const lines = new THREE.LineSegments(geometry, material)

export default lines