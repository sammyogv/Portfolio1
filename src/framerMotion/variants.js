
export const fadeIn= (direction,delay) =>{

    return{

        hidden:{
            x: direction === 'up' ? 40: direction==='down'? -40:0,
            y: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
                        opacity: 0,
            transition: {
                            type: 'tween',
                            duration: 0.8,
                            delay: delay,
                            ease: 'easeOut',
                        },
                    },
                    show: {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        transition: {
                            type: 'tween',
                            duration: 0.8,
                            delay: delay,
                            ease: 'easeOut',
                        },
                    }, }
}

