export const overlayVariant = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            when: 'beforeChildren'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.2,
            when: 'afterChildren'
        }
    }
}

export const menuVariant = {
    hide: {
        clipPath: 'circle(0px at 210px 30px)'
    },
    show: {
        clipPath: 'circle(100%)',
        transition: {
            duration: 0.7,
        }
    },
    exit: {
        clipPath: 'circle(0px at 210px 30px)',
        transition: {
            duration: 0.7,
        }
    }
}