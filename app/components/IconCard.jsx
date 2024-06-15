import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, textVariant } from "../utils/motion";

const IconCard = ({ index, title, icon }) => (
    <motion.div
        variants={fadeIn("right", "spring", index * 0.15, 1.50)}
        className='xs:w-[250px] w-full bg-primary-dark p-[1px] rounded-[20px] shadow-card'
    >
        <div
            className='group rounded-[20px] border border-primary-light px-5 py-4  hover:border-primary-light hover:bg-secondary-dark flex justify-evenly items-center flex-col'
        >
            <Image
                src={icon}
                alt={title}
                className='w-24 h-24 object-contain'
            />

            <br />
            <h3 className='text-primary-light text-[20px] text-center'>
                {title}
            </h3>
        </div>
    </motion.div>
);

export default IconCard;
