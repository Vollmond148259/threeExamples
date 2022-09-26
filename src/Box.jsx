import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Box(props) {
  const ref = useRef()
  const [count, setCount] = useState(0)
  const geometry = [
    useMemo(() => new THREE.BoxGeometry(), []),
    useMemo(() => new THREE.SphereGeometry(0.785398), [])
  ]

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  })

  useFrame((_, delta) => {
    ref.current.rotation.x += delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}>
      <meshBasicMaterial color={'lime'} wireframe={true} />
    </mesh>
  )
}