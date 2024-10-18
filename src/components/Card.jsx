import React from 'react'

export default function Card(props) {
    let badgeText

    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`./src/assets/${props.item.coverImg}`} className='card--image'/>
            <div className='card--stats'>
                <img src='./src/assets/star.png' className='card--star' />
                <span>{props.item.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount})</span>
                <span>•</span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className='card--title'>{props.item.title}</p>
            <p><span className='bold card--price'>From ${props.item.price} / person</span></p>
        </div>
    )
}