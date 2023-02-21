const scene = new THREE.Scene() // creating a scene

const renderer = new THREE.WebGLRenderer() // creating renderer to render the scene
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera( // create camera (FOV (degrees), aspect ratio, near, far)
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
)
camera.position.set(0, 0, 100)
camera.lookAt(0, 0, 0)

const material = new THREE.LineBasicMaterial({ color: 0x0000ff }) // create fill of line

const points = []
points.push(new THREE.Vector3(-10, 0, 0)) // create coordinates of line
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))

const geometry = new THREE.BufferGeometry().setFromPoints(points) // merge lines

const line = new THREE.Line(geometry, material) // create line

scene.add(line) // add line to the scene
renderer.render(scene, camera) // draw scene
