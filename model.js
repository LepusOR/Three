import * as THREE from 'three'

const geometry = new THREE.BufferGeometry()

const vertices = new Float32Array([
  0, 0, 0,
  50, 0, 0,
  50, 50, 0,
  0, 50, 0,
])

const indexes = new Uint16Array([0, 1, 2, 0, 2, 3])

const attributes = new THREE.BufferAttribute(vertices, 3)
const index = new THREE.BufferAttribute(indexes, 1)

geometry.attributes.position = attributes
geometry.index = index

//法向量
const normals = new Float32Array([
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
  0, 0, 1,
])

geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)

// const material = new THREE.PointsMaterial({
//   color: 0xffff00,
//   size: 10
// })

// const points = new THREE.Points(geometry, material)

// const material = new THREE.LineBasicMaterial({
//   color: 0xffff00
// })

// const lines = new THREE.Line(geometry, material)
// const lines = new THREE.LineLoop(geometry, material)
// const lines = new THREE.LineSegments(geometry, material)

const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  wireframe: true,
  side: THREE.DoubleSide
})
const mesh = new THREE.Mesh(geometry, material)

export default mesh