import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function OrbitingModule({ position, color, speed, size = 0.14 }) {
  const module = useRef()

  useFrame(({ clock }, delta) => {
    const elapsed = clock.getElapsedTime() * speed
    module.current.position.y = position[1] + Math.sin(elapsed) * 0.15
    module.current.rotation.x += delta * speed
    module.current.rotation.y += delta * speed * 1.5
  })

  return (
    <group ref={module} position={position}>
      <mesh><octahedronGeometry args={[size, 0]} /><meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.48} roughness={0.2} metalness={0.75} /></mesh>
      <pointLight color={color} intensity={0.45} distance={1.5} />
    </group>
  )
}

function NexusCore() {
  const core = useRef()
  const orbitA = useRef()
  const orbitB = useRef()

  useFrame(({ pointer, clock }, delta) => {
    const time = clock.getElapsedTime()
    core.current.rotation.y += delta * 0.28
    core.current.rotation.x = Math.sin(time * 0.48) * 0.1
    core.current.position.y = Math.sin(time * 0.9) * 0.1
    core.current.rotation.z = THREE.MathUtils.damp(core.current.rotation.z, -pointer.x * 0.14, 2, delta)
    orbitA.current.rotation.z -= delta * 0.34
    orbitB.current.rotation.z += delta * 0.22
  })

  return (
    <group rotation={[0.25, -0.35, 0]}>
      <group ref={orbitA} rotation={[1.12, 0.3, 0]}><mesh><torusGeometry args={[2.18, 0.025, 8, 100]} /><meshBasicMaterial color="#68e8ff" transparent opacity={0.45} /></mesh></group>
      <group ref={orbitB} rotation={[0.52, -0.58, 0.9]}><mesh><torusGeometry args={[1.73, 0.018, 8, 100]} /><meshBasicMaterial color="#a680ff" transparent opacity={0.48} /></mesh></group>
      <group ref={core}>
        <mesh><icosahedronGeometry args={[1.08, 1]} /><meshPhysicalMaterial color="#6146f6" emissive="#251277" emissiveIntensity={0.55} roughness={0.16} metalness={0.5} clearcoat={0.95} clearcoatRoughness={0.15} /></mesh>
        <mesh scale={1.025}><icosahedronGeometry args={[1.08, 2]} /><meshBasicMaterial color="#a994ff" wireframe transparent opacity={0.25} /></mesh>
        <mesh scale={0.57} rotation={[0.7, 0.2, 0.4]}><octahedronGeometry args={[1, 0]} /><meshPhysicalMaterial color="#72f5ff" emissive="#0bc2d9" emissiveIntensity={0.75} roughness={0.12} metalness={0.65} /></mesh>
      </group>
      <OrbitingModule position={[1.9, 0.55, 0.15]} color="#78efff" speed={1.5} />
      <OrbitingModule position={[-1.65, -0.82, 0.3]} color="#c28cff" speed={1.1} size={0.11} />
      <OrbitingModule position={[0.25, 1.72, -0.12]} color="#ff9f88" speed={0.9} size={0.1} />
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3.5, 4, 5]} intensity={2.3} color="#d9d2ff" />
      <pointLight position={[-4, -2, 2]} intensity={15} color="#39d7ff" distance={8} />
      <pointLight position={[3, 1, 3]} intensity={9} color="#ba7cff" distance={7} />
      <NexusCore />
    </>
  )
}

export function HeroScene() {
  return <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 6.2], fov: 42 }}><Scene /></Canvas>
}
