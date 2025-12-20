import { useEffect, useState } from 'react'
import '../App.css'
import { motion } from "motion/react"


export function Header({ toggle,setToggle }) {
    return (
        <>
            <div className="head">Personal Dashboard</div>
            <div className="hr" />
            <div className='flex'>
                <div className='dr1'>{toggle?"Dark Mode":"Light Mode"}</div>
                <div className="a1" onClick={() => {
                    setToggle(prev => !prev)
                }
                } >
                    <div className="a2">
                        <motion.div className="a3" animate={{
                            x: toggle ? 32 : 0,
                            transition: {
                                duration: 0.5,
                            }
                        }
                        } />
                    </div>
                </div>
            </div>
        </>

    )
}

