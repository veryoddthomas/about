import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../utils/motion";

const IconCard = ({ index, title, icon, url }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 1.50)}
        className='bg-primary-dark p-[1px] rounded-[10px] shadow-card'
    >
        <a
            href={url}
            className='w-[150px] h-[150px] group rounded-[20px] border hover:bg-secondary-dark hover:shadow-lg hover:shadow-primary hover:border-4 border-primary-light px-4 py-4  hover:border-primary-light flex justify-evenly items-center flex-col'
            // hover:shadow-lg hover:shadow-primary
            // hover:bg-secondary-dark
            // target="_blank"
            rel="noopener noreferrer"
        >
            <div className='w-16 h-16'>
                <Image
                    src={icon}
                    alt={title}
                    className='w-16 h-16 object-contain'
                />

                <br />
            </div>
            <div className='text-center leading-tight'>
                {title}
            </div>
        </a>
    </motion.div>
);

export default IconCard;
