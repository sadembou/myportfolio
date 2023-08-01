import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import Loader from '../Loader'

const Computers = ({isMobile}) => {
  const computerModel = useGLTF('./gaming_desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="brown"/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20,50,10]}
        angle={0.11}
        penumbra={0.8}
        castShadow
      />
      <primitive 
        object={computerModel.scene} 
        scale={isMobile? 0.5 : 0.70}
        position={isMobile ? [-10, -3.25, -3] : [-1.5, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    //Media query to determine if a screen size is smaller than 600px
    const mql = window.matchMedia("(max-width: 600px)");
    
    //Set the init value of isMobile
    setIsMobile(mql.matches)
    

    const handleMQLChange = (e)=>{
      setIsMobile(e.matches)
    }


    mql.addEventListener('change', handleMQLChange)
    
    return()=>{
      mql.removeEventListener('change', handleMQLChange)
    }
  }, [])

  return (
    <Canvas 
        frameloop='demand' 
        shadows
        camera={{position:[20,3,5], fov:25}}
        gl={{preserveDrawingBuffer:true}}
     >
        <Suspense fallback={<Loader/>} >
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
            />
            <Computers isMobile={isMobile} />
        </Suspense>
    </Canvas>
  )
}

export default ComputerCanvas