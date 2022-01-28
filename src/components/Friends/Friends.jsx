import React from 'react';
import s from './Friends.module.css';
import BestFriends from './BestFriends/BestFriends';


const Friends = (props) => {
    
    let bestFriendsElement = props.state.bestFriend.map
        (d => <BestFriends id={d.id} name={d.name} img={d.img} />)
    ;

    return (
        <div className={s.friendsItem}>
            <div>
                { bestFriendsElement }
            </div>
            <div>
                Friends
            </div>
        </div>
    )
}


export default Friends;