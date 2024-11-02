import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import { motion } from "framer-motion";
const ImageComponent = ({src, hash}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    
    useEffect(()=>{
        const img = new Image();
        img.onload = () =>{
            setImageLoaded(true)
        }
        img.src = src
    }, [src])
    return ( 
        <>
            {!imageLoaded && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    style={{display: imageLoaded ? "none" : "inline", width:"100%", height:"100%"}}
                >
                    <Blurhash
                        hash={hash}
                        width="100%"
                        height="100%"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                    >
                    </Blurhash>
                </motion.div>
                
            )}
            {imageLoaded && (
               <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "spring", duration: 1, delay: 0.3 }}
                    src={src}
                    alt=""
                    loading="lazy"
                    style={{display: !imageLoaded ? "none" : "inline"}}
                >
                </motion.img>
            )}
            
        </>
    );
}
 
export default ImageComponent;