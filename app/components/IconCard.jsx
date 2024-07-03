import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";

const IconCard = ({ index, title, icon, url }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 1.50)}
        className='w-[200px] h-[200px] bg-primary-dark p-[1px] rounded-[20px] shadow-card'
    >
        <a
            href={url}
            className='group rounded-[20px] border border-primary-light px-5 py-4  hover:border-primary-light hover:bg-secondary-dark flex justify-evenly items-center flex-col'
            // target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src={icon}
                alt={title}
                className='w-16 h-16 object-contain'
            />

            <br />
            <h3 className='text-primary-light text-[16px] text-center'>
                {title}
            </h3>
        </a>
    </motion.div>
);

export default IconCard;
