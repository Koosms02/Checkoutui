import { useEffect, useState } from "react"

function getWindowSize() {

    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export function currentWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    // console.log(getWindowSize.innerHeight)
    useEffect(() => {
        function windowResize() {
            setWindowSize(getWindowSize);
        }

        window.addEventListener('resize', windowResize)

        return () => {
            window.removeEventListener('resize', windowResize)
        }


    }, [])


    return windowSize
}


export function ScrollListener() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setScrollY(scrollTop);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollY
}


//list of image url

export const imageUrlList = [
    {
        "name": "Amnesia lemon",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/Amnesia%20lemon.png?alt=media&token=221ed43d-f372-49cc-bef3-91a1412ab2cc",
        "type": ""
    },

    {
        "name": "apple jax",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/apple%20jax.png?alt=media&token=53e99ca1-c929-44a2-aeb8-5142aeacb24b"
    },
    {
        "name": "big stix",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/big%20stix.png?alt=media&token=5ed1188d-8b73-4eff-828e-173f94e0fcf7"
    },
    {
        "name": "biker kush",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/biker%20kush.png?alt=media&token=804b7875-eebb-492b-aabd-28d4c06733fb"
    },
    {
        "name": "black widow",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/black%20widow.png?alt=media&token=20c52f17-ca46-4ee7-8e9e-c29a555a7d25"
    },
    {
        "name": "blue cheese",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/blue%20cheese.png?alt=media&token=5b8d0bd3-23c8-456d-a845-06d6fbba34fb"
    },
    {
        "name": "blue diamond",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/blue%20diamond.jpg?alt=media&token=eba224e4-84e9-4dc6-aae7-3010d0352463"
    },

    {
        "name": "blunicorn",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/blunicorn.png?alt=media&token=4447854f-4219-4f57-b7f2-47993679844c"
    },
    {
        "name": "butter scotch",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/butter%20scotch.png?alt=media&token=29675445-9b27-4b71-a1f2-24ac03a6ab56"
    },
    {
        "name": "crescendo",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/crescendo.png?alt=media&token=cc7487cf-66d6-490c-af73-7f037177bbd4"
    },
    {
        "name": "daw gummies",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/daw%20gummies.png?alt=media&token=3be16142-ec36-455a-bd68-db257701e1aa"
    },
    {
        "name": "desiel haze",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/desiel%20haze.png?alt=media&token=ed3a9a32-97e8-4af1-8d4e-3c39f9511e1f"
    },
    {
        "name": "dutch treat",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/dutch%20treat.png?alt=media&token=ef87a942-30e5-4137-b405-12bcd71ee076"
    },
    {
        "name": "frosted apricot",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/frosted%20apricot.jpg?alt=media&token=ff0cb344-30ea-42dc-9625-f0abff224dab"
    },
    {
        "name": "gelato",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/gelato.jpg?alt=media&token=8a6061ab-5426-40b2-8f13-9f0f1401afd0"
    },
    {
        "name": "Giant smurf",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/Giant_smurf.png?alt=media&token=96041577-f141-4947-84a5-d18088451097"
    },
    {
        "name": "glazed OG",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/glazed%20OG.png?alt=media&token=6c796861-6a28-4e7e-8dcf-4188639f90f7"
    },
    {
        "name": "glazed stix",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/glazed%20stix.png?alt=media&token=f104520d-5ef8-4878-9a33-919a7da2c8b9"
    },
    {
        "name": "gorilla glue",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/gorilla%20glue.png?alt=media&token=afd417ac-dcd7-4607-927f-767165cbc440"
    },
    {
        "name": "green crack",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/green%20crack.png?alt=media&token=61388853-8d09-43a1-b1af-2af61015dd0c"
    },

    {
        "name": "lemon tree",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/lemon%20tree.png?alt=media&token=4fac9d65-570b-48de-a084-e17b01cf67d2"
    },
    {
        "name": "Mendo purps",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/Mendo%20purps.png?alt=media&token=f1853386-62ea-4ce2-8b21-c0c3536c92f1"
    },
    {
        "name": "OG",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/OG.png?alt=media&token=d789df67-afc5-46a9-90c8-89d2cce66d0e"
    },
    {
        "name": "peanut butter breath",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/peanut%20butter%20breath.png?alt=media&token=11eed675-935c-40ee-904c-b4f3e83a4337"
    },
    {
        "name": "peyote cookies",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/peyote%20cookies.png?alt=media&token=c947b04c-b2ac-4203-9987-bd51bc353dde"
    },
    {
        "name": "royal blunt",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/royal%20blunt.png?alt=media&token=c933950b-3902-4cc6-85c3-8c9a55823ec3"
    },
    {
        "name": "shark shock",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/shark%20shock.png?alt=media&token=5dcedf52-b620-4899-9a67-52ae874a3d4e"
    },
    {
        "name": "sour OG cheese",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/sour%20OG%20cheese.png?alt=media&token=f2ba678a-7c2e-436f-b94e-67da9a13473b"
    },
    {
        "name": "stix",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/stix.png?alt=media&token=34bc3047-bfc8-4de8-8a8e-41cd14be393a"
    },
    {
        "name": "strawberry cough",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/strawberry%20cough.jpg?alt=media&token=772f2409-8265-4c28-b875-b3976e908e76"
    },
    {
        "name": "train wreck",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/train%20wreck.png?alt=media&token=d5d48b5a-58fe-4077-9312-8d103bda5444"
    },
    {
        "name": "mike bite",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/tyson%20mike%20bite.png?alt=media&token=2132ad19-c186-407c-b80a-fdc75346d3a3"
    },
    {
        "name": "unicorn poop",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/unicorn%20poop.png?alt=media&token=68eac875-faed-4c0f-a2a8-d9836d0dff96"
    },
    {
        "name": "unknown kush",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/unknown%20kush.png?alt=media&token=0503154a-98b0-41f0-b84a-7a7ee868bcee"
    },

    {
        "name": "wedding cake",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/wedding%20cake.jpg?alt=media&token=6be93410-0a93-4f33-9990-228ae213bd09"
    },


    {
        "name": "white wizard",
        "url": "https://firebasestorage.googleapis.com/v0/b/dawdispensary-142d4.appspot.com/o/white%20wizard.jpg?alt=media&token=fa5b3c7c-6a6b-445a-b378-ffcd91ba2310"
    },

]


