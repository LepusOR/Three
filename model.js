import * as THREE from 'three'

const geometry = new THREE.CircleGeometry(50)

console.log(geometry);

// const vertices = new Float32Array([
//   0, 0, 0,
//   50, 0, 0,
//   50, 50, 0,
//   0, 50, 0,
// ])

// const indexes = new Uint16Array([0, 1, 2, 0, 2, 3])

// const attributes = new THREE.BufferAttribute(vertices, 3)
// const index = new THREE.BufferAttribute(indexes, 1)

// geometry.attributes.position = attributes
// geometry.index = index

//法向量
// const normals = new Float32Array([
//   0, 0, 1,
//   0, 0, 1,
//   0, 0, 1,
//   0, 0, 1,
// ])

const uvs = new Float32Array([
  0, 0,
  1, 0,
  1, 1,
  0, 1
])

// geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2)

// geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)

const loader = new THREE.TextureLoader()

const texture = loader.load('./images/4b5db6aceae24de7dc4a30e904eb571c.jpg')

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
  map: texture,
})
const mesh = new THREE.Mesh(geometry, material)

// mesh.translateX(25)
// mesh.translateY(25)

export default mesh