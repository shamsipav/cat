import React, {FC, useState} from 'react';
// @ts-ignore
import styles from './pack.module.css';
import {num_word} from '../../utils/functions';

interface PackProps {
    label?: string
    name?: string
    product: string
    portions: number
    gifts: number
    weight: number
    measure?: string
    empty?: boolean
    description: string
    className?: string
}

const Pack: FC<PackProps> = (
    {
        name = 'Нямушка',
        label= 'Сказочное заморское явство',
        product,
        portions,
        gifts,
        weight,
        measure= 'кг',
        empty = false,
        description,
        className
    }) => {

    const [choosed, setChoosed] = useState(false)
    const [hovered, setHovered] = useState(false)

    const choosePack = () => {
        if (!empty) setChoosed(!choosed)
        if (hovered && !empty) setHovered(!hovered)
    }

    const hoverPack = (hover: boolean) => {
        if (choosed && !empty) setHovered(hover)
    }

    return (
        <div className={[styles.pack, className].join(' ')}>
            <div
                // className={styles.cardMask}
                className={empty ? [styles.cardMask, styles.emptyCardMask].join(' ') : styles.cardMask}
                onClick={choosePack}
                onMouseEnter={() => hoverPack(true)}
                onMouseLeave={() => hoverPack(false)}
            >
                <img className={styles.cat} src="./img/cat.png" alt="cat" draggable={false} />
            </div>
            <div
                className={choosed ? [styles.card, styles.choosedCard].join(' ') : (empty ? [styles.card, styles.emptyCard].join(' ') : styles.card)}
            >
                <div>
                    <p className={styles.label} style={hovered ? { color: "#E62E7A" } : undefined }>{hovered ? 'Котэ не одобряет?' : label}</p>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.product}>{product}</p>
                </div>
                <div className={styles.features}>
                    <p><span className={styles.count}>{portions}</span> {num_word(portions,['порция', 'порции', 'порций'])}</p>
                    {gifts > 1
                        ?
                        <p><span className={styles.count}>{gifts}</span> {num_word(gifts,['мышь', 'мыши', 'мышей'])} в подарок</p>
                        :
                        <p>мышь в подарок</p>
                    }
                    {gifts > 4 ? <p>заказчик доволен</p> : ''}
                </div>
                <div className={styles.circle}>
                    <span className={styles.weight}>{weight}</span>
                    <span className={styles.measure}>{measure}</span>
                </div>
            </div>
            {choosed ?
                <p className={styles.outside}>{description}</p>
                :
                (empty
                    ?
                    <p
                        className={[styles.emptyOutside, styles.outside].join(' ')}
                        onClick={choosePack}
                    >
                        Печалька, {product} закончился.
                    </p>
                    :
                    <p
                        className={styles.outside}
                        onClick={choosePack}
                    >
                        Чего сидишь? Порадуй котэ, <button className={styles.buy}>купи</button><span className={styles.blue}>.</span>
                    </p>
                )
            }
            <div></div>
        </div>
    );
};

export default Pack;