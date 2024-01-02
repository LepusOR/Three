import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(50, 50, 50)
const material = new THREE.MeshPhongMaterial({ color: 0x00ffff, shininess: 100 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0, 0, 0)
scene.add(mesh)

// const num = 10
// for (let i = 0; i < num; i++) {
//   for (let j = 0; j < num; j++) {
//     const mesh = new THREE.Mesh(geometry, material)
//     mesh.position.set(j * 20, 0, i * 20)
//     scene.add(mesh)
//   }
// }

const axesHelper = new THREE.AxesHelper(100, 100, 100)

const pointLight = new THREE.PointLight(0xffffff, 1.0)
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10)
pointLight.decay = 0.0
pointLight.position.set(50, 50, 50)

const ambient = new THREE.AmbientLight(0xffffff, 1.0)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
directionalLight.position.set(50, 50, 50)
// directionalLight.target = mesh
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 10)

const renderer = new THREE.WebGLRenderer({
  antialias: true //抗锯齿
})
renderer.setPixelRatio(window.devicePixelRatio) //设置像素比
renderer.setClearColor(0x444444)

const width = window.innerWidth
const height = window.innerHeight

const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1300)
camera.position.set(200, 200, 200)
camera.lookAt(100, 0, 0)

scene.add(axesHelper)
scene.add(pointLight)
scene.add(pointLightHelper)
// scene.add(ambient)
// scene.add(directionalLight)
// scene.add(directionalLightHelper)

renderer.setSize(width, height)
// renderer.render(scene, camera)

const stats = new Stats()

document.body.appendChild(renderer.domElement)
document.body.appendChild(stats.domElement)

// const clock = new THREE.Clock()

function render() {
  // const spt = clock.getDelta() * 1000
  // console.log(1000 / spt)
  stats.update()
  requestAnimationFrame(render)
  // mesh.rotateX(0.01)
  renderer.render(scene, camera)
  // mesh.rotateX += 0.01
}
render()

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0, 0, 0)
controls.update()

controls.addEventListener('change', () => {
  // renderer.render(scene, camera)
})

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}
