import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import Loader from '../Loader'

const Earth = () => {

  const earthModel = useGLTF('./a_windy_day/scene.gltf')

  return (
    <primitive 
        object={earthModel.scene} 
        scale={5}
      />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas 
        frameloop='demand' 
        shadows
        camera={{
          position:[19,3,5], 
          fov:45,
          near: 0.1,
          far: 300
        }}
        gl={{preserveDrawingBuffer:true}}
     >
        <Suspense fallback={<Loader/>} >
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI/2}
            />
            <Earth/>
        </Suspense>
    </Canvas>
  )
}

export default EarthCanvas


